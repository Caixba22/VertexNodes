// src/pages/home/sections/MenuSection.tsx
export const MenuSection = () => (
  <section className="w-full max-w-5xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <button className="p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-indigo-500 transition-colors text-left group">
        <h3 className="text-2xl font-bold group-hover:text-indigo-600">Sorting Algorithms</h3>
        <p className="text-slate-500 mt-2">Bubble Sort, Quick Sort, Merge Sort y más.</p>
      </button>
      <button className="p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-indigo-500 transition-colors text-left group">
        <h3 className="text-2xl font-bold group-hover:text-indigo-600">Data Structures</h3>
        <p className="text-slate-500 mt-2">Árboles Binarios, Grafos y Heaps en 3D.</p>
      </button>
    </div>
  </section>
);