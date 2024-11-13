'use client';

import Interaction from '@/components/interaction';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

export default function PageRota() {
  const params = useParams();
  const routes = useRouter();
  React.useEffect(() => {
    console.log(params);
  }, [params]);
  return (
    <div>
      <h1>Essa é a rota</h1>
      <Interaction />
      <button onClick={() => routes.push('/rota/par')}>Ir para Par</button>
    </div>
  );
}
