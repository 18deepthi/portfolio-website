import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "venkatasaideepthi3@gmail.com",
    href: "mailto:venkatasaideepthi3@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9014445419",
    href: "tel:+919014445419",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/deepthinakka",
    href: "https://www.linkedin.com/in/nakka-s-95bbb125a/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/deepthinakka",
    href: "https://github.com/18deepthi",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll try my best to get back
            to you!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {item.label}
              </h3>
              <p className="text-sm text-muted-foreground break-all">
                {item.value}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <a href="mailto:venkatasaideepthi3@gmail.com">Say Hello</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
