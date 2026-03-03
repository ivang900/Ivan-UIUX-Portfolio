import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <AboutSection />
      <Footer />
    </div>
  );
}
