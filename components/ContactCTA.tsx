import React, { useState } from "react";
import { Send, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    brand: "",
    budget: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.phone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "3854a737-8445-4607-a6de-8ae583f94617",

          subject: `New Collaboration Inquiry from ${form.name}`,

          from_name: form.name,
          from_email: form.email,

          name: form.name,
          email: form.email,
          phone: form.phone,
          whatsapp: form.whatsapp,
          brand: form.brand,
          budget: form.budget,
          details: form.details,

          message: `
Full Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
WhatsApp: ${form.whatsapp}
Brand / Company: ${form.brand}
Estimated Budget: ${form.budget}

Campaign Details:
${form.details}
          `,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          whatsapp: "",
          brand: "",
          budget: "",
          details: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Let’s Build Something Powerful
        </h2>

        <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Open for brand collaborations, partnerships and performance-driven campaigns.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.4)] p-10 md:p-14 space-y-8"
        >
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              required
              value={form.name}
              onChange={handleChange}
              className="input"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={form.email}
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              value={form.phone}
              onChange={handleChange}
              className="input"
            />

            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp Number (Optional)"
              value={form.whatsapp}
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="brand"
              placeholder="Brand / Company *"
              required
              value={form.brand}
              onChange={handleChange}
              className="input"
            />

            <input
              type="text"
              name="budget"
              placeholder="Estimated Budget"
              value={form.budget}
              onChange={handleChange}
              className="input"
            />
          </div>

          <textarea
            name="details"
            placeholder="Campaign Details *"
            rows={6}
            required
            value={form.details}
            onChange={handleChange}
            className="input resize-none"
          />

          {status === "success" && (
            <div className="text-green-400 text-center font-medium">
              ✅ Inquiry sent successfully.
            </div>
          )}

          {status === "error" && (
            <div className="text-red-400 text-center font-medium">
              ❌ Something went wrong. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-white text-black font-semibold text-lg flex items-center justify-center gap-3 transition disabled:opacity-60 hover:scale-[1.02]"
          >
            <Send size={20} />
            {loading ? "Sending..." : "Submit Collaboration Inquiry"}
          </button>
        </form>
      </motion.div>

      {/* Direct Email Only */}
      <div className="max-w-4xl mx-auto mt-14 text-center space-y-4 text-white/60 text-sm">
        <div className="flex justify-center items-center gap-3">
          <Mail size={16} />
          pandeyswapnil426@gmail.com
        </div>
      </div>

      <style>
        {`
          .input {
            width: 100%;
            border-radius: 12px;
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.1);
            padding: 16px 20px;
            color: white;
            transition: all 0.3s ease;
          }
          .input::placeholder {
            color: rgba(255,255,255,0.4);
          }
          .input:focus {
            outline: none;
            border-color: rgba(255,255,255,0.4);
          }
        `}
      </style>
    </section>
  );
};

export default ContactPage;