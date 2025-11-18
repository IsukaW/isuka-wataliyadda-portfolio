import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "UrbanCleanse",
      description: "MERN-based smart waste management app that lets users report waste issues and track pickups. Built with Express.js and TypeScript, it uses location data and analytics to optimize waste management.",
      tags: ["TypeScript", "Express.js", "MongoDB", "Analytics"],
      github: "https://github.com/IsukaW/Urban-Cleanse"
    },
    {
      title: "Online Examination System",
      description: "Comprehensive online examination platform with real-time test administration, automated grading, and detailed analytics for educators and students.",
      tags: ["JavaScript", "Node.js", "MongoDB", "Real-time"],
      github: "https://github.com/IsukaW/ITP-Online-Examination-System"
    },
    {
      title: "Mock Interview Platform",
      description: "Interactive platform for practicing technical interviews with AI-powered feedback, coding challenges, and performance analytics to help developers ace their interviews.",
      tags: ["TypeScript", "React", "AI", "Interview Prep"],
      github: "https://github.com/IsukaW/mock-interview-platform"
    },
    {
      title: "AI TripGenie",
      description: "AI-powered travel planning assistant that creates personalized itineraries, suggests destinations, and helps optimize your travel experiences using machine learning.",
      tags: ["JavaScript", "AI/ML", "Travel Tech", "APIs"],
      github: "https://github.com/IsukaW/AI-TripGenie"
    },
    {
      title: "LetsBudget",
      description: "Personal finance management application built with Kotlin, helping users track expenses, set budgets, and achieve their financial goals with intuitive insights.",
      tags: ["Kotlin", "Android", "Finance", "Mobile"],
      github: "https://github.com/IsukaW/LetsBudget"
    },
    {
      title: "AI Image Analyzer",
      description: "Advanced image analysis tool powered by artificial intelligence for object detection, classification, and detailed visual insights using modern ML models.",
      tags: ["JavaScript", "AI/ML", "Computer Vision", "APIs"],
      github: "https://github.com/IsukaW/AI-Image-Analyzer"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some of the projects I've been working on
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2 hover-lift"
            asChild
          >
            <a href="https://github.com/IsukaW?tab=repositories" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
