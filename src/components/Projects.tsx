"use client";

import { FolderGit2, ExternalLink, Github, Terminal, Sparkles, Home } from "lucide-react";

interface Project {
  title: string;
  category: string;
  period: string;
  description: string;
  details: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "TaskPulse — AI-Powered Career Roadmap Platform",
    category: "Full Stack & Gen AI",
    period: "Jan 2025 – Present",
    description: "An intelligent platform that dynamically generates personalized 4-year academic and career roadmaps broken into semester-wise and week-wise milestones.",
    details: [
      "Engineered the platform scaling to 50+ active users using React, Node.js, and MongoDB.",
      "Architected end-to-end LLM workflows by integrating Gemini AI through LangChain with RESTful APIs to automate onboarding and roadmap generation.",
      "Implemented JWT-based authentication and a robust modular architecture, deployed on Vercel and MongoDB Atlas."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "LangChain", "Gemini AI", "JWT"],
    githubUrl: "https://github.com/RishaubKumar/Portfolio",
    demoUrl: "https://task-pulse-black.vercel.app/",
    icon: <Sparkles className="w-5 h-5 text-emerald-500" />
  },
  {
    title: "Nestly Room Rental Platform",
    category: "Full Stack Web",
    period: "Apr 2024 – Nov 2024",
    description: "A comprehensive room and property rental management platform that connects students and owners with secure property listings.",
    details: [
      "Led a 6-member team to design and deliver the full-stack system within 8 months, handling 5+ properties and 20+ active users.",
      "Configured secure authentication and session management using Passport.js and Express Sessions, safeguarding platform-wide data.",
      "Built interactive views using EJS templates, Node.js controllers, and MongoDB models."
    ],
    techStack: ["EJS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Passport.js", "Tailwind CSS"],
    githubUrl: "https://github.com/RishaubKumar/Portfolio",
    demoUrl: "https://nestly-self.vercel.app/home",
    icon: <Home className="w-5 h-5 text-emerald-500" />
  },
  {
    title: "IT Ticket Triage AI Agent Pipeline",
    category: "Hackathon & Gen AI",
    period: "Deloitte Hacksplosion 2026",
    description: "An automated AI agent pipeline designed to categorize, triage, and route service desk and IT tickets instantly based on issue descriptions.",
    details: [
      "Collaborated within a 5-member team to construct an AI agent pipeline, reaching the Final Round of Deloitte Hacksplosion.",
      "Cut manual categorization effort by 80% using prompt-engineered classifiers and LLM routing logic.",
      "Implemented using Python and LangChain for handling incoming message payloads and categorizing priority tags."
    ],
    techStack: ["Python", "LangChain", "Prompt Engineering", "NLP", "LLM routing"],
    githubUrl: "https://github.com/RishaubKumar",
    icon: <Terminal className="w-5 h-5 text-emerald-500" />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted-bg/50 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted mt-4">
            A selection of my recent full-stack applications and artificial intelligence integrations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col h-full rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden glow-card group"
            >
              {/* Card Header */}
              <div className="p-6 pb-4 border-b border-border flex items-start justify-between">
                <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                  {project.icon}
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-md">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-muted mb-2 font-mono">
                    <span>{project.period}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted mt-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="text-xs text-muted space-y-2 mb-6 border-t border-border/40 pt-4">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-1.5 font-bold">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack & Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium font-mono bg-muted-bg border border-border px-2 py-0.5 rounded text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-border/40">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-foreground/75 hover:text-primary transition-colors gap-1"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary-hover transition-colors gap-1 ml-auto"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
