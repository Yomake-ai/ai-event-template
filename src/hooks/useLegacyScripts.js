import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LEGACY_SCRIPTS = [
  '/js/designesia.js',
  '/js/countdown-custom.js',
  '/js/custom-marquee.js',
  '/js/swiper.js',
  '/js/custom-swiper-1.js',
  '/js/validation-contact.js',
];

const loadScript = (src) =>
  new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.dataset.legacyReload = 'true';
    script.onload = () => {
      script.remove();
      resolve();
    };
    script.onerror = () => {
      console.warn(`Failed to reload legacy script: ${src}`);
      script.remove();
      resolve();
    };
    document.body.appendChild(script);
  });

export const useLegacyScripts = () => {
  const location = useLocation();

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      for (const src of LEGACY_SCRIPTS) {
        if (cancelled) {
          return;
        }
        await loadScript(src);
      }
      if (!cancelled) {
        window.dispatchEvent(new Event('load'));
        window.dispatchEvent(new Event('resize'));
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [location.pathname]);
};
