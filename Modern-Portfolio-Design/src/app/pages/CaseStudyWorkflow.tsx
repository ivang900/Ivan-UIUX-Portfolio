import { Link } from "react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Code2,
  Palette,
  Database,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function CaseStudyWorkflow() {
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
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <Badge className="bg-[#0EA5E9] text-white mb-4">
                    No-Code · 70% Process Reduction · AI Task Routing
                  </Badge>
                </div>
                <h1 className="text-5xl text-gray-900 mb-6">
                  WorkFlow: Making Enterprise Automation Accessible to Everyone
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Designing a no-code workflow builder that empowers operations
                  teams — not just engineers — to automate complex multi-step
                  business processes with AI-powered intelligent task routing.
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Role</div>
                    <div className="text-gray-900">Lead Product Designer & Interaction Architect</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Timeline</div>
                    <div className="text-gray-900">10 weeks (Q3 2023)</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Team</div>
                    <div className="text-gray-900">2 Designers, 5 Engineers, 1 ML Engineer</div>
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
                      <Badge variant="secondary">Figma</Badge>
                      <Badge variant="secondary">ProtoPie</Badge>
                      <Badge variant="secondary">Maze</Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Code2 className="h-4 w-4 mr-2" />
                      Development
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Vue.js</Badge>
                      <Badge variant="secondary">GraphQL</Badge>
                      <Badge variant="secondary">Kubernetes</Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Database className="h-4 w-4 mr-2" />
                      AI & Data
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">ML Routing</Badge>
                      <Badge variant="secondary">AI</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B. Ideation */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-900 mb-12 text-center">
              Ideation: The "Ambiguity" Phase
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl text-gray-900 mb-4">The Challenge</h3>
                <div className="prose prose-gray">
                  <p className="text-gray-600 mb-4">
                    Process mapping workshops with 11 operations managers across
                    four enterprise clients revealed a consistent bottleneck:
                    <strong> every automation request — no matter how simple — had
                    to be queued with the engineering team</strong>, creating a
                    2–6 week backlog that killed operational momentum.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Existing tools like Zapier and Make.com were too limited for
                    enterprise-scale logic, while enterprise options like MuleSoft
                    required dedicated integration specialists. Operations teams
                    were stuck in the middle — capable of defining what they
                    needed, but blocked from building it.
                  </p>
                  <p className="text-gray-600">
                    <strong>Key Pain Points:</strong>
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>2–6 week engineering queue for every automation request</li>
                    <li>Manual hand-offs causing 30%+ error rates in multi-step processes</li>
                    <li>No visibility into workflow status for operations managers</li>
                    <li>Zero reusability — similar workflows rebuilt from scratch each time</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl text-gray-900 mb-4">Stakeholder Synthesis</h3>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-sm uppercase tracking-wider text-[#0EA5E9] mb-4">User Personas</h4>
                  <div className="space-y-4 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="font-medium text-gray-900 mb-1">
                        Sandra, 44 – Operations Manager
                      </div>
                      <p className="text-sm text-gray-600">
                        "I know exactly what I need automated. I just can't build
                        it — and the dev team won't get to it for weeks."
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="font-medium text-gray-900 mb-1">
                        Carlos, 31 – Business Process Analyst
                      </div>
                      <p className="text-sm text-gray-600">
                        "I spend half my week chasing people about where a task
                        is in the process. There's no visibility."
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="font-medium text-gray-900 mb-1">
                        Priya, 36 – Engineering Lead
                      </div>
                      <p className="text-sm text-gray-600">
                        "30% of our sprint is ops automation tickets that
                        shouldn't require engineers at all."
                      </p>
                    </div>
                  </div>

                  <h4 className="text-sm uppercase tracking-wider text-[#0EA5E9] mb-4">Key Insights from Interviews</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#0EA5E9] mr-2 mt-0.5 flex-shrink-0" />
                      Drag-and-drop mental model is universally understood — use it
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#0EA5E9] mr-2 mt-0.5 flex-shrink-0" />
                      Real-time status visibility is as important as building the workflow
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#0EA5E9] mr-2 mt-0.5 flex-shrink-0" />
                      A template library would eliminate 60%+ of net-new requests
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* C. Initial Prototyping */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-900 mb-4 text-center">Initial Prototyping</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              First Draft: Mapping node-based interaction models and AI routing logic
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  img: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc3MjQ5Nzg4NXww&ixlib=rb-4.1.0&q=80&w=1080",
                  alt: "Drag-and-drop canvas wireframe",
                  title: "Drag-and-Drop Canvas",
                  desc: "Node-based workflow builder with connector lines and conditional branching logic",
                },
                {
                  img: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyNDY0NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
                  alt: "AI task routing",
                  title: "AI-Powered Task Router",
                  desc: "ML model that assigns tasks to the right team member based on workload, skills, and SLA",
                },
                {
                  img: "https://images.unsplash.com/photo-1707733260992-73ff6dbed163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBhcmNoaXRlY3R1cmUlMjBkaWFncmFtfGVufDF8fHx8MTc3MjQ5ODA3MHww&ixlib=rb-4.1.0&q=80&w=1080",
                  alt: "Process monitoring dashboard",
                  title: "Live Process Monitor",
                  desc: "Real-time workflow status dashboard with bottleneck detection and SLA countdown timers",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <ImageWithFallback
                    src={item.img}
                    alt={item.alt}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-sm text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* D. Feedback & Iteration Loop */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-orange-500 text-white mb-4">The Pivot</Badge>
              <h2 className="text-3xl text-gray-900 mb-4">The Feedback & Iteration Loop</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Week 5 usability sessions with operations managers exposed critical learnability barriers
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl text-gray-900 mb-6">Critical Stakeholder Feedback</h3>
                <div className="space-y-4">
                  {[
                    {
                      label: "Operations Manager",
                      issue: '"The canvas is blank when I open it — I have no idea where to start"',
                      detail: "Empty-state problem destroying first-run experience and triggering abandonment",
                    },
                    {
                      label: "Process Analyst",
                      issue: '"I built a workflow but I can\'t tell if the AI routing is making good decisions"',
                      detail: "Black-box routing logic eroding trust in automated assignments",
                    },
                    {
                      label: "IT Security",
                      issue: '"Workflow definitions are being stored unencrypted — these contain sensitive business logic"',
                      detail: "Missing at-rest encryption for workflow configuration data",
                    },
                    {
                      label: "Engineering Lead",
                      issue: '"GraphQL subscriptions are hammering the DB — 10k+ connections at scale"',
                      detail: "Real-time status updates creating unsustainable database connection load",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-sm text-gray-900 mb-1">
                          <strong>{item.label}:</strong> {item.issue}
                        </div>
                        <div className="text-xs text-gray-600">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl text-gray-900 mb-6">Before vs. After Design Evolution</h3>
                <div className="mb-8">
                  <div className="text-sm uppercase tracking-wider text-gray-500 mb-3">Before</div>
                  <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
                    <div className="text-sm text-gray-700 space-y-2">
                      <p>❌ Blank canvas with no onboarding or guided start</p>
                      <p>❌ Opaque AI routing with no explanation of decisions</p>
                      <p>❌ Unencrypted workflow definitions at rest</p>
                      <p>❌ GraphQL subscriptions causing DB connection storms</p>
                      <p>❌ No template library — every workflow built from scratch</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-[#0EA5E9] mb-3">After</div>
                  <div className="bg-blue-50 p-6 rounded-lg border border-[#0EA5E9]">
                    <div className="text-sm text-gray-700 space-y-2">
                      <p>✅ Template gallery as default start — 40+ pre-built workflow templates</p>
                      <p>✅ AI routing "reasoning panel" showing why each task was assigned</p>
                      <p>✅ AES-256 encryption for all workflow definitions at rest</p>
                      <p>✅ Event-driven architecture (Kafka) replacing subscription polling</p>
                      <p>✅ "Clone & customize" flow for duplicating and adapting existing workflows</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E. Final Deliverable */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-900 mb-4 text-center">
              Final Deliverable: The Proof of Concept
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              No-code workflow builder with AI task routing, live monitoring, and a 40+ template library
            </p>

            <div className="mb-12">
              <h3 className="text-xl text-gray-900 mb-6">High-Fidelity Interface</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyNDY0NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Workflow Builder Canvas"
                    className="w-full aspect-video object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-gray-900 mb-2">Visual Workflow Canvas</h4>
                    <p className="text-sm text-gray-600">
                      Drag-and-drop node builder with conditional branching, parallel paths,
                      and inline AI routing configuration — no code required
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyNDY2NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Process Monitor Dashboard"
                    className="w-full aspect-video object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-gray-900 mb-2">Live Process Monitor</h4>
                    <p className="text-sm text-gray-600">
                      Real-time workflow status with bottleneck heatmaps, SLA countdowns,
                      and AI routing transparency panels
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { stat: "70%", label: "Reduction in manual process steps" },
                { stat: "2→0wk", label: "Engineering queue eliminated for ops automation" },
                { stat: "40+", label: "Pre-built workflow templates at launch" },
                { stat: "30%", label: "Error rate reduction vs. manual hand-offs" },
              ].map((m) => (
                <div key={m.label} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                  <div className="text-3xl text-[#0EA5E9] mb-2">{m.stat}</div>
                  <div className="text-sm text-gray-600">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* F. Scaling the Vision */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-900 mb-4 text-center">Scaling the Vision</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              How WorkFlow could grow into the enterprise automation platform for every team
            </p>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#0EA5E9]"></div>
              <div className="space-y-12">
                {[
                  {
                    phase: "Phase 1: Intelligence Layer",
                    title: "Conversational Workflow Builder",
                    items: [
                      "Describe a process in plain English — AI generates the workflow graph",
                      "Anomaly detection alerting managers when workflows deviate from SLA",
                      "Predictive workload balancing based on historical task completion patterns",
                      "Smart suggestions for optimizing existing workflows based on run data",
                    ],
                    side: "left",
                  },
                  {
                    phase: "Phase 2: Enterprise Connectivity",
                    title: "Integration Marketplace",
                    items: [
                      "500+ pre-built connectors for Salesforce, SAP, Workday, Jira, and more",
                      "Custom connector SDK for internal engineering teams",
                      "Bi-directional sync with ERP systems via certified integration patterns",
                      "Webhook marketplace for real-time event-driven workflow triggers",
                    ],
                    side: "right",
                  },
                  {
                    phase: "Phase 3: Platform Governance",
                    title: "Compliance & Audit Infrastructure",
                    items: [
                      "Full audit trail for every workflow action with immutable logging",
                      "SOC 2 Type II and ISO 27001 compliance certifications",
                      "Multi-region deployment with data residency controls per workflow",
                      "Role-based workflow ownership with approval gates for production publishing",
                    ],
                    side: "left",
                  },
                ].map((item, i) => (
                  <div key={i} className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                    {item.side === "left" ? (
                      <>
                        <div className="md:text-right">
                          <div className="bg-white p-6 rounded-lg border border-gray-200 inline-block text-left">
                            <div className="text-sm uppercase tracking-wider text-[#0EA5E9] mb-2">{item.phase}</div>
                            <h4 className="text-lg text-gray-900 mb-3">{item.title}</h4>
                            <ul className="text-sm text-gray-600 space-y-2">
                              {item.items.map((b) => (
                                <li key={b} className="flex items-start">
                                  <ArrowRight className="h-4 w-4 text-[#0EA5E9] mr-2 mt-0.5 flex-shrink-0" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="hidden md:block"></div>
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block"></div>
                        <div>
                          <div className="bg-white p-6 rounded-lg border border-gray-200 inline-block">
                            <div className="text-sm uppercase tracking-wider text-[#0EA5E9] mb-2">{item.phase}</div>
                            <h4 className="text-lg text-gray-900 mb-3">{item.title}</h4>
                            <ul className="text-sm text-gray-600 space-y-2">
                              {item.items.map((b) => (
                                <li key={b} className="flex items-start">
                                  <ArrowRight className="h-4 w-4 text-[#0EA5E9] mr-2 mt-0.5 flex-shrink-0" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 hidden md:block">
                      <div className="w-8 h-8 bg-[#0EA5E9] rounded-full border-4 border-white"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link to="/">
                <Button className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-8 py-3">
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
