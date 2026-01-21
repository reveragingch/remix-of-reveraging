import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoBlack from "@/assets/logo_black.png";
const navItems = [{
  label: "About",
  href: "/"
}, {
  label: "Team",
  href: "/team"
}, {
  label: "Blog",
  href: "/blog"
}, {
  label: "Contact",
  href: "#contact",
  isAnchor: true
}];
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return <header className="fixed top-0 left-0 right-0 z-50">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="relative section-container">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img alt="Rever" className="h-8 lg:h-10" src="/lovable-uploads/660005fd-608a-4ae8-bbcc-b65e847ee7ad.png" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map(item => <li key={item.label}>
                {item.isAnchor ? <button onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })} className="text-sm px-3 py-1.5 rounded-full transition-all duration-300 text-foreground/70 font-medium hover:text-primary hover:bg-primary/5">
                    {item.label}
                  </button> : <Link to={item.href} className={`text-sm px-3 py-1.5 rounded-full transition-all duration-300 ${location.pathname === item.href ? "text-primary font-semibold bg-primary/10" : "text-foreground/70 font-medium hover:text-primary hover:bg-primary/5"}`} onClick={() => window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })}>
                    {item.label}
                  </Link>}
              </li>)}
          </ul>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden pb-6">
            <ul className="flex flex-col gap-4">
              {navItems.map(item => <li key={item.label}>
                  {item.isAnchor ? <button onClick={() => {
              setIsOpen(false);
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              });
            }} className="block text-sm transition-all duration-300 hover:text-primary text-foreground/70 font-medium">
                      {item.label}
                    </button> : <Link to={item.href} className={`block text-sm transition-all duration-300 hover:text-primary ${location.pathname === item.href ? "text-primary font-semibold" : "text-foreground/70 font-medium"}`} onClick={() => {
              setIsOpen(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}>
                      {item.label}
                    </Link>}
                </li>)}
            </ul>
          </div>}
      </div>
    </header>;
};