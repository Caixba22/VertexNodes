// src/pages/home/sections/heroSection/HeroSection.tsx
export const HeroSection = () => (
  <section className="relative flex min-h-[68vh] w-full items-center justify-center overflow-hidden px-4 pt-20 text-center">
    <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-data-active/20 blur-3xl" />
    <div className="absolute left-10 top-40 h-56 w-56 rounded-full bg-data-comparing/10 blur-3xl" />
    <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-data-critical/10 blur-3xl" />

    <div className="relative z-10 flex max-w-5xl flex-col items-center">
      <div className="mb-6 rounded-full border border-algo-border bg-surface/70 px-4 py-2 text-xs font-mono uppercase tracking-widest text-text-secondary backdrop-blur-xl">
        Zero Assets · Procedural Geometry · GPU First
      </div>

      <h1 className="mb-6 max-w-5xl text-5xl font-black leading-tight tracking-tighter text-text-primary md:text-7xl">
        La lógica de los algoritmos,{" "}
        <span className="text-algo-accent">espacializada.</span>
      </h1>

      <p className="mb-10 max-w-2xl text-base leading-8 text-text-secondary md:text-lg">
        Visualiza estructuras de datos y algoritmos de ordenamiento en un
        entorno 3D de alto rendimiento. Sin abstracciones innecesarias: solo
        memoria, geometría procedural y ejecución controlada.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="#workspace"
          className="rounded-2xl bg-data-active px-6 py-3 text-sm font-bold text-text-primary shadow-lg transition hover:scale-[1.02] hover:bg-algo-accent"
        >
          Abrir Workspace
        </a>

        <a
          href="#algorithm-menu"
          className="rounded-2xl border border-algo-border bg-surface/80 px-6 py-3 text-sm font-bold text-text-primary backdrop-blur-xl transition hover:border-data-comparing hover:text-data-comparing"
        >
          Ver algoritmos
        </a>
      </div>
    </div>
  </section>
);