// components/ProjectCarousel.js
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const ProjectCarousel = () => {
  const projects = [
    {
      title: 'Myster Rostering App',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu morbi placerat.',
      imageUrl: "/lagos.jpg", // Replace with your image paths
    },
    {
      title: 'RecyclePI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu morbi placerat.',
      imageUrl: "/lagos.jpg",
    },
    {
      title: 'Boxby',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu morbi placerat.',
      imageUrl: "/lagos.jpg",
    },
    {
      title: 'RMIT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu morbi placerat.',
      imageUrl: "/lagos.jpg",
    },
    // Add more items as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  // Update visible items based on screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1); // Mobile
      } else if (window.innerWidth < 768) {
        setVisibleItems(1); // Small mobile
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2); // Tablet
      } else if (window.innerWidth < 1280) {
        setVisibleItems(2); // Small desktop
      } else {
        setVisibleItems(3); // Large desktop
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []); 

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - visibleItems < 0 ? 0 : prevIndex - visibleItems));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleItems >= projects.length ? prevIndex : prevIndex + visibleItems
    );
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto px-2 sm:px-4 md:px-6 lg:px-0">
      <div className="flex overflow-hidden">
        {projects.slice(currentIndex, currentIndex + visibleItems).map((project, index) => (
          <div key={index} className={`flex-shrink-0 p-1 sm:p-2 md:p-3 lg:p-4 ${
            visibleItems === 1 ? 'w-full' : 
            visibleItems === 2 ? 'w-1/2' : 'w-1/3'
          }`}>
            <div className='h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full'>
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={300} height={300}
                className="rounded-lg mx-auto w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 sm:mt-4 text-center">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base lg:text-lg">{project.description}</p>
              <a href="#" className="text-blue-500 font-medium mt-2 sm:mt-4 inline-block hover:underline text-xs sm:text-sm md:text-base lg:text-lg">
                VIEW PROJECT
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/3 left-1 sm:left-2 md:left-4 lg:left-0 transform -translate-y-1/2 p-1 sm:p-2 bg-white rounded-full shadow-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex === 0}
      >
        <FaChevronLeft className="text-sm sm:text-base" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/3 right-1 sm:right-2 md:right-4 lg:right-0 transform -translate-y-1/2 p-1 sm:p-2 bg-white rounded-full shadow-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex + visibleItems >= projects.length}
      >
        <FaChevronRight className="text-sm sm:text-base" />
      </button>
    </div>
  );
};

export default ProjectCarousel;
