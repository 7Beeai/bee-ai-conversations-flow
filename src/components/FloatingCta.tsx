
import { useEffect, useState } from 'react';
import DemoButton from './DemoButton';

const FloatingCta = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 shadow-lg rounded-full">
      <DemoButton className="rounded-full px-6" />
    </div>
  );
};

export default FloatingCta;
