import { metodoForm } from "@/metodos/metodoForm";

export default function Home() {
  return (
    <form action={metodoForm}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="senha">senha</label>
      <input type="password" id="senha" name="senha" />
      <label htmlFor="outroCampo">outro Campo</label>
      <input type="text" id="outroCampo" name="outroCampo" />
      <button>Enviar</button>
    </form>
  );
}
