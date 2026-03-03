import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState, useRef } from "react";

export function Hero() {
  const [opacity, setOpacity] = useState(1);
  const heroRef = useRef<HTMLElement>(null);

  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Fade out over the first 40% of viewport scroll
      const fadeEnd = windowHeight * 0.4;
      const newOpacity = Math.max(0, 1 - scrollY / fadeEnd);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50"
    >
      {/* Breaking News Ticker */}
      <div className="absolute top-16 left-0 w-full overflow-hidden bg-[#0EA5E9] z-10">
        <div className="flex animate-[ticker_18s_linear_infinite] whitespace-nowrap py-2">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-8 text-white tracking-wider text-xs sm:text-sm"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" />
              BREAKING NEWS — HACKATHON WIN!!!!
              <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" />
            </span>
          ))}
        </div>
      </div>

      <div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
          opacity,
          transform: `translateY(${(1 - opacity) * 30}px)`,
          transition: "none",
          willChange: "opacity, transform",
        }}
      >
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight">
          Hello! I am <span className="text-[#0EA5E9]"> Ivan Gonzalez</span>
          <br />
          I Create{" "}
          <span className="text-[#0EA5E9]">Innovative Proof of Concepts</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto">
          I Enjoy Synthesizing Messy Data Into Tangible Ideation!
        </p>

        {/* CTA Button */}
        <Button
          onClick={scrollToWork}
          size="lg"
          className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group"
        >
          Explore My Work
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400"
        style={{ opacity: opacity }}
      >
        <span className="text-xs mb-2 tracking-wider uppercase">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}