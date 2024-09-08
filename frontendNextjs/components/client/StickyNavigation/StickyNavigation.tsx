import React, { useEffect, useState } from 'react';

const sections = ['profile', 'about', 'projects', 'contact'];

const StickyNavigation = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) =>
        document.getElementById(section.toLowerCase())
      );

      console.log(sectionElements, 'section elements')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = sectionElements.indexOf(entry.target);
              setCurrentSection(index);
              console.log(index, 'index')
            }
          });
        },
        { threshold: 0.5 }
      );

      sectionElements.forEach((el) => el && observer.observe(el));

      return () => observer.disconnect();
    };

    handleScroll();
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-4 bg-white shadow-md">
      {currentSection === 0 && (
        <div className="absolute left-4 flex items-center bottom-4">
          <span className="text-xs font-semibold transform -rotate-90 whitespace-nowrap">SCROLL DOWN</span>
          <div className="h-16 border-l border-black ml-2"></div>
        </div>
      )}
      <div className="w-full flex justify-center">
        {currentSection < sections.length - 1 && (
          <div className="text-center">
            <p className=" text-xs font-semibold uppercase">{sections[currentSection + 1]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StickyNavigation;
