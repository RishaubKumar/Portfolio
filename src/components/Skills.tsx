"use client";

import { useState } from "react";
import { Braces, Globe, Cpu, Database } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Braces className="w-5 h-5 text-emerald-500" />,
    skills: [
      { name: "Java", level: "DSA & OOP" },
      { name: "JavaScript", level: "ES6+" },
      { name: "TypeScript", level: "Type Safe Development" },
      { name: "Python", level: "AI & Scripts" },
      { name: "SQL", level: "Query Optimization" },
    ],
  },
  {
    title: "Web & Frameworks",
    icon: <Globe className="w-5 h-5 text-emerald-500" />,
    skills: [
      { name: "React.js", level: "Client Interfaces" },
      { name: "Next.js", level: "SSG & App Router" },
      { name: "Node.js", level: "Backend Logic" },
      { name: "Express.js", level: "RESTful APIs" },
      { name: "REST APIs", level: "System Integrations" },
    ],
  },
  {
    title: "Gen AI & LLM Tools",
    icon: <Cpu className="w-5 h-5 text-emerald-500" />,
    skills: [
      { name: "LangChain", level: "Agent Pipelines" },
      { name: "Prompt Engineering", level: "LLM Orchestration" },
      { name: "Gemini AI", level: "API Integrations" },
      { name: "Claude / GPT", level: "AI Embeddings" },
      { name: "Hugging Face", level: "Model Fine-tuning" },
    ],
  },
  {
    title: "Cloud & Databases",
    icon: <Database className="w-5 h-5 text-emerald-500" />,
    skills: [
      { name: "MongoDB", level: "NoSQL Architectures" },
      { name: "MySQL", level: "Relational Design" },
      { name: "Supabase", level: "Real-time Database" },
      { name: "Git / GitHub", level: "Version Control" },
      { name: "Docker", level: "Containerization" },
      { name: "AWS", level: "Cloud Hosting" },
    ],
  },
];

export default function Skills() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 bg-muted-bg/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted mt-4">
            Structured skillsets categorized by engineering domains. Hover over cards to inspect details.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 glow-card"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-border/60">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col p-3 rounded-xl bg-muted-bg border border-border/40 hover:border-primary/50 hover:bg-muted-bg/80 transition-all duration-200"
                  >
                    <span className="text-sm font-semibold text-foreground">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="text-[10px] font-medium text-muted font-mono mt-0.5">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
