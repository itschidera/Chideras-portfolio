'use client'

import React, { useState, useEffect } from 'react';

const sections = ['1', '2', '3', '4'];

const SectionNavigator = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const sectionElements = sections.map(section => document.getElementById(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const activeIndex = sectionElements.indexOf(entry.target as HTMLElement);
            setActiveSection(Number(activeIndex));
            console.log(typeof activeIndex, 'index')
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionElements.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);
console.log(activeSection, 'active section')
  return (
    <div className="hidden md:flex fixed left-4 top-1/2 transform -translate-y-1/2 flex-col space-y-4">
      {sections.map((section, index) => (
        <div
          key={index}
          id={String(index)}
          className={`h-1  bg-gray-400 transition-all duration-300 ${isClient && activeSection === Number(index) ? 'w-16 bg-black' : 'w-8'}`}
        />
      ))}
    </div>
  );
};

export default SectionNavigator;
