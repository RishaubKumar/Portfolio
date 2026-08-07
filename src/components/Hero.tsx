"use client";

import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Layers, Award } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background soft glow patterns */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Available for SDE & Gen AI Roles</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Hi, I'm <span className="text-primary hover:opacity-90 transition-opacity">Rishaub Kumar</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground/80 tracking-tight">
              Full Stack & Gen AI Engineer
            </h2>

            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
              Final-year B.Tech CS student at **VIT Bhopal University** (9.11 CGPA). Experienced in architecting end-to-end full-stack web applications and embedding LLM integrations using frameworks like React, Node.js, Express, Supabase, and LangChain. Passionate about building robust, automated AI agents and production-ready applications.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-2 max-w-md">
              <div className="p-3.5 rounded-xl border border-border bg-card shadow-sm">
                <div className="flex items-center space-x-1.5 text-primary mb-1">
                  <Code2 className="w-4 h-4" />
                  <span className="text-xs font-medium text-muted">Projects</span>
                </div>
                <p className="text-xl font-bold">5+ Active</p>
              </div>
              <div className="p-3.5 rounded-xl border border-border bg-card shadow-sm">
                <div className="flex items-center space-x-1.5 text-primary mb-1">
                  <Layers className="w-4 h-4" />
                  <span className="text-xs font-medium text-muted">CGPA</span>
                </div>
                <p className="text-xl font-bold">9.11 / 10</p>
              </div>
              <div className="p-3.5 rounded-xl border border-border bg-card shadow-sm">
                <div className="flex items-center space-x-1.5 text-primary mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-medium text-muted">Internships</span>
                </div>
                <p className="text-xl font-bold">Full Stack</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-primary hover:bg-primary-hover rounded-xl shadow-lg transition-all space-x-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Resume download will target the PDF inside /public */}
              <a
                href="./rishaub_kumar_resume.pdf"
                download="Rishaub_Kumar_Resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-foreground/80 hover:text-primary border border-border hover:border-primary bg-card hover:bg-muted-bg rounded-xl shadow-sm transition-all space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Coding profile icons */}
            <div className="flex flex-col space-y-2 pt-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                Coding Profiles & Connect
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/RishaubKumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium border border-border hover:border-primary bg-card hover:bg-muted-bg rounded-lg text-foreground/80 hover:text-primary transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rishaub-kumar-339330219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium border border-border hover:border-primary bg-card hover:bg-muted-bg rounded-lg text-foreground/80 hover:text-primary transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://leetcode.com/u/rishaubkumar534/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium border border-border hover:border-primary bg-card hover:bg-muted-bg rounded-lg text-foreground/80 hover:text-primary transition-all"
                >
                  <span className="font-bold text-yellow-500">LC</span>
                  <span>LeetCode</span>
                </a>
                <a
                  href="https://codeforces.com/profile/Rishaub_Kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium border border-border hover:border-primary bg-card hover:bg-muted-bg rounded-lg text-foreground/80 hover:text-primary transition-all"
                >
                  <span className="font-bold text-red-500">CF</span>
                  <span>Codeforces</span>
                </a>
                <a
                  href="https://neetcode.io/user/PixelHokage882"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium border border-border hover:border-primary bg-card hover:bg-muted-bg rounded-lg text-foreground/80 hover:text-primary transition-all"
                >
                  <span className="font-bold text-blue-500">NC</span>
                  <span>Neetcode</span>
                </a>
                <a
                  href="mailto:rishaubkumar534@gmail.com"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium border border-border hover:border-primary bg-card hover:bg-muted-bg rounded-lg text-foreground/80 hover:text-primary transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Visual Workspace Card */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-sm lg:max-w-none rounded-2xl border border-border bg-card p-6 shadow-xl glow-card overflow-hidden">
              <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                <div className="flex space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-muted">rishaub_kumar.ts</span>
              </div>

              <div className="font-mono text-xs sm:text-sm space-y-2 text-foreground/80 overflow-x-auto select-none">
                <p><span className="text-purple-400">const</span> developer = &#123;</p>
                <p className="pl-4"><span className="text-blue-400">name</span>: <span className="text-green-400">"Rishaub Kumar"</span>,</p>
                <p className="pl-4"><span className="text-blue-400">education</span>: <span className="text-green-400">"B.Tech CSE @ VIT Bhopal"</span>,</p>
                <p className="pl-4"><span className="text-blue-400">skills</span>: [</p>
                <p className="pl-8"><span className="text-green-400">"React.js"</span>, <span className="text-green-400">"Next.js"</span>,</p>
                <p className="pl-8"><span className="text-green-400">"Node.js"</span>, <span className="text-green-400">"LangChain"</span>,</p>
                <p className="pl-8"><span className="text-green-400">"Gemini AI"</span>, <span className="text-green-400">"TypeScript"</span></p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-blue-400">cGPA</span>: <span className="text-amber-400">9.11</span>,</p>
                <p className="pl-4"><span className="text-blue-400">seeking</span>: <span className="text-green-400">"Full-Time Roles / Internships"</span>,</p>
                <p className="pl-4"><span className="text-blue-400">readyToBuild</span>: <span className="text-purple-400">() =&gt;</span> <span className="text-purple-400">true</span></p>
                <p>&#125;;</p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted font-mono">
                <span>UTF-8</span>
                <span>TypeScript</span>
                <span>Line 11, Col 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
