import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"]
    },
    {
      category: "Backend",
      skills: ["Java", "Spring Boot", "Spring MVC", "Node.js", "REST API", "Microservices"]
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Git", "Linux", "Jenkins"]
    },
    {
      category: "Database",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQL"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "Maven", "Gradle"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="glass hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm bg-secondary/50 hover:bg-secondary text-foreground rounded-full transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
