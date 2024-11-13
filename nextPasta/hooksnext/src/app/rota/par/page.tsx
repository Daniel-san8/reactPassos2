'use client';

import { useParams, usePathname } from 'next/navigation';
import React from 'react';

export default function PagePar() {
  const param = useParams();
  const pathname = usePathname();

  React.useEffect(() => {
    console.log(pathname);
  }, []);
  return <div>Par: </div>;
}
