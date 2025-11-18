import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Youtube, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/myphoto.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullName = "Isuka Wataliyadda";

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (displayedText.length < fullName.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText(fullName.slice(0, displayedText.length + 1));
      }, 150); // Adjust speed here (lower = faster)
    } else {
      setIsTyping(false);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [displayedText, fullName]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Tech background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            
            {/* Left Column - Text Content */}
            <div className="space-y-6 lg:space-y-8 animate-fade-in lg:order-1 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-block px-3 sm:px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
                  <span className="text-primary font-medium text-sm sm:text-base">Welcome to my portfolio</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block">Hi, I'm</span>
                  <span className="text-gradient-animated inline-block">
                    {displayedText}
                    {isTyping && (
                      <span className="inline-block w-0.5 sm:w-1 h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 ml-1 bg-primary rounded-sm animate-blink"></span>
                    )}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground">
                  Full Stack Developer & DevOps Engineer
                </p>
              </div>

              <p className="text-base sm:text-lg text-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                A passionate developer from Sri Lanka, specializing in building scalable microservices, 
                modern web applications with React and Spring, and streamlining deployment processes through DevOps practices.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2 hover-lift border-primary/20 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com/IsukaW" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">GitHub</span>
                    <span className="sm:hidden">Git</span>
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2 hover-lift border-primary/20 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  asChild
                >
                  <a href="https://linkedin.com/in/isuka-wataliyadda" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">LinkedIn</span>
                    <span className="sm:hidden">In</span>
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2 hover-lift border-primary/20 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  asChild
                >
                  <a href="mailto:isuka1minjaya@gmail.com">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Contact</span>
                    <span className="sm:hidden">Mail</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="lg:order-2 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative group">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-blue-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/50 to-blue-600/50 rounded-2xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
                
                {/* Photo container */}
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[400px] lg:w-96 lg:h-[450px] rounded-2xl overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-500 hover-lift">
                  {/* Your Professional Photo */}
                  <img 
                    src={profilePhoto} 
                    alt="Isuka Wataliyadda - Full Stack Developer" 
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating badges */}
                <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-background/90 backdrop-blur-sm border border-border rounded-xl p-2 sm:p-3 hover-lift">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium">Available for work</span>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-2 sm:-right-4 bg-background/90 backdrop-blur-sm border border-border rounded-xl p-2 sm:p-3 hover-lift">
                  <div className="text-center">
                    <div className="text-base sm:text-lg font-bold text-primary">3+</div>
                    <div className="text-xs text-muted-foreground">Years Exp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
