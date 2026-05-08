// src/App.tsx
import { AppLayout } from "./layouts/AppLayout";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    // El Layout provee el Header y la estructura base
    <AppLayout>
      {/* La HomePage inyecta el Hero, el Menú y el Workspace 3D */}
      <HomePage />
    </AppLayout>
  );
}