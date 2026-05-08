// src/pages/home/sections/WorkspaceSection.tsx
export const WorkspaceSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6">
      <div className="bg-slate-900 rounded-[2.5rem] p-4 lg:p-8 shadow-2xl overflow-hidden border border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* 1. PANEL DE INFORMACIÓN (3/12) */}
          <aside className="lg:col-span-3 flex flex-col gap-6">
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <h4 className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-4">Complexity Analysis</h4>
              <div className="space-y-2">
                <p className="text-white font-bold">Time: <span className="font-mono">O(n log n)</span></p>
                <p className="text-white font-bold">Space: <span className="font-mono">O(n)</span></p>
              </div>
            </div>
            {/* Espacio para Pseudocódigo */}
            <div className="flex-1 p-6 bg-black/30 rounded-2xl border border-slate-800 text-slate-400 font-mono text-xs">
              // Algoritmo activo...
            </div>
          </aside>

          {/* 2. ÁREA DEL MOTOR 3D (9/12) */}
          <div className="lg:col-span-9 flex flex-col gap-6">
            
            {/* Contenedor del Canvas: Proporción 16:9 fija */}
            <div className="relative w-full aspect-video bg-black rounded-3xl border border-slate-800 overflow-hidden shadow-inner">
               <div className="absolute inset-0 flex items-center justify-center">
                 {/* Aquí se inyectará <EmbeddedCanvas /> */}
                 <span className="text-slate-700 font-bold uppercase tracking-tighter text-4xl opacity-20">
                    WebGL Engine
                 </span>
               </div>
            </div>

            {/* 3. PANEL DE CONTROLES INFERIOR */}
            <div className="h-20 w-full bg-slate-800/50 rounded-2xl border border-slate-700/50 px-8 flex items-center justify-between">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white cursor-pointer hover:bg-indigo-500">▶</div>
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white cursor-pointer">↺</div>
              </div>
              <div className="flex-1 max-w-xs px-8">
                <div className="h-1 w-full bg-slate-700 rounded-full">
                  <div className="h-full w-1/3 bg-indigo-500 rounded-full shadow-[0_0_8px_indigo]"></div>
                </div>
              </div>
              <div className="text-slate-400 font-mono text-xs tracking-tighter">
                FPS: 60 | STEP: 0024
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};