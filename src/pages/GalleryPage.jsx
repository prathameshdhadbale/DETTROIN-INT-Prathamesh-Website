import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import {
  galleryEvent1,
  galleryClassroom1,
  gallerySports1,
  galleryArt1,
  galleryCampus1,
  galleryLibrary1,
  galleryLab1,
  galleryAssembly1,
  galleryCultural1,
  galleryComputer1,
  galleryTransport1,
  galleryPlayground1,
} from '../data/images';

const categories = ['All', 'Events', 'Classrooms', 'Activities', 'Campus'];

const galleryItems = [
  { id: 1, category: 'Events', image: galleryEvent1, title: 'Annual Day Event' },
  { id: 2, category: 'Classrooms', image: galleryClassroom1, title: 'Interactive Learning' },
  { id: 3, category: 'Activities', image: gallerySports1, title: 'Sports Day' },
  { id: 4, category: 'Activities', image: galleryArt1, title: 'Art & Craft Exhibition' },
  { id: 5, category: 'Campus', image: galleryCampus1, title: 'School Building' },
  { id: 6, category: 'Campus', image: galleryLibrary1, title: 'Well-Stocked Library' },
  { id: 7, category: 'Classrooms', image: galleryLab1, title: 'Science Laboratory' },
  { id: 8, category: 'Events', image: galleryAssembly1, title: 'Morning Assembly' },
  { id: 9, category: 'Events', image: galleryCultural1, title: 'Cultural Program' },
  { id: 10, category: 'Classrooms', image: galleryComputer1, title: 'Computer Lab' },
  { id: 11, category: 'Campus', image: galleryTransport1, title: 'School Transport' },
  { id: 12, category: 'Campus', image: galleryPlayground1, title: 'Playground' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-offwhite py-12 md:py-20">
      <div className="section-container">
        <SectionHeading
          eyebrow="Glimpses of EIS"
          title="Our Gallery"
          subtitle="Explore the vibrant life and activities at Excellence International School through our photo gallery."
          align="center"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-10 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-navy text-white shadow-md'
                  : 'bg-white text-body hover:bg-gray-100 hover:text-heading'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 aspect-4/3"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <ZoomIn size={32} className="text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                  <h3 className="text-white font-bold text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white font-bold text-xl">{selectedImage.title}</h3>
                <p className="text-white/60 text-sm mt-1">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
