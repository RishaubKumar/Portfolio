"use client";

import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative py-16 lg:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Seeking Software Engineer & Gen AI Roles</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Hi, I'm <span className="text-primary">Rishaub Kumar</span>
            </h1>

            <h2 className="text-xl font-bold text-foreground/80 tracking-tight">
              Full Stack & Gen AI Developer
            </h2>

            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-xl">
              I am a final-year B.Tech CS student at **VIT Bhopal University** with hands-on experience building full-stack web applications and integrating Generative AI workflows. I enjoy building automated pipelines, optimizing APIs, and developing interactive applications.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-hover rounded-lg shadow transition-all space-x-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="./rishaub_kumar_resume.pdf"
                download="Rishaub_Kumar_Resume.pdf"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-foreground/80 hover:text-primary border border-border hover:border-primary bg-card hover:bg-muted-bg rounded-lg shadow-sm transition-all space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Coding profile icons */}
            <div className="flex flex-col space-y-2 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                Profiles & Contact
              </span>
              <div className="flex flex-wrap gap-2.5">
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

          {/* Simulated Code Editor Block */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none rounded-xl border border-border bg-card p-5 shadow-md overflow-hidden">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] font-mono text-muted">rishaub_kumar.ts</span>
              </div>

              <div className="font-mono text-xs space-y-1.5 text-foreground/80 overflow-x-auto select-none">
                <p><span className="text-purple-400">const</span> developer = &#123;</p>
                <p className="pl-4"><span className="text-blue-400">name</span>: <span className="text-green-400">"Rishaub Kumar"</span>,</p>
                <p className="pl-4"><span className="text-blue-400">education</span>: <span className="text-green-400">"B.Tech CSE @ VIT Bhopal"</span>,</p>
                <p className="pl-4"><span className="text-blue-400">skills</span>: [</p>
                <p className="pl-8"><span className="text-green-400">"React.js"</span>, <span className="text-green-400">"Next.js"</span>,</p>
                <p className="pl-8"><span className="text-green-400">"Node.js"</span>, <span className="text-green-400">"LangChain"</span>,</p>
                <p className="pl-8"><span className="text-green-400">"Gemini AI"</span>, <span className="text-green-400">"TypeScript"</span></p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-blue-400">seeking</span>: <span className="text-green-400">"SDE & Gen AI Roles"</span></p>
                <p>&#125;;</p>
              </div>

              <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-[10px] text-muted font-mono">
                <span>UTF-8</span>
                <span>TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
