"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success";

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 800));
    setFormState("success");
  };

  if (formState === "success") {
    return (
      <p className="text-sm text-gold font-medium">
        ✓ Subscribed. Check your inbox for confirmation.
      </p>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          placeholder="Your business email"
          className="form-field flex-1 text-sm py-2.5"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={formState === "submitting"}
          className="btn-gold text-sm py-2.5 shrink-0"
        >
          {formState === "submitting" ? "…" : "Subscribe"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="form-label">Business Email *</label>
        <input type="email" required className="form-field" placeholder="you@company.com" />
      </div>
      <div>
        <label className="form-label">Sector Interest</label>
        <div className="grid grid-cols-2 gap-2 mt-1">
          {["Agriculture", "Energy", "Fertilizers", "Industrial Materials"].map((s) => (
            <label key={s} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-border-light bg-surface-elevated accent-gold"
                defaultChecked
              />
              <span className="text-sm text-text-secondary">{s}</span>
            </label>
          ))}
        </div>
      </div>
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="btn-gold w-full justify-center text-sm py-3"
      >
        {formState === "submitting" ? "Subscribing…" : "Subscribe to Market Updates"}
      </button>
      <p className="text-xs text-text-muted">No spam. Unsubscribe anytime.</p>
    </form>
  );
}
