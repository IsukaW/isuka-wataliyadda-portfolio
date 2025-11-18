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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
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
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)]">
          
          {/* Left Column - Text Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in lg:order-1 text-center lg:text-left pt-4 sm:pt-0">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-primary/25 border-2 border-primary/50 rounded-full mb-2 sm:mb-4 backdrop-blur-xl shadow-lg glass">
                <span className="text-primary font-bold text-xs sm:text-sm md:text-base">Welcome to my portfolio</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="block mb-1 sm:mb-2">Hi, I'm</span>
                <span className="text-gradient-animated inline-block">
                  {displayedText}
                  {isTyping && (
                    <span className="inline-block w-0.5 sm:w-1 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-16 ml-1 bg-primary rounded-sm animate-blink"></span>
                  )}
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mt-2 sm:mt-4">
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
            <div className="lg:order-2 flex justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0">
              <div className="relative group max-w-sm lg:max-w-none">
                {/* Decorative elements */}
                <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-primary/30 to-blue-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-primary/50 to-blue-600/50 rounded-2xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
                
                {/* Photo container */}
                <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-[360px] lg:w-80 lg:h-[400px] xl:w-96 xl:h-[450px] rounded-2xl overflow-hidden border-3 sm:border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-500 hover-lift mx-auto">
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
                <div className="absolute -bottom-3 -left-1 sm:-bottom-4 sm:-left-2 md:-left-4 bg-background/95 backdrop-blur-xl border border-border rounded-lg sm:rounded-xl p-1.5 sm:p-2 md:p-3 hover-lift shadow-lg">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap">Available for work</span>
                  </div>
                </div>
                
                <div className="absolute -top-3 -right-1 sm:-top-4 sm:-right-2 md:-right-4 bg-background/95 backdrop-blur-xl border border-border rounded-lg sm:rounded-xl p-1.5 sm:p-2 md:p-3 hover-lift shadow-lg">
                  <div className="text-center">
                    <div className="text-sm sm:text-base md:text-lg font-bold text-primary">3+</div>
                    <div className="text-[8px] sm:text-[10px] md:text-xs text-muted-foreground whitespace-nowrap">Years Exp</div>
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
