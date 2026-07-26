import HeroSection from '../components/sections/HeroSection';
import IntroRow from '../components/sections/IntroRow';
import AboutSection from '../components/sections/AboutSection';
import FloatingButtons from '../components/common/FloatingButtons';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroRow />
      <AboutSection />
      {/* Remaining homepage sections will be added in Phases 4–7 */}
      <FloatingButtons />
    </>
  );
}
