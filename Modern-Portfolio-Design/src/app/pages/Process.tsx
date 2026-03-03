import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Search, Lightbulb, Pen, Code2, CheckCircle, IterationCcw } from "lucide-react";

const phases = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Stakeholder Alignment",
    summary: "Before a single wireframe is drawn, I invest deeply in understanding the problem space.",
    details: [
      "Conduct structured stakeholder interviews to surface requirements, constraints, and success metrics",
      "Map the existing user journey to identify friction points and opportunities",
      "Audit competitive and analogous products to benchmark against industry standards",
      "Synthesize findings into a clear problem statement that all parties align on before moving forward",
    ],
    color: "bg-[#0EA5E9]/10 text-[#0EA5E9]",
    border: "border-[#0EA5E9]/30",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Research & Hypothesis Formation",
    summary: "Data-driven decisions start with asking the right questions and capturing the right signals.",
    details: [
      "Design and execute user research sessions — surveys, contextual inquiries, and diary studies",
      "Translate qualitative insights into quantifiable hypotheses with testable assumptions",
      "Construct user personas and mental models grounded in real behavioral data",
      "Define a research-backed north star metric that keeps the team focused throughout the project",
    ],
    color: "bg-amber-50 text-amber-600",
    border: "border-amber-200",
  },
  {
    number: "03",
    icon: Pen,
    title: "Design Thinking & Ideation",
    summary: "Exploration without constraints first — then ruthless prioritization.",
    details: [
      "Run collaborative ideation workshops (Crazy 8s, How Might We, SCAMPER) with cross-functional teams",
      "Produce low-fidelity sketches and information architecture diagrams to stress-test concepts quickly",
      "Iterate toward high-fidelity Figma prototypes with pixel-perfect design systems and component libraries",
      "Apply WCAG 2.1 AA accessibility standards and inclusive design principles from the start",
    ],
    color: "bg-purple-50 text-purple-600",
    border: "border-purple-200",
  },
  {
    number: "04",
    icon: Code2,
    title: "Technical Proof of Concept",
    summary: "I build what I design — functional prototypes that prove feasibility, not just aesthetics.",
    details: [
      "Architect lightweight PoCs using React/TypeScript, FastAPI, or relevant stack to the use case",
      "Integrate AI/ML components (LLMs, RAG pipelines, ML models) where they add genuine value",
      "Instrument the prototype with analytics hooks so real usage data can be gathered during testing",
      "Document technical decisions, trade-offs, and the path from PoC to production-ready system",
    ],
    color: "bg-emerald-50 text-emerald-600",
    border: "border-emerald-200",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Validation & Usability Testing",
    summary: "Assumptions are liabilities. Testing converts them into evidence.",
    details: [
      "Recruit representative participants and run moderated usability sessions against the working PoC",
      "Measure task completion rates, time-on-task, error rates, and SUS scores quantitatively",
      "Capture qualitative feedback through think-aloud protocols and post-session interviews",
      "Produce a prioritized findings report with severity ratings and actionable recommendations",
    ],
    color: "bg-rose-50 text-rose-600",
    border: "border-rose-200",
  },
  {
    number: "06",
    icon: IterationCcw,
    title: "Iteration & Stakeholder Handoff",
    summary: "Validated learning fuels the next sprint. Every cycle sharpens the product.",
    details: [
      "Incorporate usability findings into a refined design and updated technical architecture",
      "Present a structured case study to stakeholders — problem, process, evidence, outcome, next steps",
      "Deliver annotated design specs, API documentation, and a product roadmap for the engineering team",
      "Establish KPIs and a measurement framework to track real-world impact post-launch",
    ],
    color: "bg-[#0EA5E9]/10 text-[#0EA5E9]",
    border: "border-[#0EA5E9]/30",
  },
];

const principles = [
  {
    title: "Evidence Over Opinion",
    description:
      "Every design decision is anchored to user research, behavioral data, or a testable hypothesis. Intuition informs exploration; evidence validates direction.",
  },
  {
    title: "Make It Real, Early",
    description:
      "A clickable prototype or working PoC in week two beats a polished deck in week eight. Tangibility accelerates alignment and surfaces issues before they're expensive.",
  },
  {
    title: "Systems Thinking",
    description:
      "I design components, not screens. Every solution is considered within the broader product ecosystem, technical architecture, and organizational context.",
  },
  {
    title: "Radical Collaboration",
    description:
      "The best outcomes emerge when designers, engineers, and stakeholders share ownership. I run cross-functional working sessions, not handoffs.",
  },
];

export default function Process() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs uppercase tracking-widest text-[#0EA5E9] mb-4">
            My Process
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6">
            How I Approach Every Project
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            From ambiguous brief to validated proof of concept — a repeatable, research-driven
            framework I've refined across enterprise software, healthcare technology, and AI products.
          </p>
        </div>
      </section>

      {/* Process Phases */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.number}
                  className={`flex flex-col md:flex-row gap-6 md:gap-10 p-6 sm:p-8 rounded-xl border ${phase.border} bg-white`}
                >
                  {/* Left — number + icon */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 md:w-24 flex-shrink-0">
                    <span className="text-3xl text-gray-200 tabular-nums select-none">
                      {phase.number}
                    </span>
                    <div className={`p-3 rounded-lg ${phase.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Right — content */}
                  <div className="flex-1">
                    <h2 className="text-xl text-gray-900 mb-2">{phase.title}</h2>
                    <p className="text-sm text-gray-500 mb-4 italic">{phase.summary}</p>
                    <ul className="space-y-2">
                      {phase.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0EA5E9] flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-widest text-[#0EA5E9] mb-3">
              Guiding Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl text-gray-900">Principles I Work By</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="p-6 bg-white border border-gray-200 rounded-xl hover:border-[#0EA5E9] transition-colors"
              >
                <h3 className="text-base text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
