import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Palette,
  Database,
  ExternalLink,
  Info,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default function CaseStudyHealthBridge() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center text-sm text-gray-700 hover:text-[#0EA5E9] transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* A. The Setup */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Project Title and Role */}
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <Badge className="bg-[#0EA5E9] text-white mb-4">
                    PHIT Intern
                  </Badge>
                </div>
                <h1 className="text-5xl text-gray-900 mb-6">
                  Rady Children's Health: Scoping & Designing A Health Coach Platform
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  This project allowed our team to explore the impact emerging technologies like AI Agents and LLMs can have in pediatric care settings.
                  
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Role</div>
                    <div className="text-gray-900">
                      UI/UX Researcher, Project Scoping, Collaboration, AI Agent Developer
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Timeline</div>
                    <div className="text-gray-900">10 weeks (Current Week: 9)</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Team</div>
                    <div className="text-gray-900">1 Ivan Gonzalez, 2 Jerald Adriano, 3 Kathryn Ng, 4 Thuy Nguyen</div>
                  </div>
                </div>
              </div>

              {/* Technical Stack Sidebar */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit">
                <h3 className="text-lg text-gray-900 mb-4">Technical Stack</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Palette className="h-4 w-4 mr-2" />
                      Design
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Figma Make</Badge>
                      <Badge variant="secondary">Gemini CLI</Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Code2 className="h-4 w-4 mr-2" />
                      Development
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">Claude Code</Badge>
                      <Badge variant="secondary">Git</Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Database className="h-4 w-4 mr-2" />
                      Standards & AI
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">HIPAA</Badge>
                      <Badge variant="secondary">AI Agent Safeguards</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Presentation Link & Back to Portfolio */}
        <section className="py-16 bg-white">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-4 py-2 rounded-lg text-sm mb-4">
              <Info className="h-4 w-4 flex-shrink-0" />
              This case study is still a work in progress as the internship has not concluded.
            </div>
            <a
              href="https://docs.google.com/presentation/d/11GmRxPr3gUl2qOnxbs3CK5dkJT9ez7kpCITV26NP1ic/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-8 py-3">
                View my presentation here!
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <div>
              <Link to="/">
                <Button variant="outline" className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10 px-8 py-3 mt-4">
                  Back to Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}