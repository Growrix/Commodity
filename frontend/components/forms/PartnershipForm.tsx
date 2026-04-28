"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success";

export default function PartnershipForm() {
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
        <h3 className="text-lg font-bold text-text-primary mb-2">Partnership Request Received</h3>
        <p className="text-sm text-text-secondary max-w-sm mx-auto">
          A member of our commercial team will contact you within 3–5 business days to arrange an initial conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label">Contact Name *</label>
          <input type="text" required className="form-field" placeholder="Full name" />
        </div>
        <div>
          <label className="form-label">Organisation *</label>
          <input type="text" required className="form-field" placeholder="Company or institution" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label">Business Email *</label>
          <input type="email" required className="form-field" placeholder="you@company.com" />
        </div>
        <div>
          <label className="form-label">Country</label>
          <input type="text" className="form-field" placeholder="Headquarters country" />
        </div>
      </div>
      <div>
        <label className="form-label">Partnership Type *</label>
        <select required className="form-field">
          <option value="">Select type</option>
          <option>Logistics / Freight</option>
          <option>Storage / Warehousing</option>
          <option>Trade Finance</option>
          <option>Market Development / Distribution</option>
          <option>Joint Venture</option>
          <option>Technology / Platform</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="form-label">Partnership Proposal *</label>
        <textarea
          required
          rows={5}
          className="form-field resize-none"
          placeholder="Describe the partnership opportunity, what your organisation brings, and what you are seeking from Veterra Global."
        />
      </div>
      <div>
        <label className="form-label">Relevant Markets or Sectors</label>
        <input type="text" className="form-field" placeholder="e.g. East Africa, Fertilizers, Grain logistics" />
      </div>
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="btn-gold w-full justify-center text-sm py-3.5"
      >
        {formState === "submitting" ? "Submitting…" : "Submit Partnership Request"}
      </button>
    </form>
  );
}
