// src/components/layout/DefaultLayout/index.tsx
import { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import TestNavbar from './test.nav';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
