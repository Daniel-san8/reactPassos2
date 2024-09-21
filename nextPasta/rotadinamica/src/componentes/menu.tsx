import Link from "next/link";
//menu no next
export default function Menu() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/produtos">Produtos</Link>
      </li>
    </ul>
  );
}
