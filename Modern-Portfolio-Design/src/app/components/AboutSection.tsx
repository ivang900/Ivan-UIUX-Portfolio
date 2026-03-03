import {
  Code2,
  Palette,
  Database,
  Brain,
  Workflow,
  Cloud,
  Shield,
  Zap,
  Trophy,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import hackathonTeamImage from "../../assets/e5a488f1b2af3779ae9920137b2092ad19365006.png";

const skills = {
  Design: [
    { name: "Figma", icon: Palette },
    { name: "Canva", icon: Palette },
    { name: "User Research", icon: Brain },
    { name: "Prototyping", icon: Workflow },
  ],
  Development: [
    { name: "Python", icon: Code2 },
    { name: "Claude Code", icon: Code2 },
    { name: "Command Line Interface", icon: Zap },
    { name: "PostgreSQL", icon: Database },
  ],
  "AI & Data": [
    { name: "LLM Integration", icon: Brain },
    { name: "RAG Systems", icon: Database },
    { name: "Backend APIs", icon: Brain },
    { name: "Data Pipelines", icon: Workflow },
  ],
  Infrastructure: [
    { name: "AWS: RDS/EC2", icon: Cloud },
    { name: "Docker", icon: Cloud },
    { name: "Git", icon: Workflow },
  ],
};

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Bio Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4 sm:mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Hello! My name is Ivan Gonzalez and I am 3rd year Informatics major at UC Irvine where I leverage Tech, Data and AI to solve real world problems.
              </p>
              <p>
                With capabilities in Programming, Writing, Researching, and overall Communication 
                I find fulfillment in utilizing these skills to make the lives of others easier.
                
              </p>
              <p>
                My approach to problems combines user centered design methodologies with
                modern AI and cloud technologies. Whether it's building a RAG
                system for intelligent document processing or designing an
                intuitive dashboard for complex data, I focus on creating
                solutions that are both technically sound and delightfully
                usable.
              </p>
              <p>
                These past 10 weeks I have been exploring the intersection of generative AI and
                healthcare workflows and I am excited to see where my mind can lead innovative change next.
              </p>
            </div>
          </div>

          {/* Technical Toolkit */}
          <div>
            <h3 className="text-xl sm:text-2xl text-gray-900 mb-6 sm:mb-8">
              Technical Toolkit
            </h3>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm uppercase tracking-wider text-[#0EA5E9] mb-4">
                    {category}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {items.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200"
                        >
                          <Icon className="h-5 w-5 text-[#0EA5E9]" />
                          <span className="text-sm text-gray-700">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hackathon Winning Team Banner */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-[#0EA5E9]/10 via-amber-50 to-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 sm:p-8">
            <div className="flex-shrink-0 w-full md:w-1/2 lg:w-2/5">
              <ImageWithFallback
                src={hackathonTeamImage}
                alt="Hackathon Winning Team at IrvineHacks 2026"
                className="w-full rounded-lg shadow-lg object-cover aspect-[4/3]"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 px-4 py-1.5 rounded-full text-sm mb-3">
                <Trophy className="h-4 w-4" />
                Hackathon Winning Team
              </div>
              <h3 className="text-xl sm:text-2xl text-gray-900 mb-2">
                IrvineHacks 2026 — Track Winners
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                First American Best AI Usage in Real Estate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}