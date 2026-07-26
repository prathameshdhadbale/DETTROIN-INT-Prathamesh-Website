import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import {
  academicSystem,
  conceptLearning,
  experiencedFaculty,
  safeCampus,
} from '../../data/images';

const features = [
  {
    title: 'Strong Academic System',
    description: 'Our curriculum is designed to challenge students and foster intellectual growth. We maintain high academic standards while ensuring every child receives the support they need to succeed.',
    bullets: [
      'Comprehensive and updated curriculum',
      'Regular assessments and feedback',
      'Focus on foundational concepts',
    ],
    image: academicSystem,
    alt: 'Students studying in a strong academic environment',
  },
  {
    title: 'Concept-Based Learning',
    description: 'We move beyond rote memorization to ensure deep understanding. Our teachers use real-world examples, interactive models, and practical experiments to make learning engaging and relevant.',
    bullets: [
      'Focus on "how" and "why" instead of just "what"',
      'Interactive and practical teaching methods',
      'Encouraging critical thinking and inquiry',
    ],
    image: conceptLearning,
    alt: 'Teacher demonstrating a concept to students',
  },
  {
    title: 'Experienced Faculty',
    description: 'Our team of passionate and highly qualified educators are dedicated to nurturing each student\'s potential. They serve as mentors, guiding students through their academic and personal journey.',
    bullets: [
      'Highly qualified and trained teachers',
      'Continuous professional development',
      'Mentorship and personalized attention',
    ],
    image: experiencedFaculty,
    alt: 'Experienced teachers interacting with students',
  },
  {
    title: 'Safe & Secure Campus',
    description: 'The safety and well-being of our students is our top priority. Our campus is equipped with modern security systems and protocols to provide a secure environment for learning and growth.',
    bullets: [
      '24/7 CCTV surveillance across campus',
      'Trained security personnel',
      'Strict visitor management protocols',
    ],
    image: safeCampus,
    alt: 'Secure school campus environment',
  },
];

const fadeSlide = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -40 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
});

export default function WhyUsSection() {
  return (
    <section className="bg-navy text-white">
      {/* Intro Band */}
      <div className="border-b border-white/10">
        <div className="section-container py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Positive and Motivating Learning Environment
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              At Excellence International School, we create an atmosphere where students feel inspired to explore, question, and excel.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Alternating Rows */}
      <div className="section-container py-20 space-y-20">
        {features.map((feature, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={feature.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                isReversed ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Text Content */}
              <motion.div
                className={`${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeSlide(!isReversed)}
              >
                <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-gold">
                  {feature.title}
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                      <span className="text-white/80 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Image */}
              <motion.div
                className={`relative ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeSlide(isReversed)}
              >
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full rounded-2xl shadow-xl shadow-black/20"
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
