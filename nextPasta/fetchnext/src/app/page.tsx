import ServerFetch from "@/components/Server-Fetch";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/" style={{ margin: "1rem" }}>
        Home
      </Link>
      <Link href="/sobre">Sobre</Link>

      <h1>Essa é a Home</h1>
      <ServerFetch />
    </div>
  );
}