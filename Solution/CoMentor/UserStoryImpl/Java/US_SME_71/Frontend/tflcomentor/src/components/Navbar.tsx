import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { CircleUser, Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  isLoggedIn?: boolean
}
const Navbar = ({ isLoggedIn }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/${sectionId}`);
    } else {
      document.getElementById(sectionId.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStartedClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToContact: true } });
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { href: "/", label: "Home", isLink: true },
    { href: "#about", label: "About", isLink: false },
    { href: "#services", label: "Services", isLink: false },
    { href: "#tap-program", label: "TAP Program", isLink: false },
    { href: "https://ravitambade.wordpress.com/", label: "Blogs", isLink: true },
    { href: "#success-stories", label: "Success Stories", isLink: false },
    { href: "/models/evaluationcontent/components", label: "Assessment", isLink: true }, 
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d49f4d74-db53-42cc-9388-fcf6ea2a49e8.png" 
              alt="Transflower Learning Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <span className="text-lg sm:text-xl font-bold text-primary hidden sm:block">
              Transflower Learning
            </span>
            <span className="text-lg font-bold text-primary sm:hidden">
              Transflower
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              item.isLink ? (
                item.href.startsWith('http') ? (
                  <a 
                    key={item.label}
                    href={item.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-smooth text-sm xl:text-base"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link 
                    key={item.label}
                    to={item.href} 
                    className="text-foreground hover:text-primary transition-smooth text-sm xl:text-base"
                  >
                    {item.label}
                  </Link>
                )
              ) : (
                <button 
                  key={item.label}
                  onClick={() => handleSectionClick(item.href)} 
                  className="text-foreground hover:text-primary transition-smooth text-sm xl:text-base"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
          
          {/* Buttons */}
          <div className="flex items-center space-x-2 select-none">

          
            {isLoggedIn ? (

                    <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-accent transition">
                            <CircleUser className="w-5 h-5" />Profile<ChevronDown className="w-4 h-4 ml-1" />
                            </button>
                          </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-44">
                              <DropdownMenuItem onClick={() => navigate("")}>
                                Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => navigate("/models/membership/ChangePassword")}>
                                Change Password
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => navigate("/tap-program")}>
                                Logout
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                  

                ) : (

                  <div className="flex gap-4">

                    <Link to="/models/membership/Login">
                      <Button variant="hero" size="sm" className="text-xs sm:text-sm px-3 sm:px-4">
                       Sign In
                      </Button>
                    </Link>

                    <Button variant="hero" size="sm" className="text-xs sm:text-sm px-3 sm:px-4" onClick={handleGetStartedClick}>
                      Get Started
                    </Button>
                  </div>
                )}
            {/* Hamburger */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                item.isLink ? (
                  item.href.startsWith('http') ? (
                    <a 
                      key={item.label}
                      href={item.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-smooth py-2 px-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link 
                      key={item.label}
                      to={item.href} 
                      className="text-foreground hover:text-primary transition-smooth py-2 px-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                ) : (
                  <button 
                    key={item.label}
                    onClick={() => {
                      handleSectionClick(item.href);
                      setIsMenuOpen(false);
                    }} 
                    className="text-foreground hover:text-primary transition-smooth py-2 px-2 text-left"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;