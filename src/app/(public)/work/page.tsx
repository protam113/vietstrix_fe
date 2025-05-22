import AnimationComponents from '@/components/animation/Animaton';
import EnhancedHeroBanner from '@/components/container/enhanced-hero-banner';
import IterativeProcess from '@/components/pages/public/work/iterative-process';
import SEO from '@/components/SEO';

export default function Page() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Reach out to VietStrix, a Gen Z team passionate about web design and development. Let's build something amazing together!"
      />

      <div>
        <EnhancedHeroBanner
          title="How do we work?"
          heading="Bring Your Vision to Life"
          subheading="Big ideas? Bold goals? We turn concepts into powerful digital experiences that stand out."
        />

        <main>
          <IterativeProcess />
          <AnimationComponents />
        </main>
      </div>
    </>
  );
}
