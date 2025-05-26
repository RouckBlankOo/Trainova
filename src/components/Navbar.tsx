import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2F4157] border-b border-[#223043]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-white">
            TraiNova
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-[#A7B4C2] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#pricing">
              <Button
                variant="outline"
                className="border-[#2F4157] text-[#2F4157] hover:bg-[#223043] hover:text-white"
              >
                Sign In
              </Button>
            </a>
            <a href="#contact">
              <Button>Get Started</Button>
            </a>
            <div className="relative">
              <Button
                className="flex items-center"
                onClick={() => setShowDownloadOptions((v) => !v)}
                type="button"
              >
                <Download className="mr-2 h-5 w-5" />
                Download
              </Button>
              <AnimatePresence>
                {showDownloadOptions && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-[#223043] border border-[#2F4157] rounded-lg shadow-lg z-50"
                  >
                    <a
                      href="https://play.google.com/store"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-3 text-white hover:bg-[#2F4157] transition-colors rounded-t-lg"
                      onClick={() => setShowDownloadOptions(false)}
                    >
                      Download on Play Store
                    </a>
                    <a
                      href="https://www.apple.com/app-store/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-3 text-white hover:bg-[#2F4157] transition-colors rounded-b-lg"
                      onClick={() => setShowDownloadOptions(false)}
                    >
                      Download on App Store
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Animated Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="md:hidden py-4 border-t border-gray-200 bg-[#2F4157]"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white hover:text-[#A7B4C2] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <a href="#pricing">
                    <Button
                      variant="outline"
                      className="border-[#2F4157] text-[#2F4157] hover:bg-[#223043] hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Button>
                  </a>
                  <a href="#contact">
                    <Button
                      className="bg-[#2F4157] text-white hover:bg-[#223043]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Button>
                  </a>
                  <div className="relative">
                    <Button
                      className="flex items-center"
                      onClick={() => setShowDownloadOptions((v) => !v)}
                      type="button"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download
                    </Button>
                    <AnimatePresence>
                      {showDownloadOptions && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-0 mt-2 w-48 bg-[#223043] border border-[#2F4157] rounded-lg shadow-lg z-50"
                        >
                          <a
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-6 py-3 text-white hover:bg-[#2F4157] transition-colors rounded-t-lg"
                            onClick={() => {
                              setShowDownloadOptions(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            Download on Play Store
                          </a>
                          <a
                            href="https://www.apple.com/app-store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-6 py-3 text-white hover:bg-[#2F4157] transition-colors rounded-b-lg"
                            onClick={() => {
                              setShowDownloadOptions(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            Download on App Store
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
