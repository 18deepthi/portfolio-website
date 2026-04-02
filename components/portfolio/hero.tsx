"use client"

import { ArrowDown, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wide">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Nakka Sai Venkata Deepthi
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
                Full Stack Developer
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Building scalable, secure, and impactful web applications
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="gap-2">
                <a href="#projects">
                  View Projects
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="gap-2">
                <a href="/resume.pdf" download>
                  <FileText className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full bg-primary/30 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary">D</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-card border border-border rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-card border border-border rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
