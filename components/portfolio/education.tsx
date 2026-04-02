import { Award, BookOpen, GraduationCap } from "lucide-react"

const certifications = [
  {
    name: "Java Full Stack Development",
    issuer: "Professional Certification",
  },
  {
    name: "SQL",
    issuer: "HackerRank",
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Virtual Experience",
  },
]

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  B.Tech in Computer Science (IoT)
                </h3>
                <p className="text-primary font-medium">
                  R.V.R. & J.C. College of Engineering
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>CGPA: 8.02</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Expected: 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Certifications
              </h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="font-medium text-foreground">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
