type PageParams = {
  params: {
    slugs: string[];
  };
};

export default async function CursosPage({ params }: PageParams) {
  console.log(params.slugs);
  return (
    <main>
      <h1>Cursos</h1>
    </main>
  );
}
