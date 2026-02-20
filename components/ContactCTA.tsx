import React, { useState } from "react";
import { Send, Phone, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
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
          brand: form.brand,
          budget: form.budget,
          details: form.details,

          message: `
Full Name: ${form.name}
Email: ${form.email}
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
          brand: "",
          budget: "",
          details: "",
        });
      } else {
        console.log(result);
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
      {/* HEADING */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Let’s Build Something Powerful
        </h2>

        <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Open for brand collaborations, strategic partnerships and
          performance-driven campaigns. Share your vision below.
        </p>
      </div>

      {/* FORM CONTAINER */}
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
          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl bg-white/[0.06] border border-white/10 px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl bg-white/[0.06] border border-white/10 px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition"
            />
          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="brand"
              placeholder="Brand / Company"
              value={form.brand}
              onChange={handleChange}
              className="w-full rounded-xl bg-white/[0.06] border border-white/10 px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition"
            />

            <input
              type="text"
              name="budget"
              placeholder="Estimated Budget (Optional)"
              value={form.budget}
              onChange={handleChange}
              className="w-full rounded-xl bg-white/[0.06] border border-white/10 px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition"
            />
          </div>

          {/* DETAILS */}
          <textarea
            name="details"
            placeholder="Campaign Details"
            rows={6}
            required
            value={form.details}
            onChange={handleChange}
            className="w-full rounded-xl bg-white/[0.06] border border-white/10 px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition resize-none"
          />

          {/* STATUS */}
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

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-white text-black font-semibold text-lg flex items-center justify-center gap-3 transition disabled:opacity-60"
          >
            <Send size={20} />
            {loading ? "Sending..." : "Submit Collaboration Inquiry"}
          </button>
        </form>
      </motion.div>

      {/* CONTACT INFO */}
      <div className="max-w-4xl mx-auto mt-14 text-center space-y-4">
        <div className="flex justify-center gap-10 flex-wrap text-white/60 text-sm">
        <a
            href="mailto:pandeyabhishekmkp1423@gmail.com"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Mail size={16} />
            pandeyswapnil426@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
