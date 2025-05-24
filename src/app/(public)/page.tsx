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
            {/* Introduce team */}
            <IntroSection />
            <StatsSection />
          </div>
        </section>

        {/* Projects Sections */}
        <section id="services" className="bg-black">
          <WellnessPage />
        </section>

        {/* Services Section */}
        <section id="information">
          <PortfolioShowcase />
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

function StyleSheet() {
  return (
    <style>{`
      html {
          scroll-snap-type: y mandatory;
      }

      .img-container {
          height: 100vh;
          scroll-snap-align: start;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
      }

      .img-container > div {
          width: 300px;
          height: 400px;
          margin: 20px;
          background: #f5f5f5;
          overflow: hidden;
      }

      .img-container img {
          width: 300px;
          height: 400px;
      }

      @media (max-width: 500px) {
          .img-container > div {
              width: 150px;
              height: 200px;
          }

          .img-container img {
              width: 150px;
              height: 200px;
          }
      }

      .img-container h2 {
          color: #8df0cc;
          margin: 0;
          font-family: "Azeret Mono", monospace;
          font-size: 50px;
          font-weight: 700;
          letter-spacing: -3px;
          line-height: 1.2;
          position: absolute;
          display: inline-block;
          top: calc(50% - 25px);
          left: calc(50% + 120px);
      }

      .progress {
          position: fixed;
          left: 0;
          right: 0;
          height: 5px;
          background: #8df0cc;
          bottom: 50px;
          transform: scaleX(0);
      }
  `}</style>
  );
}
