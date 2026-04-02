import { Code2, Database, Globe, Shield } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Java, Python, JavaScript",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "MySQL, PostgreSQL, MongoDB",
  },
  {
    icon: Globe,
    title: "REST APIs",
    description: "Spring Boot, Node.js, Django",
  },
  {
    icon: Shield,
    title: "Secure Coding",
    description: "Best practices & security",
  },
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am a final-year Computer Science (IoT) student with hands-on
              experience in full stack development using Java, Python, and
              JavaScript. I enjoy building scalable applications, designing REST
              APIs, and working on real-world systems with a focus on
              performance, security, and user experience.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am particularly interested in backend development and
              AI-integrated applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
              >
                <item.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
