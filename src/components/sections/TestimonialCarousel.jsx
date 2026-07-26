import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import {
  testimonialAvatar1,
  testimonialAvatar2,
  testimonialAvatar3,
  testimonialAvatar4,
  testimonialAvatar5,
} from '../../data/images';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    relation: 'Parent of Aarav, Class V',
    quote: 'Excellence International School has truly transformed my son. The teachers are incredibly supportive, and the focus on both academics and extracurricular activities is exactly what we were looking for in a school.',
    rating: 5,
    avatar: testimonialAvatar1,
  },
  {
    id: 2,
    name: 'Priya Gupta',
    relation: 'Parent of Siya, Class II',
    quote: 'The concept-based learning approach is wonderful. My daughter now understands the "why" behind things rather than just memorizing facts. We are very happy with her progress.',
    rating: 5,
    avatar: testimonialAvatar2,
  },
  {
    id: 3,
    name: 'Vikram Singh',
    relation: 'Parent of Rohan, Class VIII',
    quote: 'I am highly impressed with the school\'s infrastructure and the dedication of the staff. The discipline and moral values instilled in the students are commendable. Best school in Aligarh!',
    rating: 5,
    avatar: testimonialAvatar3,
  },
  {
    id: 4,
    name: 'Neha Verma',
    relation: 'Parent of Kabir, LKG',
    quote: 'The Pre-Primary section is so vibrant and engaging. My child loves going to school every day. The teachers are very caring and pay attention to every single child.',
    rating: 5,
    avatar: testimonialAvatar4,
  },
  {
    id: 5,
    name: 'Amit Patel',
    relation: 'Parent of Ananya, Class VI',
    quote: 'From academics to sports, the school provides a perfect balance. The communication from the management is excellent, and we feel very involved in our child\'s educational journey.',
    rating: 5,
    avatar: testimonialAvatar5,
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Handle responsive cards to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, testimonials.length - cardsToShow) : prevIndex - 1
    );
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, cardsToShow]);

  // Calculate visible testimonials
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsToShow
  );

  // If we're near the end and need to wrap around to fill the view
  if (visibleTestimonials.length < cardsToShow) {
    visibleTestimonials.push(
      ...testimonials.slice(0, cardsToShow - visibleTestimonials.length)
    );
  }

  return (
    <section className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="section-container relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Parents Say"
          subtitle="Hear from our community about their experience at Excellence International School."
          align="center"
        />

        <div className="relative mt-12 px-4 md:px-12">
          {/* Carousel Track */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}`} // Force re-render for animation
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative"
                >
                  <Quote
                    size={40}
                    className="absolute top-6 right-6 text-gray-100 rotate-180"
                  />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-gold text-gold"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-body leading-relaxed mb-8 relative z-10 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-heading text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-body/70 mt-0.5">
                        {testimonial.relation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-heading hover:text-teal hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-teal/30 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-heading hover:text-teal hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-teal/30 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-teal'
                  : 'w-2 bg-teal/20 hover:bg-teal/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
