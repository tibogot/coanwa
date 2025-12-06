import Image from "next/image";
import ShaderBackground from "../components/ShaderBackground4";

export default function TestPage() {
  return (
    <>
      <ShaderBackground />
      <main
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <Image
          src="/logohero.svg"
          alt="Coan Logo"
          width={500}
          height={129}
          priority
          style={{
            maxWidth: "90vw",
            height: "auto",
          }}
        />
      </main>
    </>
  );
}
