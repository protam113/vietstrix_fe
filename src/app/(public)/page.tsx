import AnimationComponents from '@/components/animation/Animaton';
import FAQSection from '@/components/container/FaQ';
import { StatsSection } from '@/components/design/StatsSection';
import { ContactForm } from '@/components/form/ContactForm';
import Hero from '@/components/layouts/default-layout/hero';
import PortfolioShowcase from '@/components/layouts/default-layout/home/caseStudies';
import Iridescence from '@/components/layouts/default-layout/home/Iridescence';
import NomineesPage from '@/components/layouts/default-layout/home/slide-carousel';
import TechnologyExpertise from '@/components/layouts/default-layout/home/TechnologyExpertise';
import TextMarquee from '@/components/layouts/default-layout/home/TitleMarquee';
import IntroSection from '@/components/pages/public/introSection';
import WellnessPage from '@/components/pages/public/WellnessPage';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main>
      <div className="">
        <Hero />
        <div className="bg-white">
          <div className="min-h-screen">
            <div>
              <IntroSection />
            </div>

            <StatsSection />
          </div>

          <Separator className="my-4" />
          <WellnessPage />

          <Separator className="my-4" />

          <AnimationComponents />
          <Separator className="my-4" />
          <PortfolioShowcase />

          <Separator className="my-4" />

          <TechnologyExpertise />
          <Separator className="my-4" />

          <NomineesPage />
          <Separator className="my-4" />
          {/* <Iridescence /> */}
          <TextMarquee />
          <ContactForm />
          <FAQSection />
        </div>
      </div>
    </main>
  );
}
