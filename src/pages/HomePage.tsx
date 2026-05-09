// src/pages/HomePage.tsx
import { HeroSection } from "../sections/heroSection/HeroSection";
import { FloatingMenuSection } from "../sections/floatingMenuSection/FloatingMenuSection";
import { WorkspaceSection } from "../sections/workSpaceSection/WorkspaceSection";


export const HomePage = () => {
  return (
    <article className="relative w-full flex flex-col gap-y-20 pb-20">
      <FloatingMenuSection />

      <HeroSection />

   

      <section id="workspace" className="scroll-mt-28">
        <WorkspaceSection />
      </section>
    </article>
  );
};