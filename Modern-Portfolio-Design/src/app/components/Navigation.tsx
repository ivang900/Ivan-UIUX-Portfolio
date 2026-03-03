import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import resumePdf from "../../assets/Ivan_Gonzalez_2026_Resume_uiux.pdf";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      // Navigate home first, then scroll after page loads
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinkClass =
    "text-sm text-gray-700 hover:text-[#0EA5E9] transition-colors";
  const activeLinkClass = "text-sm text-[#0EA5E9]";

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Name */}
          <div className="flex items-center">
            <span className="font-medium text-gray-900">Ivan Gonzalez</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-sm text-gray-600">UI/UX Researcher & Designer</span>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("work")}
              className={navLinkClass}
            >
              My Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={navLinkClass}
            >
              About
            </button>
            <a
              href={resumePdf}
              download="Ivan_Gonzalez_2026_Resume_uiux.pdf"
              className={`${navLinkClass} border border-gray-300 px-4 py-1.5 rounded-lg hover:border-[#0EA5E9]`}
            >
              Click to Download My Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("work")}
                className="text-sm text-gray-700 hover:text-[#0EA5E9] transition-colors text-left"
              >
                My Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-gray-700 hover:text-[#0EA5E9] transition-colors text-left"
              >
                About
              </button>
              <a
                href={resumePdf}
                download="Ivan_Gonzalez_2026_Resume_uiux.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-gray-700 hover:text-[#0EA5E9] transition-colors text-left"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}