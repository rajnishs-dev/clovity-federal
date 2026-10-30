'use client';

import { useLayoutEffect } from 'react';
import { initAnimations } from '@/lib/animations';
import { initSite } from '@/lib/site-init';

// Runs the page behavior and scroll animations once the page's markup is in place, and undoes them before the
// next page replaces it. A layout effect, so the cleanup runs before React removes the old page's DOM.
export default function PageScripts() {
  useLayoutEffect(() => {
    // Same order as the static site: animations.js ran before main.js
    const stopAnimations = initAnimations();
    const stopSite = initSite();
    return () => {
      stopSite();
      stopAnimations();
    };
  }, []);
  return null;
}
