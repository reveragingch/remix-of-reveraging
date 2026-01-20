import { Linkedin } from "lucide-react";
import logoBlack from "@/assets/logo_black.png";
import { FooterContact } from "@/components/FooterContact";
export const Footer = () => {
  return <footer id="contact" className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/20 to-primary/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent/15 rounded-full blur-2xl" />

      <div className="relative section-container py-12">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Contact Form */}
          <FooterContact />

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {/* Logo */}
          <img alt="Rever" className="h-10" src="/lovable-uploads/f07d2adc-ab2f-44cc-85ff-9e8e82c71250.png" />

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/company/110441965" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
            <span className="text-sm">Follow us on LinkedIn</span>
          </a>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} RevɘЯ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};