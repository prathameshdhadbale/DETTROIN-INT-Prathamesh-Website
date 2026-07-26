import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import { contactInfo } from '../data/navigation';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fallback: open mailto
    const mailSubject = `Contact: ${formData.subject || 'General Inquiry'}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${contactInfo.email1}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-heading placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors';

  return (
    <div className="min-h-screen bg-offwhite py-12 md:py-20">
      <div className="section-container">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Us"
          subtitle="We'd love to hear from you. Feel free to reach out with any questions, feedback, or inquiries."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 mt-16">
          {/* Contact Details */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Address */}
            <div className="card p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                <MapPin size={24} className="text-teal" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-heading mb-1">Our Location</h3>
                <p className="text-sm text-body leading-relaxed">{contactInfo.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="card p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Phone size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-heading mb-1">Call Us</h3>
                <p className="text-sm text-body leading-relaxed mb-1">{contactInfo.phone}</p>
              </div>
            </div>

            {/* Email */}
            <div className="card p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                <Mail size={24} className="text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-heading mb-1">Email Us</h3>
                <p className="text-sm text-body leading-relaxed mb-1">
                  <a href={`mailto:${contactInfo.email1}`} className="hover:text-teal transition-colors">{contactInfo.email1}</a>
                </p>
                <p className="text-sm text-body leading-relaxed">
                  <a href={`mailto:${contactInfo.email2}`} className="hover:text-teal transition-colors">{contactInfo.email2}</a>
                </p>
              </div>
            </div>

            {/* Timings */}
            <div className="card p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                <Clock size={24} className="text-purple-500" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-heading mb-1">Visiting Hours</h3>
                <p className="text-sm text-body leading-relaxed">Mon - Sat: 8:00 AM - 2:00 PM</p>
                <p className="text-sm text-body leading-relaxed text-rose-500 mt-1">Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 card p-8 border border-gray-100"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-heading text-heading mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              
              <textarea
                name="message"
                placeholder="Your Message *"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors shadow-sm w-full md:w-auto"
              >
                <Send size={18} />
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Embed */}
        <motion.div
          className="mt-16 rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-[400px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113693.30790930773!2d78.00627768565578!3d27.883748283592572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a48686459c8b%3A0x95d967276d323613!2sAligarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709825412389!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
