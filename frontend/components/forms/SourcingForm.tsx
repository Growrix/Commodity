"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success";

export default function SourcingForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  };

  if (formState === "success") {
    return (
      <div className="surface-card p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-gold-muted border border-gold/30 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-text-primary mb-2">Sourcing Request Received</h3>
        <p className="text-sm text-text-secondary">
          Our sourcing team will review your requirements and respond within 48 hours on business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label">Full Name *</label>
          <input type="text" required className="form-field" placeholder="Your name" />
        </div>
        <div>
          <label className="form-label">Company *</label>
          <input type="text" required className="form-field" placeholder="Company name" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label">Business Email *</label>
          <input type="email" required className="form-field" placeholder="you@company.com" />
        </div>
        <div>
          <label className="form-label">Country</label>
          <input type="text" className="form-field" placeholder="Your country" />
        </div>
      </div>
      <div>
        <label className="form-label">Commodity / Product Description *</label>
        <textarea
          required
          rows={3}
          className="form-field resize-none"
          placeholder="Describe the commodity, specification, grade, or product family you need sourced."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label">Estimated Volume</label>
          <input type="text" className="form-field" placeholder="e.g. 10,000 MT/month" />
        </div>
        <div>
          <label className="form-label">Origin Preference</label>
          <input type="text" className="form-field" placeholder="e.g. South America, or No preference" />
        </div>
      </div>
      <div>
        <label className="form-label">Additional Context</label>
        <textarea
          rows={3}
          className="form-field resize-none"
          placeholder="Any specification constraints, urgency, existing supply challenges, or other context."
        />
      </div>
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="btn-gold w-full justify-center text-sm py-3.5"
      >
        {formState === "submitting" ? "Submitting…" : "Submit Sourcing Request"}
      </button>
    </form>
  );
}
