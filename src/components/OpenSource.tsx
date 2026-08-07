"use client";

import { GitBranch, Calendar } from "lucide-react";

export default function OpenSource() {
  return (
    <section id="opensource" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Open Source Contributions
          </h2>
          <div className="w-10 h-0.5 bg-primary mx-auto mt-3 rounded-full" />
          <p className="text-sm text-muted mt-3">
            Contributions to the developer community and open repositories.
          </p>
        </div>

        {/* Contribution Card */}
        <div className="ui-card p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <GitBranch className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">
                  Contributor — Hacktoberfest 2024
                </h3>
                <p className="text-xs text-primary font-semibold">
                  Global Open Source Initiative
                </p>
              </div>
            </div>
            <span className="flex items-center gap-1 text-xs text-muted font-mono">
              <Calendar className="w-3 h-3" />
              Oct 2024
            </span>
          </div>

          <p className="text-sm text-muted leading-relaxed mb-4">
            Successfully participated in and completed Hacktoberfest 2024 by contributing quality code patches to public repositories.
          </p>

          <div className="border-t border-border/60 pt-4">
            <h4 className="text-xs font-bold text-foreground mb-2">Key Areas of Contributions:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Node.js server-side bug fixes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>CSS responsive layout enhancements</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>MongoDB query & schema corrections</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Java codebase refinements</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
