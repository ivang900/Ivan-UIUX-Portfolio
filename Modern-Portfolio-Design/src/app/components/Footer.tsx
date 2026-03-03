import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* CTA Heading */}
          <h2 className="text-2xl sm:text-3xl mb-2">
            Let's Build Something
          </h2>
          <p className="text-gray-400 mb-5 max-w-xl mx-auto text-sm sm:text-base">
            Ready to transform your ideas into validated proof of concepts?
            Let's collaborate on your next innovation.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-5">
            <a
              href="https://www.linkedin.com/in/ivang9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 bg-gray-800 hover:bg-[#0EA5E9] rounded-lg transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:igonzalez0187@gmail.com"
              className="flex items-center space-x-2 px-5 py-2.5 bg-gray-800 hover:bg-[#0EA5E9] rounded-lg transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}