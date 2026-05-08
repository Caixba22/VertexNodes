// src/pages/home/sections/HeroSection.tsx
export const HeroSection = () => (
  <section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-20">
    <h1 className="text-6xl font-black text-slate-900 mb-6 max-w-4xl">
      La lógica de los algoritmos, <span className="text-indigo-600">espacializada.</span>
    </h1>
    <p className="text-lg text-slate-600 max-w-2xl mb-10">
      Visualiza estructuras de datos y algoritmos de ordenamiento en un entorno 3D de alto rendimiento. 
      Sin abstracciones, solo matemáticas y geometría pura.
    </p>
    <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-indigo-200 hover:scale-105 transition-transform">
      Empezar Simulación
    </button>
  </section>
);