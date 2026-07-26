import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import {
  prePrimaryClassroom,
  primaryActivity,
  middleSchoolStudents,
  daycareToddlers,
} from '../../data/images';

const stages = [
  {
    title: 'Pre-Primary',
    subtitle: 'Playgroup · Nursery · LKG · UKG',
    description:
      'Our Pre-Primary program creates a joyful and stimulating environment where young learners take their first steps in education. Through play-based learning, storytelling, art, and sensory activities, children develop foundational skills in literacy, numeracy, and social interaction.',
    focusAreas: [
      'Play-based and activity-driven learning',
      'Language development through stories and rhymes',
      'Early numeracy and logical thinking',
      'Fine and gross motor skill development',
      'Social skills and emotional intelligence',
      'Creative expression through art and music',
    ],
    image: prePrimaryClassroom,
    imageAlt: 'Pre-Primary classroom with colorful play-based learning setup',
  },
  {
    title: 'Primary',
    subtitle: 'Class I – Class V',
    description:
      'The Primary section builds on the early childhood foundation with a structured yet engaging curriculum. Students explore subjects in depth through hands-on activities, collaborative projects, and concept-based teaching that makes learning meaningful and lasting.',
    focusAreas: [
      'Strong foundation in English, Hindi, Mathematics, and Science',
      'Concept-based and experiential learning approach',
      'Computer literacy and digital skills',
      'Regular assessments with constructive feedback',
      'Co-curricular activities including sports, art, and music',
      'Personality development and public speaking',
    ],
    image: primaryActivity,
    imageAlt: 'Primary students engaged in hands-on learning activities',
  },
  {
    title: 'Middle School',
    subtitle: 'Class VI – Class VIII',
    description:
      'Our Middle School program prepares students for higher academic challenges with a comprehensive curriculum that emphasizes analytical thinking, research skills, and independent learning. Students are encouraged to take ownership of their education and develop a growth mindset.',
    focusAreas: [
      'Advanced academics with focus on conceptual clarity',
      'Science laboratory experiments and practical learning',
      'Mathematics enrichment and problem-solving',
      'Language proficiency in English and Hindi',
      'Social studies with real-world connections',
      'Career awareness and goal-setting guidance',
    ],
    image: middleSchoolStudents,
    imageAlt: 'Middle school students walking confidently with books',
  },
  {
    title: 'Daycare',
    subtitle: 'Ages 1.5 – 3 Years',
    description:
      'Our Daycare facility provides a warm, secure, and nurturing space for toddlers. With trained caregivers and age-appropriate activities, children are gently introduced to a structured routine in a home-like environment, ensuring their comfort and well-being.',
    focusAreas: [
      'Safe and hygienic child-friendly environment',
      'Trained and caring staff with low child-to-caregiver ratio',
      'Age-appropriate sensory and motor activities',
      'Introduction to basic social interaction and sharing',
      'Nutritious meals and supervised rest periods',
      'Regular parent communication and updates',
    ],
    image: daycareToddlers,
    imageAlt: 'Teacher caring for toddlers in daycare facility',
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

export default function AcademicStages() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="Our Academics"
          title="Academic Programs"
          subtitle="From Playgroup to Class VIII, we offer comprehensive programs tailored to every stage of your child's development."
          align="center"
        />

        <div className="space-y-16 md:space-y-24 mt-12">
          {stages.map((stage, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={stage.title}
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
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase text-teal bg-teal/10 px-3 py-1 rounded-full mb-4">
                    {stage.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading text-heading mb-4">
                    {stage.title}
                  </h3>
                  <p className="text-body leading-relaxed mb-6">
                    {stage.description}
                  </p>

                  {/* Focus Areas */}
                  <div>
                    <h4 className="text-sm font-semibold text-heading uppercase tracking-wider mb-3">
                      Focus Areas
                    </h4>
                    <ul className="space-y-2.5">
                      {stage.focusAreas.map((area, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-body"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                          <span className="leading-relaxed">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
                    src={stage.image}
                    alt={stage.imageAlt}
                    className="w-full rounded-2xl shadow-lg"
                  />
                  {/* Decorative element */}
                  <div
                    className={`absolute w-20 h-20 rounded-2xl -z-10 hidden md:block ${
                      isReversed
                        ? '-bottom-3 -left-3 bg-teal/15'
                        : '-bottom-3 -right-3 bg-gold/15'
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
