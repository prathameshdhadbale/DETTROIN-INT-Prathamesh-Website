import HeroSection from '../components/sections/HeroSection';
import IntroRow from '../components/sections/IntroRow';
import FloatingButtons from '../components/common/FloatingButtons';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroRow />
      {/* Remaining homepage sections will be added in Phases 3–7 */}
      <FloatingButtons />
    </>
  );
}
