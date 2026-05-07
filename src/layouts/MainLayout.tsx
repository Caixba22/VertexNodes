import type { ReactNode } from 'react';

// Definimos los "huecos" que tendrá nuestro layout
interface MainLayoutProps {
  uiPanel: ReactNode;  // Aquí inyectaremos los controles HTML
  mapArea: ReactNode;  // Aquí inyectaremos el Canvas 3D
}

export default function MainLayout({ uiPanel, mapArea }: MainLayoutProps) {
  return (
    // Conectamos con .layout-container de tu index.css
    <div className="layout-container">
      
      {/* Conectamos con .layout-sidebar */}
      <aside className="layout-sidebar">
        {uiPanel}
      </aside>

      {/* Conectamos con .layout-main */}
      <main className="layout-main">
        {mapArea}
      </main>

    </div>
  );
}