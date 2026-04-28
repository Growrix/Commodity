"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success";

export default function SupplierForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1500));
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
        <h3 className="text-lg font-bold text-text-primary mb-2">Registration Received</h3>
        <p className="text-sm text-text-secondary max-w-sm mx-auto">
          Thank you for registering. Our procurement team will review your submission and reach out within 5 business days to discuss next steps.
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
          <label className="form-label">Company / Organisation *</label>
          <input type="text" required className="form-field" placeholder="Registered company name" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label">Business Email *</label>
          <input type="email" required className="form-field" placeholder="contact@company.com" />
        </div>
        <div>
          <label className="form-label">Country of Origin *</label>
          <input type="text" required className="form-field" placeholder="Where you supply from" />
        </div>
      </div>
      <div>
        <label className="form-label">Commodities Offered *</label>
        <textarea
          required
          rows={3}
          className="form-field resize-none"
          placeholder="List the commodities, grades, and specifications you supply."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label">Annual Supply Capacity</label>
          <input type="text" className="form-field" placeholder="e.g. 50,000 MT/year" />
        </div>
        <div>
          <label className="form-label">Certifications Held</label>
          <input type="text" className="form-field" placeholder="e.g. ISO 9001, Organic, ISCC" />
        </div>
      </div>
      <div>
        <label className="form-label">Preferred Export Terms</label>
        <select className="form-field">
          <option value="">Select preference</option>
          <option>FOB</option>
          <option>CFR</option>
          <option>CIF</option>
          <option>DAP</option>
          <option>Open to discussion</option>
        </select>
      </div>
      <div>
        <label className="form-label">Additional Notes</label>
        <textarea
          rows={3}
          className="form-field resize-none"
          placeholder="Export history, references, existing customer relationships, or other relevant context."
        />
      </div>
      <p className="text-xs text-text-muted">
        All supplier registrations are subject to our standard due diligence process including sanctions screening and compliance verification.
      </p>
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="btn-gold w-full justify-center text-sm py-3.5"
      >
        {formState === "submitting" ? "Submitting…" : "Submit Supplier Registration"}
      </button>
    </form>
  );
}
