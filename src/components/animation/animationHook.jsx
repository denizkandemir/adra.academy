// useFadeInOnScroll.js
import { useEffect } from 'react';

const useFadeInOnScroll = (selector = '.fade-in') => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing once the element is shown
          }
        });
      },
      { threshold: 0.15 } // Adjust threshold to control trigger point
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector]);
};

export default useFadeInOnScroll;
