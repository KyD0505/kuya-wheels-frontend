import { useCallback } from 'react';

const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (!!section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollToSection;
};

export default useScrollToSection;
