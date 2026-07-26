import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function QuickEnquiryCard() {
  const [formData, setFormData] = useState({
    session: '2026-27',
    name: '',
    email: '',
    phone: '',
    grade: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to Formspree or backend
    console.log('Quick Enquiry submitted:', formData);

    // Fallback: open mailto
    const subject = `Enquiry for ${formData.grade || 'General'} — Session ${formData.session}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nGrade: ${formData.grade}\nMessage: ${formData.message}`;
    window.location.href = `mailto:admissions@excellenceschool.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const grades = [
    'Playgroup',
    'Nursery',
    'LKG',
    'UKG',
    'Class I',
    'Class II',
    'Class III',
    'Class IV',
    'Class V',
    'Class VI',
    'Class VII',
    'Class VIII',
  ];

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-heading placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors';

  return (
    <motion.div
      className="card p-6 md:p-8 border border-gray-100"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Header */}
      <div className="mb-6">
        <div className="w-12 h-1 bg-gold rounded-full mb-3" />
        <h3 className="text-xl font-bold font-heading text-heading">
          Quick Enquiry
        </h3>
        <p className="text-sm text-body mt-1">
          Fill in your details and we&apos;ll get back to you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Session */}
        <select
          name="session"
          value={formData.session}
          onChange={handleChange}
          className={inputClass}
          aria-label="Select session year"
        >
          <option value="2026-27">Session 2026-27</option>
          <option value="2027-28">Session 2027-28</option>
        </select>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClass}
          aria-label="Full name"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClass}
          aria-label="Email address"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          required
          className={inputClass}
          aria-label="Phone number"
        />

        {/* Grade */}
        <select
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          className={inputClass}
          aria-label="Select grade"
        >
          <option value="">Select Grade</option>
          {grades.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message (optional)"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className={`${inputClass} resize-none`}
          aria-label="Your message"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors shadow-sm"
        >
          <Send size={16} />
          {submitted ? 'Sent!' : 'Send Enquiry'}
        </button>
      </form>
    </motion.div>
  );
}
