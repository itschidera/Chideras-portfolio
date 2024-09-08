// components/SectionNavigator.js
import React, { useState, useEffect } from 'react';

const sections = ['profile', 'about', 'projects', 'contact'];

const SectionNavigator = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  useEffect(() => {
    const sectionElements = sections.map(section => document.getElementById(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const activeIndex = sectionElements.indexOf(entry.target);
            setActiveSection(activeIndex);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionElements.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`h-1 w-8 bg-gray-400 transition-all duration-300 ${activeSection === index ? 'w-16 bg-black' : ''}`}
        />
      ))}
    </div>
  );
};

export default SectionNavigator;
