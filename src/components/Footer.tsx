import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-12 border-t border-border">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © 2025 Samuel Ibañez · <span className="font-display font-bold text-foreground">s4m0l</span>
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/s4mooel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/s4m0l/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:zaratesamu99@gmail.com" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;