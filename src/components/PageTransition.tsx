import React, { useEffect, useState } from 'react';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-1000 ease-out ${
      isLoaded 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'
    }`}>
      {children}
    </div>
  );
};

export default PageTransition;