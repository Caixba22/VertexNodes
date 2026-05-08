import { HeaderSection } from "../sections/headerSection/HeaderSection";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-slate-50 antialiased">
      {/* Header persistente */}
      <HeaderSection />

      {/* Contenedor elástico para el contenido y el futuro Canvas 3D */}
      <main className="flex-1 flex flex-col w-full">
        {children}
      </main>
    </div>
  );
};