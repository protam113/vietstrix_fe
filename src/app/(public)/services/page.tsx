'use client';

import Container from '@/components/container/container';
import EnhancedHeroBanner from '@/components/container/enhanced-hero-banner';
import ProcessTimeline from '@/components/container/ProcessTimeline';
import ServiceList from '@/components/pages/public/services/servicesList';
import SEO from '@/components/SEO';
import { Separator } from '@radix-ui/react-separator';

export default function Page() {
  return (
    <>
      <SEO
        title="Services"
        description="Reach out to VietStrix, a Gen Z team passionate about web design and development. Let's build something amazing together!"
      />

      <div>
        <EnhancedHeroBanner
          title="LET'S CONNECT"
          heading="Bring Your Vision to Life"
          subheading="Big ideas? Bold goals? We turn concepts into powerful digital experiences that stand out."
        />
        <Container>
          <ServiceList />
          <Separator className="my-4" />

          <ProcessTimeline />
          <Separator className="my-4" />

          {/* <TestimonialsWithGSAP /> */}
        </Container>
      </div>
    </>
  );
}
