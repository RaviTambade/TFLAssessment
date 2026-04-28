import { Linkedin, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <img 
              src="/lovable-uploads/d49f4d74-db53-42cc-9388-fcf6ea2a49e8.png" 
              alt="Transflower Learning Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-primary">Transflower Learning</span>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Where learning becomes a shared adventure through collaboration and growth.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/ravitambade/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-smooth"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://www.facebook.com/transflowerlearning" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-smooth"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="https://www.youtube.com/@ravitambade-transflower" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-smooth"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
          
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground mb-2">
            Made with respect by one of the mentees
          </p>
          <p className="text-muted-foreground">
            &copy; 2025 Transflower Learning Pvt. Ltd. All rights reserved. Mentor at your Service.
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
