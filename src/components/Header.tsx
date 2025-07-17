import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home page and then scroll to section
      window.location.href = `/#${sectionId}`;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-glass' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
       <nav className="flex items-center justify-between">
  <Link to="/" className="flex items-center space-x-2">
    <div className="w-15 h-10  rounded-lg flex items-center justify-center">
      <img 
        src="/images/logo.png"
        alt="Cybernetic Technologies Logo"
        className="w-full h-full object-contain"
      />
    </div>
    <span className="font-bold text-xl gradient-text">Cybernetic Software Solutions</span>
  </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className={`transition-colors ${location.pathname === '/' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/services"
              className={`transition-colors ${location.pathname === '/services' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              Services
            </Link>
            <Link 
              to="/about"
              className={`transition-colors ${location.pathname === '/about' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className={`transition-colors ${location.pathname === '/contact' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              Contact
            </Link>
            <Link 
              to="/careers"
              className={`transition-colors ${location.pathname === '/careers' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              Careers
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4 animate-fade-in-up">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left py-2 transition-colors ${location.pathname === '/' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                Home
              </Link>
              <Link 
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left py-2 transition-colors ${location.pathname === '/services' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                Services
              </Link>
              <Link 
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left py-2 transition-colors ${location.pathname === '/about' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                About
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left py-2 transition-colors ${location.pathname === '/contact' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                Contact
              </Link>
              <Link 
                to="/careers"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left py-2 transition-colors ${location.pathname === '/careers' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                Careers
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;