import { useEffect, useState } from 'react';

export function useWindowSize() {
  const getSize = (): { width: number; height: number } => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });
  const [size, setSize] = useState<{ width: number; height: number }>(getSize);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    size: size,
    md: size.width >= 768,
    lg: size.width >= 1024,
    xl: size.width >= 1280,
    xxl: size.width >= 1536,
  };
}
