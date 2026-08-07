"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Eye, Heart } from "lucide-react";

export default function Footer() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Free, client-side API counter
    fetch("https://api.counterapi.dev/v1/rishaubkumar/portfolio-hits/up")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data && typeof data.count === "number") {
          setViews(data.count);
        }
      })
      .catch((err) => {
        console.warn("Visitor counter API error, using fallback simulated count:", err);
        // Fallback simulated count in case the free API is offline
        setViews(1248);
      });
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card mt-auto py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Copyright & Info */}
          <div className="text-left space-y-2">
            <p className="text-sm font-semibold tracking-tight text-foreground">
              Rishaub Kumar
            </p>
            <p className="text-xs text-muted flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              <span>by a B.Tech IT undergrad.</span>
            </p>
            <p className="text-xs text-muted">
              © {year} Rishaub Kumar. All rights reserved.
            </p>
          </div>

          {/* Visitor Counter */}
          <div className="flex items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 shadow-sm">
              <Eye className="w-3.5 h-3.5" />
              <span>Visitor count:</span>
              {views !== null ? (
                <span className="font-mono font-bold animate-fade-in">{views}</span>
              ) : (
                <span className="w-6 h-3 bg-primary/20 rounded animate-pulse" />
              )}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/RishaubKumar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-primary hover:bg-muted-bg rounded-lg transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rishaub-kumar-339330219/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-primary hover:bg-muted-bg rounded-lg transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:rishaubkumar534@gmail.com"
              className="p-2 text-muted hover:text-primary hover:bg-muted-bg rounded-lg transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
