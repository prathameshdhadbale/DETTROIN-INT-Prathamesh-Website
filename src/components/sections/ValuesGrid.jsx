import { motion } from 'framer-motion';
import { Heart, Scale, Shield, Clock, HandHeart, CheckSquare } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const values = [
  {
    icon: Shield,
    title: 'Honesty',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Scale,
    title: 'Integrity',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: HandHeart,
    title: 'Respect',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Clock,
    title: 'Discipline',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    icon: Heart,
    title: 'Compassion',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: CheckSquare,
    title: 'Responsibility',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function ValuesGrid() {
  return (
    <section className="py-16 md:py-24 bg-offwhite">
      <div className="section-container">
        <SectionHeading
          eyebrow="Core Principles"
          title="Value-Based Education"
          subtitle="We believe that character building is as important as academic excellence. Our core values shape the culture of our school."
          align="center"
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-12 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                className={`${value.bgColor} rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 shadow-sm`}
                variants={itemVariants}
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                  <Icon size={28} className={value.iconColor} />
                </div>
                <h3 className="text-lg md:text-xl font-bold font-heading text-heading">
                  {value.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
