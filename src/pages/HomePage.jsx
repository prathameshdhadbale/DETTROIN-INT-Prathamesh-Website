import HeroSection from '../components/sections/HeroSection';
import IntroRow from '../components/sections/IntroRow';
import AboutSection from '../components/sections/AboutSection';
import AcademicStages from '../components/sections/AcademicStages';
import FloatingButtons from '../components/common/FloatingButtons';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroRow />
      <AboutSection />
      <AcademicStages />
      {/* Remaining homepage sections will be added in Phases 5–7 */}
      <FloatingButtons />
    </>
  );
}
