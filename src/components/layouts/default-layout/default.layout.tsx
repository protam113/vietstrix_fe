// src/components/layout/DefaultLayout/index.tsx
import { ReactNode } from 'react';
import Navbar, { TopHeader } from './navbar';
import Footer from './footer';
import TestNavbar from './test.nav';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="relative">
      {/* <TopHeader /> */}
      {/* <TestNavbar /> */}
      <Navbar />
      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
