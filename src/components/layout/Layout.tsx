import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    reveals.forEach((element) => {
      observer.observe(element);
    });

    // Re-check after a short delay for dynamic content
    const timeoutId = setTimeout(() => {
      const newReveals = document.querySelectorAll('.reveal:not(.active)');
      newReveals.forEach((element) => {
        observer.observe(element);
      });
    }, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [pathname]); // Re-run when route changes

  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-primary/30 selection:text-primary">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
