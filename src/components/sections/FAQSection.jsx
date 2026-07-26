import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const faqs = [
  {
    question: 'What is the admission procedure at Excellence International School?',
    answer: 'Our admission process starts with filling out the Enquiry Form online or at the school office. This is followed by an interaction session with the child and parents. For Class I and above, a basic proficiency test may be conducted. Selection is based on the availability of seats and meeting the age criteria.',
  },
  {
    question: 'What is the student-to-teacher ratio?',
    answer: 'We maintain a healthy student-to-teacher ratio of 25:1 in Primary and Middle School, and 15:1 in Pre-Primary sections. This ensures that every child receives personalized attention and support from our educators.',
  },
  {
    question: 'Does the school provide transportation facilities?',
    answer: 'Yes, we provide safe and secure transportation facilities covering major routes in and around Aligarh. Our buses are equipped with GPS tracking, CCTV cameras, and have female attendants for the safety of students.',
  },
  {
    question: 'What co-curricular activities are offered?',
    answer: 'We offer a wide range of co-curricular activities including various sports (cricket, football, basketball, athletics), performing arts (music, dance, drama), fine arts, yoga, and several clubs (Science, Eco, Literary) to ensure holistic development.',
  },
  {
    question: 'How does the school ensure the safety of students?',
    answer: 'The safety of our students is paramount. Our campus is fully secured with a boundary wall and 24/7 CCTV surveillance. We have trained security personnel at all gates, and a strict visitor management system is in place. No student is allowed to leave the premises without authorized personnel or parents.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            align="center"
          />

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`border rounded-xl transition-colors duration-300 ${
                    isOpen ? 'border-teal/30 bg-teal/5' : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/50 rounded-xl"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg font-bold font-heading text-heading pr-8">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-teal text-white' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 md:p-6 pt-0 text-body leading-relaxed border-t border-teal/10 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
