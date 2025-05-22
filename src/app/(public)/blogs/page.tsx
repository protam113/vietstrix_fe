import Container from '@/components/container/container';
import EnhancedHeroBanner from '@/components/container/enhanced-hero-banner';
import SectionHeader from '@/components/design/SectionHeader';
import BlogGrid from '@/components/pages/public/blog/blogList';

import SEO from '@/components/SEO';

const Page = () => {
  return (
    <>
      <SEO
        title="Blogs"
        description="Hust4L brings cutting-edge web design and development services. Fast, sleek, and built for the future!"
      />

      <main>
        <EnhancedHeroBanner
          heading="Empowering Your Vision, Elevating Your Brand"
          subheading="Custom-built websites designed to drive growth and make an impact."
          title="Our Blogs"
        />
        <Container>
          <BlogGrid />
        </Container>
      </main>
    </>
  );
};

export default Page;
