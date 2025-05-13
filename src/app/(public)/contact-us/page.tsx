import EnhancedHeroBanner from '@/components/container/enhanced-hero-banner';
import { ContactForm } from '@/components/form/ContactForm';
import SEO from '@/components/SEO';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Reach out to VietStrix, a Gen Z team passionate about web design and development. Let's build something amazing together!"
      />

      <div>
        <EnhancedHeroBanner
          title="LET'S CONNECT"
          heading="Bring Your Vision to Life"
          subheading="Big ideas? Bold goals? We turn concepts into powerful digital experiences that stand out."
        />

        <div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
