"use client";

import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";

interface WorkExperience {
  role: string;
  organization: string;
  location: string;
  period: string;
  url?: string;
  details: string[];
}

const experiences: WorkExperience[] = [
  {
    role: "Full-Stack AI Engineer Intern",
    organization: "Opener Technologies Private Limited",
    location: "Remote",
    period: "Jan 2026 – May 2026",
    url: "https://opener-ai.com/",
    details: [
      "Led a developer while coordinating with UI/UX, Product, and QA teams, reporting directly to the Founder to deliver weekly progress updates.",
      "Modernized 5+ deprecated APIs with Apify and RapidAPI-based solutions, strengthening platform automation and uptime.",
      "Refined 10+ Gen AI prompts and designed the welcome modal UI, improving resume-parsing accuracy while structuring user/job data in Supabase SQL via 20+ queries.",
      "Rebuilt Google OAuth 2.0 and Gmail API integration for secure recruiter communication and diagnosed/resolved 10+ critical bugs through large-scale testing."
    ]
  },
  {
    role: "Business Analyst / Process Analyst Intern",
    organization: "Ozibook Tech Solutions Private Limited",
    location: "Remote",
    period: "Oct 2024 – Jan 2025",
    url: "https://www.ozibook.com/",
    details: [
      "Collaborated with a cross-functional team of 6 members to analyze business processes, manage operational workflows, and maintain Excel-based trackers, reports, and dashboards across 4+ departments.",
      "Extracted data-driven insights from operational metrics, identified workflow gaps, and presented actionable recommendations during team meetings to improve project execution and decision-making.",
      "Identified inefficiencies in repetitive content creation workflows and initiated an AI-powered automation solution; fine-tuned ChatGPT to generate personalized project-specific posts in a single click, reducing manual effort and improving turnaround time.",
      "Trained and onboarded a new team member on project workflows, reporting processes, and AI-assisted tools while ensuring effective knowledge transfer and maintaining team productivity."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Work Experience
          </h2>
          <div className="w-10 h-0.5 bg-primary mx-auto mt-3 rounded-full" />
          <p className="text-sm text-muted mt-3">
            My professional internships and hands-on corporate experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-border pl-6 ml-4 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline node */}
              <div className="absolute -left-[33px] top-1.5 p-1 rounded-full border border-border bg-card group-hover:border-primary transition-all">
                <Briefcase className="w-3.5 h-3.5 text-primary" />
              </div>

              {/* Content Box */}
              <div className="ui-card p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-foreground flex items-center gap-1.5">
                      {exp.role}
                      {exp.url && (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs text-muted hover:text-primary transition-colors"
                          aria-label="Visit site"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </h3>
                    <p className="text-sm font-semibold text-primary">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-muted font-mono space-y-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-muted">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
