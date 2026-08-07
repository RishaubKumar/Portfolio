"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("sending");
    try {
      // Build mailto link to initiate default email client
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
      const mailtoLink = `mailto:rishaubkumar534@gmail.com?subject=${encodeURIComponent(
        subject || "Portfolio Contact Form"
      )}&body=${body}`;
      
      window.location.href = mailtoLink;
      setStatus("success");
      
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted-bg/50 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted mt-4">
            Have a project idea, job opportunity, or just want to chat? Reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="md:col-span-5 rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between glow-card">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Contact Information</h3>
              <p className="text-sm text-muted mb-8 leading-relaxed">
                Feel free to email me directly or reach out through my socials. I'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:rishaubkumar534@gmail.com"
                  className="flex items-center gap-4 text-sm text-muted hover:text-primary transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-foreground">Email</p>
                    <p className="truncate">rishaubkumar534@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919058286673"
                  className="flex items-center gap-4 text-sm text-muted hover:text-primary transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Phone</p>
                    <p>+91 90582 86673</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-sm text-muted group">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 transition-all">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Location</p>
                    <p>Remote / VIT Bhopal University</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border mt-8 text-xs text-muted flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span>Available for Slack, Teams, or Discord syncs.</span>
            </div>
          </div>

          {/* Contact Form Card */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-7 rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between gap-6 glow-card"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold text-foreground">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full text-sm px-4 py-2.5 rounded-xl border border-border bg-muted-bg text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold text-foreground">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full text-sm px-4 py-2.5 rounded-xl border border-border bg-muted-bg text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs font-bold text-foreground">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Collaboration Proposal"
                className="w-full text-sm px-4 py-2.5 rounded-xl border border-border bg-muted-bg text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5 flex-grow flex flex-col">
              <label htmlFor="message" className="text-xs font-bold text-foreground">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                className="w-full text-sm px-4 py-2.5 rounded-xl border border-border bg-muted-bg text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none transition-colors flex-grow resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto self-end inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-primary hover:bg-primary-hover disabled:bg-primary/50 rounded-xl shadow-lg transition-all space-x-2 shrink-0 cursor-pointer"
            >
              <span>{status === "sending" ? "Opening Email..." : "Send Message"}</span>
              <Send className="w-4 h-4" />
            </button>

            {status === "success" && (
              <p className="text-xs text-primary font-semibold text-center mt-2">
                Draft created in your mail app! Thank you for reaching out.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
