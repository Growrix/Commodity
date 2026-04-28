"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success";

export default function GeneralInquiryForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormState("success");
  };

  if (formState === "success") {
    return (
      <div className="surface-card p-8 text-center rounded-lg">
        <div className="w-12 h-12 rounded-full bg-gold-muted border border-gold/30 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-text-primary mb-2">Inquiry Received</h3>
        <p className="text-sm text-text-secondary max-w-md mx-auto">
          Our team will route your message to the right commercial or operations contact and respond on business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="gi-name" className="form-label">Full Name *</label>
          <input id="gi-name" type="text" required className="form-field" placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="gi-company" className="form-label">Company *</label>
          <input id="gi-company" type="text" required className="form-field" placeholder="Acme Trading Co." />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="gi-email" className="form-label">Business Email *</label>
          <input id="gi-email" type="email" required className="form-field" placeholder="jane@company.com" />
        </div>
        <div>
          <label htmlFor="gi-region" className="form-label">Primary Region</label>
          <input id="gi-region" type="text" className="form-field" placeholder="East Africa, MENA, Southeast Asia..." />
        </div>
      </div>
      <div>
        <label htmlFor="gi-topic" className="form-label">Topic *</label>
        <select id="gi-topic" required className="form-field">
          <option value="">Select a topic</option>
          <option>General Commercial Inquiry</option>
          <option>Documentation and Compliance</option>
          <option>Market Coverage Question</option>
          <option>Press or Partnership Request</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="gi-message" className="form-label">Message *</label>
        <textarea
          id="gi-message"
          required
          rows={5}
          className="form-field resize-none"
          placeholder="Tell us what you need help with, the commodity or market involved, and any key timing constraints."
        />
      </div>
      <p className="text-xs text-text-muted">
        If your request is time-sensitive and specification-led, use the dedicated quote or sourcing forms above for faster commercial routing.
      </p>
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="btn-gold w-full justify-center text-sm py-3.5"
      >
        {formState === "submitting" ? "Submitting..." : "Send Inquiry"}
      </button>
    </form>
  );
}