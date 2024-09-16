import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Esta é a página sobre",
};

export default function SobrePage() {
  return (
    <main>
      <h2>Sobre</h2>
      <div id="empresa" style={{ marginTop: "1500px" }}>
        Empresa
      </div>
    </main>
  );
}
