import { motion } from 'framer-motion';
import { GraduationCap, Puzzle, Handshake, Brain, Palette, Users } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const facilities = [
  {
    icon: GraduationCap,
    title: 'Smart Classrooms',
    description: 'Tech-enabled classrooms that make learning interactive, engaging, and visually appealing for digital-age students.',
  },
  {
    icon: Puzzle,
    title: 'Well-Equipped Labs',
    description: 'Modern science and computer laboratories where students can perform experiments and learn through hands-on practice.',
  },
  {
    icon: Handshake,
    title: 'Extensive Library',
    description: 'A quiet, resourceful space stocked with thousands of books, journals, and digital resources to foster a love for reading.',
  },
  {
    icon: Brain,
    title: 'Sports Complex',
    description: 'Spacious playgrounds and courts for various indoor and outdoor sports, promoting physical fitness and team spirit.',
  },
  {
    icon: Palette,
    title: 'Art & Craft Studios',
    description: 'Dedicated spaces for painting, sculpture, and crafts where students can unleash their creativity and imagination.',
  },
  {
    icon: Users,
    title: 'Auditorium',
    description: 'A multi-purpose hall equipped with modern audio-visual systems for school assemblies, cultural events, and workshops.',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function InfrastructureGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="Campus & Facilities"
          title="Modern Infrastructure"
          subtitle="Our campus is designed to provide a safe, stimulating, and comfortable environment equipped with state-of-the-art facilities."
          align="center"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={facility.title}
                className="card p-8 border border-gray-100 group hover:border-teal/30 transition-colors"
                variants={itemVariants}
              >
                <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading text-heading mb-3">
                  {facility.title}
                </h3>
                <p className="text-body leading-relaxed text-sm">
                  {facility.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
