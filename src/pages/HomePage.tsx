// src/pages/HomePage.tsx
import { HeroSection } from "../sections/heroSection/HeroSection";
import { MenuSection } from "../sections/menuSection/MenuSection";
import { WorkspaceSection } from "../sections/workSpaceSection/WorkspaceSection";

export const HomePage = () => {
  return (
    <article className="w-full flex flex-col gap-y-20 pb-20">
      <HeroSection />
      <MenuSection />
      <WorkspaceSection />
    </article>
  );
};