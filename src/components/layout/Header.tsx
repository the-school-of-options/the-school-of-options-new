import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Methodology", href: "/methodology" },
    { name: "FAQ", href: "/faq" }
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleNewsletterClick = () => {
    // if (location.pathname === '/') {
    //   // If already on homepage, just scroll to the section
    //   const element = document.getElementById('section-newsletter');
    //   if (element) {
    //     element.scrollIntoView({ behavior: 'smooth' });
    //   }
    // } else {
    //   // If on another page, navigate to homepage first
    //   navigate('/');
    //   // Wait for navigation to complete, then scroll
    //   setTimeout(() => {
    //     const element = document.getElementById('section-newsletter');
    //     if (element) {
    //       element.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   }, 100);
    // }

    navigate('/auth/signin')
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold text-primary">
              The School of Options
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium smooth-transition ${
                  isActive(item.href)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="cta-outline" size="sm" onClick={handleNewsletterClick}>
              Sign In
            </Button>
            <Button variant="cta" size="sm" asChild>
              <a 
                href="https://www.kundankishore.in/courses/package-six-months-mentorship-on-options-trading-by-kundan-kishore"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Mentorship
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium smooth-transition ${
                    isActive(item.href)
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button 
                  variant="cta-outline" 
                  size="sm" 
                  className="w-full" 
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleNewsletterClick();
                  }}
                >
                  Free Newsletter
                </Button>
                <Button variant="cta" size="sm" className="w-full" asChild>
                  <a 
                    href="https://www.kundankishore.in/courses/package-six-months-mentorship-on-options-trading-by-kundan-kishore"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join Mentorship
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;