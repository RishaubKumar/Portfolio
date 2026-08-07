"use client";

import { Award, Calendar, ExternalLink } from "lucide-react";

interface HackathonItem {
  title: string;
  organization: string;
  period: string;
  details: string[];
  demoUrl?: string;
}

const hackathons: HackathonItem[] = [
  {
    title: "Finalist — Deloitte Hacksplosion 2026",
    organization: "Deloitte India",
    period: "Feb 2026",
    details: [
      "Collaborated within a 5-member team to build an AI agent pipeline automating IT/service-desk ticket triage.",
      "Cut manual categorization effort by 80% using prompt-engineered classifiers and LLM routing logic.",
      "Successfully presented the working prototype to a panel of judges, reaching the national Final Round."
    ]
  },
  {
    title: "Semifinalist — Epsilon TeXpedition Hackathon 2026",
    organization: "Epsilon",
    period: "Mar 2026",
    demoUrl: "https://relationship-os-psi.vercel.app/",
    details: [
      "Advanced to the Semifinal Round by building and demonstrating a working application within an intensive hackathon environment.",
      "Developed RelationshipOS, an application designed to help users track and nurture personal and professional networks."
    ]
  }
];

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-16 bg-muted-bg/30 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Hackathons
          </h2>
          <div className="w-10 h-0.5 bg-primary mx-auto mt-3 rounded-full" />
          <p className="text-sm text-muted mt-3">
            Key milestones achieved during competitive hackathon challenges.
          </p>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hackathons.map((hack, index) => (
            <div key={index} className="ui-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <Award className="w-4 h-4 text-amber-500" />
                  </div>
                  <span className="flex items-center gap-1 text-xs text-muted font-mono">
                    <Calendar className="w-3 h-3" />
                    {hack.period}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground mb-1">
                  {hack.title}
                </h3>
                <p className="text-xs font-semibold text-primary mb-4">
                  {hack.organization}
                </p>

                <ul className="space-y-2 text-xs text-muted mb-4">
                  {hack.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-1.5 font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {hack.demoUrl && (
                <div className="pt-3 border-t border-border/40 mt-4 flex justify-end">
                  <a
                    href={hack.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary-hover gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
