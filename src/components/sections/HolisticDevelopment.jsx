import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import {
  sportsPhysical,
  culturalActivities,
  personalityDev,
  transportFacility,
} from '../../data/images';

const features = [
  {
    title: 'Sports & Physical Education',
    description: 'A healthy mind resides in a healthy body. We provide ample opportunities for students to engage in various sports, fostering teamwork, discipline, and physical fitness.',
    bullets: [
      'Extensive sports facilities and coaching',
      'Regular inter-house and inter-school competitions',
      'Focus on physical fitness and well-being',
    ],
    image: sportsPhysical,
    alt: 'Students playing sports on the field',
  },
  {
    title: 'Cultural & Creative Activities',
    description: 'We encourage students to express themselves through art, music, dance, and drama. These activities play a vital role in developing creativity and preserving our rich cultural heritage.',
    bullets: [
      'Dedicated art, music, and dance studios',
      'Annual cultural fests and exhibitions',
      'Encouraging creative expression and talent',
    ],
    image: culturalActivities,
    alt: 'Students participating in a cultural performance',
  },
  {
    title: 'Personality Development & Life Skills',
    description: 'Education is incomplete without the development of essential life skills. We conduct regular workshops and activities to enhance communication, leadership, and social skills.',
    bullets: [
      'Leadership and communication workshops',
      'Focus on emotional intelligence and empathy',
      'Preparing students for real-world challenges',
    ],
    image: personalityDev,
    alt: 'Students engaged in a group discussion',
  },
  {
    title: 'Transportation Facility',
    description: 'We offer a safe, reliable, and comfortable transportation service for our students, covering major routes in and around the city to ensure a hassle-free commute.',
    bullets: [
      'Well-maintained fleet of school buses/vans',
      'Trained drivers and support staff',
      'Strict adherence to safety guidelines',
    ],
    image: transportFacility,
    alt: 'School transportation van',
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

export default function HolisticDevelopment() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Beyond Academics"
          title="Holistic Development"
          subtitle="We focus on the all-round development of our students, providing opportunities to explore their interests and talents beyond the classroom."
          align="center"
        />

        <div className="space-y-16 md:space-y-24 mt-12">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={feature.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
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
                  <h3 className="text-2xl md:text-3xl font-bold font-heading text-heading mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-body leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2.5">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
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
                    className="w-full rounded-2xl shadow-lg border-4 border-white"
                  />
                  {/* Decorative element */}
                  <div
                    className={`absolute w-24 h-24 rounded-full -z-10 hidden md:block ${
                      isReversed
                        ? '-bottom-4 -left-4 bg-teal/20'
                        : '-top-4 -right-4 bg-gold/20'
                    }`}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
