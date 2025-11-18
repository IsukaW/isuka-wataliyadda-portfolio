import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Github, Linkedin, Youtube, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <Card className="glass hover-lift">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-6">
              <div className="inline-flex p-6 rounded-full bg-primary/10 animate-glow">
                <Mail className="w-12 h-12 text-primary" />
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-2">Let's Work Together</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out if you want to collaborate on a project, 
                  have a question, or just want to connect.
                </p>
                
                <Button 
                  size="lg" 
                  className="gap-2 glow hover-lift text-lg px-8"
                  asChild
                >
                  <a href="mailto:isuka1minjaya@gmail.com">
                    <MessageSquare className="w-5 h-5" />
                    Send Me an Email
                  </a>
                </Button>
              </div>

              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">Or connect with me on:</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    asChild
                  >
                    <a href="https://github.com/IsukaW" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    asChild
                  >
                    <a href="https://linkedin.com/in/isuka-wataliyadda" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    asChild
                  >
                    <a href="https://www.youtube.com/@iMRStreaming" target="_blank" rel="noopener noreferrer">
                      <Youtube className="w-4 h-4" />
                      YouTube
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    asChild
                  >
                    <a href="https://imrbloggers.blogspot.com/" target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4" />
                      Blog
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
