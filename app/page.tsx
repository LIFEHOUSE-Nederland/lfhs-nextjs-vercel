export default function HomePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 text-neutral-950">
      <div className="mx-auto max-w-4xl space-y-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Project setup
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          LIFEHOUSE Amsterdam
        </h1>
        <p className="max-w-2xl text-base leading-7 text-neutral-700 sm:text-lg">
          Deze pagina is bewust minimaal gehouden. De basis voor Next.js 15,
          TypeScript, Tailwind CSS v4 en static export staat klaar voor verdere
          uitwerking.
        </p>
      </div>
    </main>
  );
}
