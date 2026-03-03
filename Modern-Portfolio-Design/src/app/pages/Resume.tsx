import { Download, Mail, Linkedin, Github, MapPin, ExternalLink } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const experience = [
  {
    role: "Senior Technical Product Designer",
    company: "Apex Innovation Labs",
    location: "Austin, TX",
    period: "Jan 2023 – Present",
    bullets: [
      "Led end-to-end design and technical prototyping of an LLM-powered real estate search platform (FASTer), reducing search-to-shortlist time by 42%.",
      "Architected a RAG pipeline using LangChain + FastAPI that ingested 50k+ property documents, serving AI-generated recommendations with <300 ms latency.",
      "Facilitated 30+ stakeholder interviews and 12 usability studies across three product lines, translating findings into validated proof-of-concepts.",
      "Established a component-driven Figma design system (800+ components) adopted by a 14-person engineering team.",
    ],
  },
  {
    role: "IT Researcher & UX Designer",
    company: "HealthBridge Systems",
    location: "Remote",
    period: "Jun 2021 – Dec 2022",
    bullets: [
      "Designed and built a HIPAA-compliant telemedicine platform with AI-assisted triage, reducing average patient wait times by 28%.",
      "Integrated WebRTC video calls and FHIR R4 data standards into a React/Node.js architecture supporting 10k+ monthly active patients.",
      "Conducted accessibility audits and remediation across patient-facing interfaces, achieving WCAG 2.1 AA compliance.",
      "Collaborated with clinical staff and C-suite to define a 12-month product roadmap grounded in clinical workflow research.",
    ],
  },
  {
    role: "Product Design Intern → Junior Designer",
    company: "Nexus Analytics",
    location: "San Francisco, CA",
    period: "Aug 2019 – May 2021",
    bullets: [
      "Contributed to the design of an enterprise analytics dashboard serving Fortune 500 clients, iterating through 6 research-driven redesign cycles.",
      "Built D3.js data visualization components integrated with a TypeScript/React frontend and PostgreSQL backend.",
      "Ran A/B tests on key dashboard flows, improving chart comprehension scores by 19% among non-technical users.",
    ],
  },
];

const education = [
  {
    degree: "M.S. Human-Computer Interaction",
    school: "University of Texas at Austin",
    period: "2019 – 2021",
    note: "Thesis: Validating AI-Assisted Triage Interfaces in Emergency Telehealth Contexts",
  },
  {
    degree: "B.S. Computer Science, Minor in Cognitive Science",
    school: "Texas A&M University",
    period: "2015 – 2019",
    note: "Summa Cum Laude • Dean's List 7 semesters",
  },
];

const skills: { category: string; items: string[] }[] = [
  {
    category: "Design & Research",
    items: ["Figma", "Adobe XD", "Prototyping", "User Research", "Usability Testing", "Information Architecture", "WCAG / Accessibility"],
  },
  {
    category: "Development",
    items: ["Python", "TypeScript", "React", "FastAPI", "Node.js", "PostgreSQL", "REST & GraphQL APIs"],
  },
  {
    category: "AI & Data",
    items: ["LLM Integration", "RAG Systems", "LangChain", "OpenAI API", "Machine Learning", "Data Pipelines"],
  },
  {
    category: "Infrastructure",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
  },
];

const certifications = [
  "AWS Certified Solutions Architect – Associate (2024)",
  "Google UX Design Certificate (2022)",
  "HIPAA Privacy & Security Certification (2022)",
];

export default function Resume() {
  const handleDownload = () => {
    const pdfPath = new URL("../../assets/Ivan_Gonzalez_2026_Resume_uiux.pdf", import.meta.url).href;
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Ivan_Gonzalez_2026_Resume_uiux.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Page Header */}
      <section className="pt-32 pb-10 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="inline-block text-xs uppercase tracking-widest text-[#0EA5E9] mb-2">
              Resume
            </span>
            <h1 className="text-3xl sm:text-4xl text-gray-900">Ivan Gonzalez</h1>
            <p className="text-gray-500 mt-1 text-sm">Technical Product Designer & IT Researcher</p>
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-3 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0284C7] transition-colors text-sm flex-shrink-0"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </button>
        </div>
      </section>

      {/* Resume Body */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── LEFT COLUMN ── */}
            <div className="lg:col-span-1 space-y-8">

              {/* Contact */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-[#0EA5E9] mb-4">Contact</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    ivan.gonzalez@example.com
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    Austin, TX
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0EA5E9] transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      linkedin.com/in/ivangonzalez
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0EA5E9] transition-colors"
                    >
                      <Github className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      github.com/ivangonzalez
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-[#0EA5E9] mb-4">Skills</h2>
                <div className="space-y-5">
                  {skills.map((group) => (
                    <div key={group.category}>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">{group.category}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-[#0EA5E9] mb-4">Certifications</h2>
                <ul className="space-y-2">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0EA5E9] flex-shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="lg:col-span-2 space-y-10">

              {/* Summary */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-[#0EA5E9] mb-4">Summary</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Technical Product Designer and IT Researcher with 6+ years bridging the gap between
                  user research, interaction design, and full-stack prototyping. I specialize in
                  transforming ambiguous stakeholder requirements into validated proof of concepts that
                  secure buy-in and inform engineering roadmaps. Deep experience in AI/LLM integration,
                  healthcare technology, and enterprise data platforms.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-[#0EA5E9] mb-6">Experience</h2>
                <div className="space-y-8">
                  {experience.map((job, i) => (
                    <div key={i} className="relative pl-4 border-l-2 border-gray-200">
                      <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[#0EA5E9]" />
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                        <div>
                          <h3 className="text-base text-gray-900">{job.role}</h3>
                          <p className="text-sm text-gray-500">
                            {job.company} · {job.location}
                          </p>
                        </div>
                        <span className="text-xs text-gray-400 whitespace-nowrap sm:mt-1">{job.period}</span>
                      </div>
                      <ul className="space-y-1.5">
                        {job.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-gray-400 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-[#0EA5E9] mb-6">Education</h2>
                <div className="space-y-6">
                  {education.map((edu, i) => (
                    <div key={i} className="relative pl-4 border-l-2 border-gray-200">
                      <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[#0EA5E9]" />
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                        <div>
                          <h3 className="text-base text-gray-900">{edu.degree}</h3>
                          <p className="text-sm text-gray-500">{edu.school}</p>
                        </div>
                        <span className="text-xs text-gray-400 whitespace-nowrap sm:mt-1">{edu.period}</span>
                      </div>
                      <p className="text-xs text-gray-400 italic">{edu.note}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* PDF note */}
          <div className="mt-12 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-700">
            <strong>Note:</strong> To enable the PDF download, place your resume file named{" "}
            <code className="bg-amber-100 px-1 rounded">Ivan_Gonzalez_Resume.pdf</code> in the{" "}
            <code className="bg-amber-100 px-1 rounded">/public</code> directory.
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
