import Image from "next/image";
import ShaderBackground from "../components/ShaderBackground4";

export default function TestPage() {
  return (
    <>
      <ShaderBackground />
      <main className="relative z-[1] flex min-h-screen flex-col items-center justify-center p-8">
        <Image
          src="/logohero.svg"
          alt="Coan Logo"
          width={500}
          height={129}
          priority
          className="max-w-[90vw] h-auto"
        />
      </main>
    </>
  );
}
