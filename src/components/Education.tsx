"use client";

import { GraduationCap, Award, BookOpen } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
  details?: string;
}

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  badge?: string;
}

const educationList: EducationItem[] = [
  {
    institution: "VIT Bhopal University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "2023 – 2027",
    score: "CGPA: 9.11",
    details: "Relevant coursework: Software Engineering, Database Management Systems, Data Structures & Algorithms, Artificial Intelligence, and Machine Learning."
  },
  {
    institution: "Jawahar Navodaya Vidyalaya, Ghaziabad",
    degree: "Senior Secondary School Education (CBSE)",
    period: "2018 – 2022",
    score: "XII CBSE: 83.6% | X CBSE: 90.17%"
  }
];

const certificationsList: CertificationItem[] = [
  {
    title: "Google IT Support Professional Certificate",
    issuer: "Google Career Certificates",
    date: "Jan 2026",
    badge: "Professional Certificate"
  },
  {
    title: "Full-Stack Web Development (MERN) & Data Structures & Algorithms (Java)",
    issuer: "Apna College",
    date: "Jan 2023 – Dec 2025"
  },
  {
    title: "NPTEL Elite (Top 5%) — Introduction to Machine Learning",
    issuer: "IIT Madras",
    date: "2025"
  },
  {
    title: "NPTEL Elite Gold (Top 5%) — Marketing Analytics",
    issuer: "IIT Kharagpur",
    date: "2026",
    badge: "Score: 97/100"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Education & Credentials
          </h2>
          <div className="w-10 h-0.5 bg-primary mx-auto mt-3 rounded-full" />
          <p className="text-sm text-muted mt-3">
            Academic timeline and technical achievements.
          </p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3 mb-2 px-1">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground font-sans">Academic Education</h3>
            </div>

            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="ui-card p-6"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-foreground">
                      {edu.institution}
                    </h4>
                    <p className="text-xs text-primary font-semibold mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold font-mono bg-muted-bg text-foreground/80 border border-border px-2 py-0.5 rounded">
                    {edu.period}
                  </span>
                </div>

                <div className="text-xs text-muted mb-3 space-y-1">
                  <p className="font-semibold text-foreground/95">{edu.score}</p>
                  {edu.details && <p className="leading-relaxed">{edu.details}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3 mb-2 px-1">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Certifications & Achievements</h3>
            </div>

            <div className="ui-card p-6 space-y-4">
              {certificationsList.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 pb-4 last:pb-0 last:border-b-0 border-b border-border/60"
                >
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                    <BookOpen className="w-4 h-4 text-primary" />
                  </div>

                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-foreground">
                        {cert.title}
                      </h4>
                      <span className="text-[10px] font-semibold text-muted shrink-0 font-mono">
                        {cert.date}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-xs text-muted font-medium">
                        {cert.issuer}
                      </span>
                      {cert.badge && (
                        <>
                          <span className="text-border text-xs">•</span>
                          <span className="text-[9px] font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20 px-1.5 py-0.5 rounded">
                            {cert.badge}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
