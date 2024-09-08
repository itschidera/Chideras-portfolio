// components/ProjectCarousel.js
import React, { useState } from 'react';
import img1 from "@/img/lagos.jpg"

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const ProjectCarousel = () => {
  const projects = [
    {
      title: 'Myster Rostering App',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu morbi placerat.',
      imageUrl: img1, // Replace with your image paths
    },
    {
      title: 'RecyclePI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu morbi placerat.',
      imageUrl: img1,
    },
    {
      title: 'Boxby',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu morbi placerat.',
      imageUrl: img1,
    },
    {
      title: 'RMIT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu morbi placerat.',
      imageUrl: img1,
    },
    // Add more items as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 3; 

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - visibleItems < 0 ? 0 : prevIndex - visibleItems));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleItems >= projects.length ? prevIndex : prevIndex + visibleItems
    );
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto">
      <div className="flex overflow-hidden">
        {projects.slice(currentIndex, currentIndex + visibleItems).map((project, index) => (
          <div key={index} className="flex-shrink-0 w-1/3 p-4">
            <div className='h-[400px] w-full'>
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={300} height={300}
              className="rounded-lg mx-auto"
            />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a href="#" className="text-blue-500 font-medium mt-4 inline-block hover:underline">
                VIEW PROJECT
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/3 left-0 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
        disabled={currentIndex === 0}
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/3 right-0 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
        disabled={currentIndex + visibleItems >= projects.length}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ProjectCarousel;
