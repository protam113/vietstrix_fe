import AnimationComponents from '@/components/animation/Animaton';
import ScrollProgressBar from '@/components/container/scroll-progress-bar';
import { StatsSection } from '@/components/design/StatsSection';
import { ContactForm } from '@/components/form/ContactForm';
import Hero from '@/components/layouts/default-layout/hero';
import PortfolioShowcase from '@/components/layouts/default-layout/home/caseStudies';
import NomineesPage from '@/components/layouts/default-layout/home/slide-carousel';
import TextMarquee from '@/components/layouts/default-layout/home/TitleMarquee';
import WhySection from '@/components/pages/public/home/why.section';
import IntroSection from '@/components/pages/public/introSection';
import WellnessPage from '@/components/pages/public/WellnessPage';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const sections = [
    { id: 'about', label: 'Who we are?', color: '#013162' },
    { id: 'information', label: 'What You Should Know', color: '#6b7280' },
    { id: 'services', label: 'What we do.', color: '#6b7280' },
    { id: 'why', label: 'Why Choose Me?', color: '#6b7280' },
    { id: 'contact', label: 'Let’s Connect', color: '#6b7280' },
  ];
  return (
    <main>
      <Hero />
      <div className="bg-white">
        {/* Introduce Team */}
        <section id="about">
          <div className="min-h-screen">
            <IntroSection />

            <StatsSection />
          </div>
        </section>

        <Separator className="my-4" />
        {/* Projects Sections */}
        <section id="information">
          <PortfolioShowcase />
        </section>

        <Separator className="my-4" />

        {/* Services Section */}
        <section id="services">
          <WellnessPage />
        </section>

        <Separator className="my-4" />

        {/* Wgy choose Us */}
        <section id="why">
          <div className="min-h-screen">
            <WhySection />
          </div>
        </section>
        <Separator className="my-4" />

        {/* Contact */}
        <section id="contact">
          <TextMarquee />
          <ContactForm />
        </section>
      </div>
      <ScrollProgressBar sections={sections} />
      <section id="hidden-section">
        <NomineesPage />
      </section>
    </main>
  );
}
// Hero, About , Services, Portfolio, Contact,blog ,Why pick us.
