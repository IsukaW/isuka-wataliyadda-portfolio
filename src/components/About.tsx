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
            I'm a Full-stack Developer at LOLC, specializing in investment banking technology solutions. 
            Based in Colombo, Sri Lanka, I design and implement comprehensive web applications with 
            expertise in React.js, Java, Spring Boot, and cloud infrastructure for financial services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="glass hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">🎯 Current Focus</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Developing full-stack applications for investment banking solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Building modern UIs with React.js and robust backends with Spring Boot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Working with Java, React.js, and modern cloud technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Enhancing system reliability through DevOps practices and CI/CD</span>
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

        {/* Professional experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 text-center text-gradient">💼 Professional Experience</h3>
          <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Full-stack Developer",
                company: "LOLC Advanced Technologies",
                period: "May 2025 - Present",
                location: "Colombo, Sri Lanka",
                description: "Developing comprehensive web applications with both frontend and backend technologies. Working on investment banking solutions using modern frameworks and cloud infrastructure.",
                skills: ["React.js", "Java", "Spring Boot", "Full-stack Development", "Cloud Infrastructure"]
              },
              {
                title: "Back-end Developer",
                company: "LOLC Advanced Technologies",
                period: "Jan 2024 - Nov 2025",
                location: "Colombo, Sri Lanka",
                description: "Specialized in backend development for investment banking technology solutions. Designed and implemented robust backend systems to support financial products and services using Spring Boot and Java.",
                skills: ["Spring Boot", "Java", "Backend Development", "Financial Technology", "API Development"]
              },
              {
                title: "Trainee",
                company: "LOLC Advanced Technologies", 
                period: "Jun 2023 - Dec 2023",
                location: "Colombo, Sri Lanka",
                description: "Built foundational experience in financial technology, focusing on backend development and database management. Learned industry best practices and transitioned into backend developer role.",
                skills: ["Java", "Spring Boot", "Database Design", "Financial Technology"]
              }
            ].map((exp, idx) => (
              <Card key={idx} className="glass hover-lift">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-xl text-gradient">{exp.title}</h4>
                      <div className="text-lg text-foreground/90 font-medium">{exp.company}</div>
                      <div className="text-sm text-muted-foreground">{exp.location}</div>
                    </div>
                    <div className="text-sm text-primary font-medium mt-2 md:mt-0">{exp.period}</div>
                  </div>
                  <p className="text-foreground/80 mb-3 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIdx) => (
                      <span key={skillIdx} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 text-center text-gradient">🎓 Education</h3>
          <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
            {[
              {
                degree: "Bachelor of Science Honours in Software Engineering",
                field: "Computer Software Engineering",
                institution: "SLIIT - Sri Lanka Institute of Information Technology",
                period: "May 2023 - Aug 2027",
                skills: ["Java", "JavaScript", "Software Engineering"]
              },
              {
                degree: "Psychology and Counselling Diploma",
                field: "Psychology and Counselling", 
                institution: "SITC Campus",
                period: "Jan 2022 - Dec 2022",
                grade: "Grade: A+",
                skills: ["Psychology", "Counselling"]
              }
            ].map((edu, idx) => (
              <Card key={idx} className="glass hover-lift">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-lg text-gradient">{edu.degree}</h4>
                      <div className="text-foreground/90 font-medium">{edu.institution}</div>
                      <div className="text-sm text-muted-foreground">{edu.field}</div>
                      {edu.grade && <div className="text-sm text-primary font-medium">{edu.grade}</div>}
                    </div>
                    <div className="text-sm text-primary font-medium mt-2 md:mt-0">{edu.period}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, skillIdx) => (
                      <span key={skillIdx} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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

        {/* Technical Skills Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-6 text-center text-gradient">🛠️ Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass hover-lift">
              <CardContent className="p-6">
                <h4 className="font-semibold text-xl mb-4 text-primary">Hard Skills</h4>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium mb-1">Object-Oriented Programming</div>
                    <div className="text-sm text-muted-foreground">Java, Python, C# for modular and maintainable code</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Database Management</div>
                    <div className="text-sm text-muted-foreground">MySQL, PostgreSQL, MongoDB for data storage solutions</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Cloud Infrastructure</div>
                    <div className="text-sm text-muted-foreground">AWS and Google Cloud deployment and management</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">API Development</div>
                    <div className="text-sm text-muted-foreground">RESTful APIs for seamless system integration</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">DevOps Practices</div>
                    <div className="text-sm text-muted-foreground">CI/CD pipelines, containerization, infrastructure as code</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass hover-lift">
              <CardContent className="p-6">
                <h4 className="font-semibold text-xl mb-4 text-primary">Soft Skills</h4>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium mb-1">Problem-Solving</div>
                    <div className="text-sm text-muted-foreground">Breaking down complex problems and devising innovative solutions</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Collaboration</div>
                    <div className="text-sm text-muted-foreground">Working with cross-functional teams and stakeholders</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Adaptability</div>
                    <div className="text-sm text-muted-foreground">Quickly learning new technologies in investment banking</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Attention to Detail</div>
                    <div className="text-sm text-muted-foreground">Ensuring quality through testing and code reviews</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Communication</div>
                    <div className="text-sm text-muted-foreground">Translating technical concepts for non-technical stakeholders</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
