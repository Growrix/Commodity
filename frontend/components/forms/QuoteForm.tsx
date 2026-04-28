"use client";

import { useState } from "react";

const sectors = ["Agriculture", "Energy", "Fertilizers", "Industrial Materials"];
const products: Record<string, string[]> = {
  Agriculture: ["Wheat", "Corn", "Soybeans", "Sugar", "Soybean Meal", "Other"],
  Energy: ["Diesel / Gas Oil", "Steam Coal", "Petroleum Coke", "Wood Pellets", "Other"],
  Fertilizers: ["Urea", "DAP", "MAP", "MOP", "Ammonium Nitrate", "NPK Blends", "Other"],
  "Industrial Materials": ["Iron Ore", "Aluminium Ingots", "Barite", "Sulfur", "Other"],
};

type FormState = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [sector, setSector] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        <h3 className="text-lg font-bold text-text-primary mb-2">Request Received</h3>
        <p className="text-sm text-text-secondary">
          Our trade desk will review your requirements and respond within 24 hours on business days. Please check your email for confirmation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="qf-name" className="form-label">Full Name *</label>
          <input id="qf-name" type="text" required className="form-field" placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="qf-company" className="form-label">Company *</label>
          <input id="qf-company" type="text" required className="form-field" placeholder="Acme Trading Co." />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="qf-email" className="form-label">Business Email *</label>
          <input id="qf-email" type="email" required className="form-field" placeholder="jane@company.com" />
        </div>
        <div>
          <label htmlFor="qf-phone" className="form-label">Phone / WhatsApp</label>
          <input id="qf-phone" type="tel" className="form-field" placeholder="+1 555 000 0000" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="qf-sector" className="form-label">Commodity Sector *</label>
          <select
            id="qf-sector"
            required
            className="form-field"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
          >
            <option value="">Select sector</option>
            {sectors.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="qf-product" className="form-label">Product *</label>
          <select id="qf-product" required className="form-field" disabled={!sector}>
            <option value="">Select product</option>
            {(products[sector] || []).map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="qf-volume" className="form-label">Volume Required *</label>
          <input id="qf-volume" type="text" required className="form-field" placeholder="e.g. 5,000 MT" />
        </div>
        <div>
          <label htmlFor="qf-destination" className="form-label">Destination Port / Country *</label>
          <input id="qf-destination" type="text" required className="form-field" placeholder="e.g. Mombasa, Kenya" />
        </div>
      </div>
      <div>
        <label htmlFor="qf-timeline" className="form-label">Delivery Timeline</label>
        <select id="qf-timeline" className="form-field">
          <option value="">Select timeline</option>
          <option>Immediately (within 2 weeks)</option>
          <option>1–3 months</option>
          <option>3–6 months</option>
          <option>6+ months / Recurring</option>
        </select>
      </div>
      <div>
        <label htmlFor="qf-notes" className="form-label">Additional Notes</label>
        <textarea
          id="qf-notes"
          rows={4}
          className="form-field resize-none"
          placeholder="Specification requirements, incoterm preference, grade, packaging, or other notes..."
        />
      </div>
      <p className="text-xs text-text-muted">
        All enquiries are treated confidentially. We do not share your information with third parties without consent.
      </p>
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="btn-gold w-full justify-center text-sm py-3.5"
      >
        {formState === "submitting" ? (
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting…
          </span>
        ) : (
          "Submit Quote Request"
        )}
      </button>
    </form>
  );
}
