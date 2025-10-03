"use client"

import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ProjectCarousel from '@/components/client/ProjectCarousel/ProjectCarousel';
import StickyNavigation from '@/components/client/StickyNavigation/StickyNavigation';

const HomePage = () => {
  return (
    <main>
      <div data-scroll>
        <div>
          <section className='bg-white pt-[10%] px-4 sm:px-6 md:px-8 lg:px-0' id="1">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className='w-full lg:w-[55%] text-center lg:text-left'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>From Web to Mobile:<br></br> Crafting Digital Delights</h1>
                <div>
                  <p className='text-xs sm:text-sm mb-2'>Transforming Your Vision into Stunning Mobile Experiences</p>
                  <p className='text-xs sm:text-sm'>With a passion for frontend development, I specialize in translating your ideas into sleek and intuitive mobile apps. From elegant designs to seamless user experiences, I bring creativity and precision to every project, ensuring your app shines in the palm of every user's hand.</p>
                </div>
              </div>
              <div id="effectWrapper" className="w-full lg:w-auto">
                <div id="effect" className="flex justify-center lg:justify-end">
                  <Image className="content__img w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover" src="/chidera.JPG" alt="img1" id="img" width={400} height={400} />
                </div>
              </div>
            </div>
          </section>
          
          <section id="2" className="min-h-screen flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-10 bg-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4">
              I'm a Toronto-based software developer with a passion for crafting user-centric mobile and web applications. 
              With expertise in JavaScript, Swift, and Kotlin, I bring a meticulous approach to building elegant solutions for iOS and Android platforms.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4">
              I thrive on solving complex problems and have a proven track record of delivering high-quality, responsive apps that meet user needs. 
              My experience spans from integrating APIs to optimizing performance, always with a focus on enhancing the overall user experience.
            </p>

            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-2">Skills</h3>
            <ul className="list-none space-y-1 text-xs sm:text-sm md:text-base lg:text-lg">
              <li>• Mobile Development (iOS & Android)</li>
              <li>• JavaScript, Swift, Kotlin</li>
              <li>• React, Next.js, Node.js</li>
              <li>• API Integration & Performance Optimization</li>
            </ul>
          </section>
          
          <section className='bg-white min-h-screen pt-16 sm:pt-20 px-4 sm:px-6 md:px-8 lg:px-0' id="3">
            <div className="max-w-6xl mx-auto">
              <h2 className='font-medium text-base sm:text-lg md:text-xl lg:text-2xl mb-4'>Projects</h2>
              <p className='w-full sm:w-4/5 md:w-3/5 lg:w-2/4 text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit feugiat semper pellentesque amet. Nunc.</p>
              <ProjectCarousel />
            </div>
          </section>
          
          <section id="4" className="min-h-screen flex flex-col items-center lg:items-start pt-16 sm:pt-20 md:pt-32 lg:pt-40 px-4 sm:px-6 md:px-8 lg:px-0">
            <div className="max-w-6xl mx-auto w-full">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left">Contact!</h2>
              <p className="mb-4 text-sm sm:text-base md:text-lg lg:text-xl text-center lg:text-left">Want to build something together? Feel free to contact me here or send me an email.</p>
              <a href="mailto:chideranwankwo31@gmail.com" className="text-blue-500 underline mb-4 block text-center lg:text-left text-sm sm:text-base md:text-lg">chideranwankwo31@gmail.com</a>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl">
                  <FaGithub className="text-lg sm:text-xl hover:text-gray-700 transition-colors" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl">
                  <FaLinkedin className="text-lg sm:text-xl hover:text-blue-700 transition-colors" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl">
                  <FaTwitter className="text-lg sm:text-xl hover:text-blue-500 transition-colors" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <StickyNavigation />
    </main>
  )
}

export default HomePage;
