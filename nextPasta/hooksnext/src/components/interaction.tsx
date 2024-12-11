'use client';

import { redirect } from 'next/navigation';

export default function Interaction() {
  function mostrarParams() {
    redirect('rota');
  }

  return (
    <div>
      <h1>Aqui está os dados: </h1>
      <button onClick={mostrarParams}>Clique</button>
    </div>
  );
}
