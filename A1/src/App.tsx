import BlogSection from './pages/BlogSection';
import BrandSection from './pages/BrandSection';
import CategoriesSection from './pages/CategoriesSection';
import DestinationSection from './pages/DestinationSection';
import FooterSection from './pages/FooterSection';
import GallerySection from './pages/GallerySection';
import HeaderSection from './pages/HeaderSection';
import HeroSection from './pages/HeroSection';
import PlanSection from './pages/PlanSection';
import PopularDestination from './pages/PopularDestination';
import StatsSection from './pages/StatsSection';
import TestimonialSection from './pages/TestimonialSection';
import TourGuideSection from './pages/TourGuideSection';

function App() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <CategoriesSection />
      <DestinationSection />
      <PlanSection />
      <PopularDestination />
      <GallerySection />
      <StatsSection />
      <TourGuideSection />
      <TestimonialSection />
      <BrandSection />
      <BlogSection />
      <FooterSection />
    </>
  );
}

export default App;
