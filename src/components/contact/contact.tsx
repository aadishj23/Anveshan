"use client";

import React, { useState } from "react";
import Typography from "../Typography";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSuccess(
        "Your message has been sent successfully! The Anveshan team will reach out soon.",
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto"
    >
      <div className="bg-[#141414] rounded-3xl border border-white/10 p-8 sm:p-12 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Typography.Display className="font-sketch-block font-normal text-primary text-4xl sm:text-5xl md:text-6xl leading-tight">
            GET IN TOUCH
          </Typography.Display>
          <Typography.Lead className="font-prompt text-white/80 text-sm sm:text-base max-w-lg mx-auto mt-2">
            Have questions, ideas for collaboration, or want to join Anveshan?
            Drop us a message!
          </Typography.Lead>
        </div>

        {/* Status Alerts */}
        {success && (
          <div className="mb-6 p-4 rounded-xl bg-green-950/40 border border-green-500/30 text-green-300 flex items-center gap-3">
            <CheckCircle2 className="size-5 text-green-400 shrink-0" />
            <p className="text-sm font-medium">{success}</p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 flex items-center gap-3">
            <AlertCircle className="size-5 text-red-400 shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-white/90 mb-2">
              Your Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-white/40" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1c1c1c] border border-white/10 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 text-white placeholder:text-white/40 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-white/90 mb-2">
              Your Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-white/40" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@domain.com"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1c1c1c] border border-white/10 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 text-white placeholder:text-white/40 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-white/90 mb-2">
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 size-5 text-white/40" />
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what's on your mind..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1c1c1c] border border-white/10 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 text-white placeholder:text-white/40 text-sm resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl bg-primary text-black font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all disabled:opacity-50 cursor-pointer shadow-lg"
          >
            {loading ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="size-5" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
