"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    name: "Frameworks",
    skills: [
      "Spring Boot",
      "Django",
      "Node.js",
      "Express.js",
      "React.js",
      "Angular",
    ],
  },
  {
    name: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Postman", "Linux", "CI/CD"],
  },
  {
    name: "Concepts",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "REST APIs",
      "Microservices",
      "Secure Coding",
      "Agile/Scrum",
    ],
  },
]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("Languages")

  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skillCategories
            .find((cat) => cat.name === activeCategory)
            ?.skills.map((skill) => (
              <div
                key={skill}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <span className="text-foreground font-medium">{skill}</span>
              </div>
            ))}
        </div>

        {/* All Skills Overview */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
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
