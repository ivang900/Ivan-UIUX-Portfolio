import { useParams, Link } from "react-router";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Code2,
  Palette,
  Database,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import fastUiScreenshot from "../../assets/c620e9505204ce83b34c397a99a61583eee2f322.png";
import fasterComplianceUI from "../../assets/accc557f4c6c2b748ca8aa60ee414f9b5ecf6a2d.png";
import fasterHomepage from "../../assets/119310a9bc320c7d3f88a4a7ef459eedb94734ed.png";
import chatgptPrompt1 from "../../assets/1cb97b13dfcb1094c999e08b54ae480a11853dba.png";
import chatgptPrompt2 from "../../assets/b209f5d47941b96b020fae1513692b175c15bd0b.png";
import chatgptPrompt3 from "../../assets/1ece52badf101583d9b7784100edf105eaf2b49d.png";
import fastFileWorkspace from "../../assets/456a5e6ba81f403831d2456e8782153605f02bd8.png";
import fastGrantDeed from "../../assets/34e4caa9c12ee3a69417f70b506f6c59dbeb3269.png";
import fastArchitecture from "../../assets/a2efac662385a6b42e5f7de09cdfe5c364e42f12.png";
import finalDemoVideo from "../../assets/finaldemo.mov";

export default function CaseStudy() {
  const { id } = useParams();
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselImages = [
    { src: chatgptPrompt1, alt: "ChatGPT prompt - scoping the FASTer system requirements" },
    { src: chatgptPrompt2, alt: "ChatGPT response - system architecture for escrow agents" },
    { src: chatgptPrompt3, alt: "FAST File Workspace - compliance monitoring UI" },
  ];

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
                    Hackathon Project
                  </Badge>
                </div>
                <h1 className="text-5xl text-gray-900 mb-6">
                  FASTer: A Usable, Accessible and... FASTER UI Experience!
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Internal tools should be improving efficiency and reducing friction, not causing it. No one enjoys doing busy work and even fewer people enjoy doing it on a clunky outdated User Interface. That is why we set out to Research, Plan, and Develop FASTer, a full UI/UX refactoring of First American's FAST internal tool.
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Role</div>
                    <div className="text-gray-900">
                      I assisted with both UI/UX Research and Implementation. I enjoy wearing many hats!
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Timeline</div>
                    <div className="text-gray-900">36 hours</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Team</div>
                    <div className="text-gray-900">
                      1{" "}
                      <a href="https://www.linkedin.com/in/ivang9/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0EA5E9] transition-colors">Ivan Gonzalez</a>,{" "}
                      2{" "}
                      <a href="https://www.linkedin.com/in/mia-desiree-aburto/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0EA5E9] transition-colors">Mia Aburto</a>,{" "}
                      3{" "}
                      <a href="https://www.linkedin.com/in/kanec-olivares/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0EA5E9] transition-colors">Kanec Olivares</a>,{" "}
                      4{" "}
                      <a href="https://www.linkedin.com/in/eric-estrada-458297283/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0EA5E9] transition-colors">Eric Estrada</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Stack Sidebar */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit">
                <h3 className="text-lg text-gray-900 mb-4">
                  Technical Stack
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Palette className="h-4 w-4 mr-2" />
                      Design
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Figma</Badge>
                      <Badge variant="secondary">Gemini CLI</Badge>
                      <Badge variant="secondary">Creativity</Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Code2 className="h-4 w-4 mr-2" />
                      Development
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">FastAPI</Badge>
                      <Badge variant="secondary">Claude Code</Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Database className="h-4 w-4 mr-2" />
                      AI & Data
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Gemini 2.5 Flash</Badge>
                      <Badge variant="secondary">Mock Data Generation</Badge>
                      <Badge variant="secondary">Agents</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B. Ideation (The "Ambiguity" Phase) */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-900 mb-12 text-center">
              Research & Ideation: The "Ambiguity" Phase
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* The Challenge */}
              <div>
                <h3 className="text-xl text-gray-900 mb-4">
                  The Challenge
                </h3>
                <div className="prose prose-gray">
                  <p className="text-gray-600 mb-4">
                    <strong>No data</strong>.<br />
                    <strong>No access to FAST</strong>.<br />
                    <strong>No domain knowledge</strong>.
                  </p>
                  <p className="text-gray-600 mb-4">
                    An ambitious undertaking for a 36 hour hackathon. Despite all the ambiguities, we embraced the challenge and successfully navigated this phase.  
                  </p>
                  <p className="text-gray-600">
                    <strong>Key Pain Points:</strong>
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>Simply put. It's hard on the eyes.</li>
                    <li>Abundance of menu options. </li>
                    <li>Too many clicks to do anything.</li>
                    <li>Too much room for error.</li>
                  </ul>
                  <div className="mt-6">
                    <img
                      src={fastUiScreenshot}
                      alt="The original FAST user interface we set out to redesign"
                      className="w-full rounded-lg border border-gray-200 shadow-sm"
                    />
                    <p className="text-sm text-[#0EA5E9] mt-2 font-semibold">
                      This was the User Interface we set out to redesign. It was also the only information we had on it...
                    </p>
                  </div>
                </div>
              </div>

              {/* Stakeholder Synthesis */}
              <div>
                <h3 className="text-xl text-gray-900 mb-4">
                  Stakeholder Communication
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-sm uppercase tracking-wider text-[#0EA5E9] mb-4">
                    Primary Data Sources
                  </h4>
                  <div className="space-y-4 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="font-medium text-gray-900 mb-1">
                        Booth Attendee-Current UX Product Designer
                      </div>
                      <p className="text-sm text-gray-600">
                        Cleared up misconceptions on our understanding of the real estate transaction process. Provided first hand accounts of the FAST system. This assisted in providing context for improvements.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="font-medium text-gray-900 mb-1">
                        Booth Attendee-Current First American Employee
                      </div>
                      <p className="text-sm text-gray-600">
                        Provided insightful answers to questions about document templates, Power of Attorney documents, and Deeds. This helped us scope the functionality of our UI/UX redesign.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="font-medium text-gray-900 mb-1">
                        General Hackathon Staff
                      </div>
                      <p className="text-sm text-gray-600">
                        Provided an outside perspective that allowed us to test our understanding of the domain by explaining our user flow logic. We operated under the assumption that if a general user can understand what it does, so can a technical one.
                      </p>
                    </div>
                  </div>

                  <h4 className="text-sm uppercase tracking-wider text-[#0EA5E9] mb-4">
                    Key Insights from Interviews
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#0EA5E9] mr-2 mt-0.5 flex-shrink-0" />
                      Real Estate transactions CANNOT proceed if there are clerical or legal inconsistencies.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#0EA5E9] mr-2 mt-0.5 flex-shrink-0" />
                      Errors can lead to negative financial and reputational consequences.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#0EA5E9] mr-2 mt-0.5 flex-shrink-0" />
                      Humans make mistakes, and constant manual busy work only increases that likelihood.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-[#0EA5E9] mr-2 mt-0.5 flex-shrink-0" />
                      It's time for a redesign.
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
            <h2 className="text-3xl text-gray-900 mb-4 text-center">
              Initial Prototyping
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Witness the evolution of our drafts!
            </p>

            {/* Gallery of Initial Designs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="relative">
                  <img
                    src={carouselImages[carouselIndex].src}
                    alt={carouselImages[carouselIndex].alt}
                    className="w-full aspect-video object-cover object-top"
                  />
                  {/* Left Arrow */}
                  <button
                    onClick={() => setCarouselIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-md transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-4 w-4 text-gray-700" />
                  </button>
                  {/* Right Arrow */}
                  <button
                    onClick={() => setCarouselIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-md transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-4 w-4 text-gray-700" />
                  </button>
                  {/* Dot Indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {carouselImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCarouselIndex(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          i === carouselIndex ? "bg-[#0EA5E9]" : "bg-white/70"
                        }`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm text-gray-900 mb-2">
                    An AI powered quickstart.
                  </h4>
                  <p className="text-xs text-gray-600">
By investing heavily in scoping and research, we developed a refined prompt that effectively leveraged AI, using our collective insights to map out the project's direction.                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <img
                  src={fastFileWorkspace}
                  alt="FAST File Workspace - Enterprise Escrow Intelligence Platform"
                  className="w-full aspect-video object-cover object-top"
                />
                <div className="p-4">
                  <h4 className="text-sm text-gray-900 mb-2">
                    Manual editing on Figma! 
                  </h4>
                  <p className="text-xs text-gray-600">
                    Co Researcher Mia Aburto and I took the LLM generated initial prototype to Figma and began to realize our visions.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <img
                  src={fastGrantDeed}
                  alt="FAST File Workspace - Grant Deed with FAST Co-Pilot compliance validation"
                  className="w-full aspect-video object-cover object-top"
                />
                <div className="p-4">
                  <h4 className="text-sm text-gray-900 mb-2">
                    One last check before takeoff!
                  </h4>
                  <p className="text-xs text-gray-600">
                    As a team we agreed this was the visualization of all our current understandings of the scope. We were ready to collect feedback and begin iterating again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* D. The Feedback & Iteration Loop */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-orange-500 text-white mb-4">Back to the Drawing Board</Badge>
              <h2 className="text-3xl text-gray-900 mb-4">
                The Feedback & Iteration Loop
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A general synthesis of all the conversational data sourced from First American Panelists. 
              </p>
            </div>

            {/* Split-screen layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Critical Stakeholder Feedback */}
              <div>
                <h3 className="text-xl text-gray-900 mb-6">
                  Critical Stakeholder Feedback
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">
                      1
                    </div>
                    <div>
                      <div className="text-sm text-gray-900 mb-1">
                        <strong>Color Template Concerns:</strong> Too much blue.
                      </div>
                      <div className="text-xs text-gray-600">
                        This was a fair concern, what we presented did utilize many shades of a blue and even a solid blue rectangle panel.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">
                      2
                    </div>
                    <div>
                      <div className="text-sm text-gray-900 mb-1">
                        <strong>Branding</strong> Adds a nice touch but 3 logos is too many.
                      </div>
                      <div className="text-xs text-gray-600">
                        In an attempt to retain brand identity we opted to include First American branding. However, we were unsure on placement and opted to show place logos in many areas.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">
                      3
                    </div>
                    <div>
                      <div className="text-sm text-gray-900 mb-1">
                        <strong>Navigation Concerns</strong> More of dashboard than a site/UI. 
                      </div>
                      <div className="text-xs text-gray-600">
                        We were missing a key component of any modern fluid website, a navigation menu.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">
                      4
                    </div>
                    <div>
                      <div className="text-sm text-gray-900 mb-1">
                        <strong>Is this secure?</strong> Our platform must appear credible and safe
                      </div>
                      <div className="text-xs text-gray-600">
                        Data security and integrity became a key talking point during our feedback collection. We needed to make it apparent our platform is safe. 
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Before vs. After */}
              <div>
                <h3 className="text-xl text-gray-900 mb-6">
                  Before vs. After Design Evolution
                </h3>

                {/* Before */}
                <div className="mb-8">
                  <div className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                    Before
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
                    <div className="text-sm text-gray-700 space-y-2">
                      <p>❌ Too much blue poor color palette</p>
                      <p>❌ Way too many logos, cluttering the UI</p>
                      <p>❌ Missing a navigation menu, missing the FAST in FASTer</p>
                      <p>❌ Credibility and trust was not visually obvious</p>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div>
                  <div className="text-sm uppercase tracking-wider text-[#0EA5E9] mb-3">
                    After
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border border-[#0EA5E9]">
                    <div className="text-sm text-gray-700 space-y-2">
                      <p>✅ Simpler color palette</p>
                      <p>
                        ✅ Decided on the final placement of ONE logo.
                      </p>
                      <p>
                        ✅ Included a navigation menu to quickly move between modules.
                      </p>
                      <p>
                        ✅ Final design included a footer that in real time displayed the security that would in theory be running in the background. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E. Final Deliverable (The Proof of Concept) */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-900 mb-4 text-center">
              Final Deliverable: The Proof of Concept
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              High-fidelity UI paired with functional technical architecture
            </p>

            {/* High-Fidelity UI Mockups */}
            <div className="mb-12">
              <h3 className="text-xl text-gray-900 mb-6">
                A FASTer redesigned experience!
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                  <img
                    src={fasterHomepage}
                    alt="FASTer Homepage - The Future of Title & Escrow"
                    className="w-full aspect-video object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-gray-900 mb-2">
                      Landing Page Overhaul
                    </h4>
                    <p className="text-sm text-gray-600">
                      Login features allow users to save files and pick up right where they left off!
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                  <video
                    src={finalDemoVideo}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full aspect-video object-cover bg-black"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-6">
                    <h4 className="text-gray-900 mb-2">
                      My Parsing Agent
                    </h4>
                    <p className="text-sm text-gray-600">
                      Reduce workload and errors. Parse POAS and Cross Validate them in seconds! With my Agent!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Architecture */}
            <div>
              <h3 className="text-xl text-gray-900 mb-6">
                Parsing Agent: Technical Architecture Diagram
              </h3>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <ImageWithFallback
                  src={fastArchitecture}
                  alt="Technical Architecture"
                  className="w-full object-contain"
                />
                <div className="p-6">
                  <h4 className="text-gray-900 mb-4">
                    Mock Data Generation 
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-sm uppercase tracking-wider text-[#0EA5E9] mb-2">
                        Creative Problem Solving
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• First and foremost, this allowed us to navigate around our lack of data.</li>
                        <li>• Fueled our development and served as the backbone of our frontend functionality.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-wider text-[#0EA5E9] mb-2">
                        Why It Works
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Grounded with real First American Document templates</li>
                        <li>• Pre defined fields leave no room for LLM hallucinations. It is simply drag and dropping.</li>
                        <li>• We only needed to model the states of our interface. Since all documents would follow the same template, repeating API calls would slow down our deliverable. Instead we opted to cache API calls to focus on displaying our redesign.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-wider text-[#0EA5E9] mb-2">
                        Functionality
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• We only needed to model the states of our interface. Since all documents would follow the same template, repeating API calls would slow down our deliverable. Instead we opted to cache API calls to focus on displaying our redesign.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* F. "Hypothetical" What's Next */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-900 mb-4 text-center">
              Scaling the Vision
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              How this Proof of Concept could evolve into a full scale production environment
            </p>

            {/* Roadmap-style section */}
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#0EA5E9]"></div>

              {/* Roadmap items */}
              <div className="space-y-12">
                {/* Phase 1 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 inline-block">
                      <div className="text-sm uppercase tracking-wider text-[#0EA5E9] mb-2">
                        Phase 1: Access to Data
                      </div>
                      <h4 className="text-lg text-gray-900 mb-3">
                        When it comes to Agents. Context is KING
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2 text-left">
                        <li className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-[#0EA5E9] mr-2 mt-0.5 flex-shrink-0" />
                          Provide more parsing template functionality
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-[#0EA5E9] mr-2 mt-0.5 flex-shrink-0" />
                          Cross validation from more sources
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-[#0EA5E9] mr-2 mt-0.5 flex-shrink-0" />
                          Allow reduction of user error across a wider variety of document types
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 hidden md:block">
                    <div className="w-8 h-8 bg-[#0EA5E9] rounded-full border-4 border-white"></div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="hidden md:block"></div>
                  <div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 inline-block">
                      <div className="text-sm uppercase tracking-wider text-[#0EA5E9] mb-2">
                        Phase 2: More Agent Implementation
                      </div>
                      <h4 className="text-lg text-gray-900 mb-3">
                        Advanced AI Features
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-[#0EA5E9] mr-2 mt-0.5 flex-shrink-0" />
                          Scope out and implement more innovative ways to use Agents
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-[#0EA5E9] mr-2 mt-0.5 flex-shrink-0" />
                          With access to more data, agents could provide real time answers to questions
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 hidden md:block">
                    <div className="w-8 h-8 bg-[#0EA5E9] rounded-full border-4 border-white"></div>
                  </div>
                </div>

              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <Link to="/">
                <Button
                  size="lg"
                  className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-8 py-6"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to All Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}