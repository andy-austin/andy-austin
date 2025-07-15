'use client';

import { useEffect } from 'react';

export default function LoadingHandler({ children }) {
  useEffect(() => {
    // Ensure the page is visible after styles have loaded
    const timer = setTimeout(() => {
      document.documentElement.classList.add('wf-active');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return children;
}