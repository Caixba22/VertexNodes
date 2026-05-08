// src/sections/headerSection/HeaderSection.tsx

export const HeaderSection = () => {
  return (
    <header className="h-16 shrink-0 sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 flex items-center justify-between">
      {/* Brand / Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
          A
        </div>
        <span className="font-bold text-xl tracking-tighter text-slate-900 uppercase">
          AlgoStruct <span className="text-indigo-600">3D</span>
        </span>
      </div>

      {/* Navigation / Info */}
      <nav className="flex items-center gap-6">
        <div className="hidden md:flex gap-4 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-indigo-600 transition-colors">Documentación</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">GitHub</a>
        </div>
        <div className="h-4 w-px bg-slate-200" />
        <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded-full uppercase tracking-widest">
          v1.0.0-stable
        </span>
      </nav>
    </header>
  );
};