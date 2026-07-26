import { motion } from 'framer-motion';
import { heroBanner1 } from '../../data/images';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner1}
          alt="Students learning at Excellence International School"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 py-20">
        <div className="max-w-2xl">
          {/* Admissions Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/30 text-gold-light text-sm font-semibold rounded-full backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Admissions Open — Playgroup to Class VIII
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Nurturing Young Minds for a{' '}
            <span className="text-gold">Brighter Tomorrow</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Excellence International School provides a nurturing, stimulating, and
            safe learning environment where every child can discover their unique
            potential.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a
              href="/admissions"
              className="inline-flex items-center px-6 py-3.5 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-colors shadow-lg shadow-gold/25"
            >
              Apply Now
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors backdrop-blur-sm border border-white/20"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Organic accent shape (right side, decorative) */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-teal/10 accent-blob hidden lg:block" />
      <div className="absolute right-20 top-20 w-64 h-64 bg-gold/5 accent-blob hidden lg:block" />
    </section>
  );
}
