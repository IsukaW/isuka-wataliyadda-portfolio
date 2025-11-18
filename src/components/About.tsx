import { Card, CardContent } from "@/components/ui/card";
import { Code2, Server, Cloud, Database } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building modern, responsive UIs with React, TypeScript, and modern CSS frameworks"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Creating robust APIs and microservices with Spring Boot and Java"
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "Streamlining deployment pipelines and managing cloud infrastructure"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing efficient data models and optimizing database performance"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate full-stack developer based in Colombo, Sri Lanka, 
            with expertise in building scalable applications and modern web solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="glass hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">🎯 Current Focus</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Working on DevOps and Microservices architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Learning Spring Framework, MVC patterns, and React ecosystem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Looking to collaborate on Java development projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Sharing knowledge through blog posts and technical articles</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">📍 Location & Contact</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Based in Colombo, Sri Lanka</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Email: isuka1minjaya@gmail.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Twitter/X: @isukaminjaya</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Regular contributor to open-source projects</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="glass hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
