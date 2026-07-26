import HeroSection from '../components/sections/HeroSection';
import IntroRow from '../components/sections/IntroRow';
import AboutSection from '../components/sections/AboutSection';
import AcademicStages from '../components/sections/AcademicStages';
import WhyUsSection from '../components/sections/WhyUsSection';
import HolisticDevelopment from '../components/sections/HolisticDevelopment';
import FloatingButtons from '../components/common/FloatingButtons';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroRow />
      <AboutSection />
      <AcademicStages />
      <WhyUsSection />
      <HolisticDevelopment />
      {/* Remaining homepage sections will be added in Phases 6–7 */}
      <FloatingButtons />
    </>
  );
}
