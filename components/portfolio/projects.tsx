import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Civic Issue Reporting Web Application",
    description:
      "A full-stack web application for reporting and tracking civic issues with role-based access control and real-time updates.",
    techStack: ["Node.js", "Express.js", "React.js", "MongoDB"],
    highlights: [
      "Built REST APIs with sub-200ms response time",
      "Implemented full validation and secure role-based access",
      "Developed responsive UI using React",
      "Used Git workflows for collaboration",
    ],
    github: "https://github.com/springboardmentor1607-maker/Group1_Team3.git",
    live: "https://github.com/springboardmentor1607-maker/Group1_Team3.git",
  },
  {
    title: "Recipe Finder Backend System",
    description:
      "A robust backend system for recipe discovery with advanced search capabilities and optimized database queries.",
    techStack: ["Java", "Spring Boot", "MySQL"],
    highlights: [
      "Improved search accuracy by 30%",
      "Reduced query time by 25%",
      "Designed structured backend using OOP principles",
      "Implemented strong validation and error handling",
    ],
    github: "https://github.com/18deepthi/Recipe-finder.git",
    live: "https://github.com/18deepthi/Recipe-finder.git",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="h-48 bg-secondary flex items-center justify-center">
                <div className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {project.title.split(" ")[0]}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" asChild className="gap-2">
                    <a href={project.github}>
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="gap-2">
                    <a href={project.live}>
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
