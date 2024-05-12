import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <div className="pt-20"><HeroSection/></div>
      <AboutSection/>
      <ProjectsSection/> 
      <EmailSection/>
    </>         
  );
}
