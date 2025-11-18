import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Isuka Wataliyadda
          </p>
          <p className="text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
