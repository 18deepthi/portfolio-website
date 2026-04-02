import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Miracle Software Systems",
    duration: "May 2025 – June 2025",
    location: "India",
    points: [
      "Improved API performance by 15% using Spring Boot optimization",
      "Ensured zero security vulnerabilities with secure coding practices",
      "Reduced integration time by 20% through structured REST APIs",
      "Followed Agile methodology and maintained high code quality",
      "Created API documentation and backend architecture guides",
    ],
    technologies: ["Spring Boot", "REST APIs", "Agile", "Git"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
