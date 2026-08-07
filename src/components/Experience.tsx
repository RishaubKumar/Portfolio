"use client";

import { Briefcase, Calendar, MapPin, Award, GitBranch, ArrowUpRight } from "lucide-react";

interface TimelineItem {
  type: "internship" | "hackathon" | "open-source";
  role: string;
  organization: string;
  location?: string;
  period: string;
  url?: string;
  details: string[];
}

const items: TimelineItem[] = [
  {
    type: "internship",
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
    type: "hackathon",
    role: "Finalist — Deloitte Hacksplosion 2026",
    organization: "Deloitte India",
    period: "Feb 2026",
    details: [
      "Collaborated within a 5-member team to build an AI agent pipeline automating IT/service-desk ticket triage.",
      "Cut manual categorization effort by 80% and successfully presented the prototype to judges, reaching the national Final Round."
    ]
  },
  {
    type: "hackathon",
    role: "Semifinalist — Epsilon TeXpedition Hackathon 2026",
    organization: "Epsilon",
    period: "Mar 2026",
    details: [
      "Advanced to the Semifinal Round by building and demonstrating a working application within an intensive hackathon environment."
    ]
  },
  {
    type: "open-source",
    role: "Open Source Contributor",
    organization: "Hacktoberfest 2024",
    period: "Oct 2024",
    details: [
      "Submitted 5+ merged pull requests across multiple repositories, including Node.js bug fixes, CSS improvements, MongoDB corrections, and Java enhancements."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience & Hackathons
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted mt-4">
            A chronicle of my professional internship and achievements in competitive hackathons.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-border pl-6 ml-4 space-y-12">
          {items.map((item, index) => {
            const isIntern = item.type === "internship";
            const isHackathon = item.type === "hackathon";

            return (
              <div key={index} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[35px] top-1.5 p-1.5 rounded-full border border-border bg-card group-hover:border-primary group-hover:bg-primary/5 transition-all">
                  {isIntern ? (
                    <Briefcase className="w-4 h-4 text-primary" />
                  ) : isHackathon ? (
                    <Award className="w-4 h-4 text-amber-500" />
                  ) : (
                    <GitBranch className="w-4 h-4 text-blue-500" />
                  )}
                </div>

                {/* Content Box */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 glow-card">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground flex items-center gap-1.5">
                        {item.role}
                        {item.url && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-muted hover:text-primary transition-colors"
                            aria-label="Visit site"
                          >
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-muted font-mono space-y-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-muted">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 font-bold">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
