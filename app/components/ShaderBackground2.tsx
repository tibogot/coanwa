"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useEffect, useSyncExternalStore } from "react";
import * as THREE from "three";

// Safe hydration hook - prevents SSR issues
const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  #define S(a,b,t) smoothstep(a,b,t)
  
  // Rotation Function
  mat2 Rot(float a) {
    float s = sin(a);
    float c = cos(a);
    return mat2(c, -s, s, c);
  }
  
  // Create Noise
  // Created by inigo quilez - iq/2014
  // License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
  vec2 hash( vec2 p ) {
    p = vec2( dot(p,vec2(2127.1,81.17)), dot(p,vec2(1269.5,283.37)) );
    return fract(sin(p)*43758.5453);
  }
  
  float noise( in vec2 p ) {
    vec2 i = floor( p );
    vec2 f = fract( p );
    vec2 u = f*f*(3.0-2.0*f);
    float n = mix( mix( dot( -1.0+2.0*hash( i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ), 
                        dot( -1.0+2.0*hash( i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                   mix( dot( -1.0+2.0*hash( i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ), 
                        dot( -1.0+2.0*hash( i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
    return 0.5 + 0.5*n;
  }
  
  // Vars
  uniform vec3 color1;
  uniform vec3 color2;
  uniform vec3 color3;
  uniform vec3 color4;
  uniform vec3 iResolution;
  uniform float iTime;
  uniform vec2 iMouse;
  varying vec2 vUv;
  
  void main() {
    float ratio = iResolution.x / iResolution.y;
    vec2 tUv = vUv;
    tUv -= 0.25;
    
    // Mouse Interaction
    vec2 mouse = vec2(iMouse.x * ratio, iMouse.y * ratio);
    
    // Rotation with Noise
    float degree = noise(vec2(iTime * 0.1, tUv.x * tUv.y));
    tUv.y *= 1.0 / ratio;
    tUv *= Rot( radians( (degree - 0.5) * 720.0 + 180.0 ));
    tUv.y *= ratio;
    
    // Wave warp with sin
    float frequency = 2.0;
    float amplitude = 20.0;
    float speed = iTime * 1.25;
    
    tUv.x += sin( tUv.y * frequency + speed) / amplitude;
    tUv.y += sin( tUv.x * frequency * 1.5 + speed ) / ( amplitude * 0.5);
    
    // Draw the Image
    vec3 layer1 = mix(color1, color2, S( -.3, .3, ( tUv * Rot( radians( -6.0))).x));
    vec3 layer2 = mix(color3, color4, S( -.3, .3, ( tUv * Rot( radians( -6.0))).x));
    vec3 finalComp = mix(layer1, layer2, S( 0.5, -.3, tUv.y ));
    
    vec3 col = finalComp;
    
    gl_FragColor = vec4(col, 1.0);
  }
`;

interface GradientPlaneProps {
  colors?: {
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
  };
}

function GradientPlane({ colors }: GradientPlaneProps) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      iTime: { value: 0 },
      iResolution: {
        value: new THREE.Vector3(window.innerWidth, window.innerHeight, 1),
      },
      iMouse: { value: new THREE.Vector2(0, 0) },
      color1: { value: new THREE.Color(colors?.color1 ?? "#62d8e0") },
      color2: { value: new THREE.Color(colors?.color2 ?? "#020328") },
      color3: { value: new THREE.Color(colors?.color3 ?? "#0e3e5d") },
      color4: { value: new THREE.Color(colors?.color4 ?? "#030329") },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / window.innerWidth - 0.5;
      mouseRef.current.y = e.clientY / window.innerHeight - 0.5;
    };

    const handleMouseOut = () => {
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      mouseRef.current.x = touch.pageX / window.innerWidth - 0.5;
      mouseRef.current.y = touch.pageY / window.innerHeight - 0.5;
    };

    const handleTouchEnd = () => {
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Animation loop - updates uniforms every frame
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.iTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.iResolution.value.set(
        window.innerWidth * state.viewport.dpr,
        window.innerHeight * state.viewport.dpr,
        1
      );
      materialRef.current.uniforms.iMouse.value.set(
        mouseRef.current.x,
        mouseRef.current.y
      );
    }
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 40, 40]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

interface ShaderBackgroundProps {
  colors?: {
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
  };
}

export default function ShaderBackground({ colors }: ShaderBackgroundProps) {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        background: "#000",
      }}
    >
      <Canvas
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 1] }}
      >
        <GradientPlane colors={colors} />
      </Canvas>
    </div>
  );
}
