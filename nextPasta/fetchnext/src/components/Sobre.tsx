import Link from "next/link";
import ClientFetch from "./Server-Client";

export default function Sobre() {
  return (
    <div>
      <Link href="/" style={{ margin: "1rem" }}>
        Home
      </Link>
      <Link href="/sobre">Sobre</Link>

      <h1>Essa é a Sobre</h1>
      <ClientFetch />
    </div>
  );
}
