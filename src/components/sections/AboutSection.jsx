import { motion } from 'framer-motion';
import { Eye, Target, CheckCircle } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { aboutImage, visionMissionImage } from '../../data/images';

const missionPoints = [
  'Provide a safe, inclusive, and stimulating learning environment for all students',
  'Deliver a well-rounded curriculum that balances academics with co-curricular activities',
  'Foster critical thinking, creativity, and problem-solving skills',
  'Instill strong moral values, discipline, and a sense of social responsibility',
  'Encourage every child to discover and develop their unique talents and potential',
  'Build a strong foundation for lifelong learning and personal growth',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-offwhite">
      <div className="section-container">
        {/* About Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <SectionHeading
              eyebrow="About Us"
              title="Excellence International School, Aligarh"
              subtitle="One of the leading educational institutions in Aligarh, Uttar Pradesh, dedicated to providing quality education and holistic development since its establishment."
            />
            <div className="space-y-4 text-body leading-relaxed">
              <p>
                Excellence International School was founded with a clear vision — to
                create an educational institution that nurtures young minds and prepares
                them for a rapidly changing world. Located in the heart of Aligarh, our
                school offers a warm, supportive environment where every child is
                encouraged to explore, learn, and grow.
              </p>
              <p>
                Our experienced and dedicated faculty members employ modern teaching
                methodologies, including concept-based and activity-driven learning, to
                ensure that education goes beyond rote memorization. From Playgroup to
                Class VIII, we provide a comprehensive curriculum that lays a strong
                academic foundation while fostering creativity, critical thinking, and
                character development.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImage}
              alt="Excellence International School campus and students"
              className="w-full rounded-2xl shadow-lg"
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-2xl -z-10 hidden md:block" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-teal/20 rounded-2xl -z-10 hidden md:block" />
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Vision */}
          <motion.div
            className="card p-8 md:p-10 border border-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center">
                <Eye size={28} className="text-teal" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-heading">
                Our Vision
              </h3>
            </div>
            <p className="text-body leading-relaxed text-lg">
              To be a premier educational institution that nurtures every child into a
              confident, compassionate, and responsible global citizen — empowered with
              knowledge, values, and the skills to make a positive difference in the
              world.
            </p>
            <div className="mt-6">
              <img
                src={visionMissionImage}
                alt="Vision and mission of Excellence International School"
                className="w-full rounded-xl"
              />
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="card p-8 md:p-10 border border-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={0.15}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                <Target size={28} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-heading">
                Our Mission
              </h3>
            </div>
            <p className="text-body leading-relaxed mb-6">
              Our mission is to provide an outstanding educational experience that
              develops the whole child — intellectually, socially, emotionally, and
              physically.
            </p>
            <ul className="space-y-4">
              {missionPoints.map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={index * 0.08}
                >
                  <CheckCircle
                    size={20}
                    className="text-teal shrink-0 mt-0.5"
                  />
                  <span className="text-body leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
