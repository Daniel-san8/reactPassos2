import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hooks Next',
  description: 'Hooks Next',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body>{children}</body>
    </html>
  );
}
