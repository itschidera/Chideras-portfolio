"use client"

import React, { useEffect, useRef } from 'react'
import img1 from "@/img/chidera.jpg"
import Image from 'next/image'
import Sketch from "@/utils/app.js";
import gsap from "gsap";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ProjectCarousel from '@/components/client/ProjectCarousel/ProjectCarousel';
import StickyNavigation from '@/components/client/StickyNavigation/StickyNavigation';


 const Page = () => {

  
  return (
    <div>
    <main>
      <div data-scroll>
      <div>
      <section className='bg-white' id="profile">
        <div className="flex items-center justify-between mt-[10%]">
          <div className='w-[55%]'>
            <h1 className='text-5xl font-bold mb-4'>From Web to Mobile:<br></br> Crafting Digital Delights</h1>
            <div>
              <p className='text-sm mb-2'>Transforming Your Vision into Stunning Mobile Experiences</p>
              <p className='text-sm'>With a passion for frontend development, I specialize in translating your ideas into sleek and intuitive mobile apps. From elegant designs to seamless user experiences, I bring creativity and precision to every project, ensuring your app shines in the palm of every user's hand.</p>
            </div>
          </div>
          <div id="effectWrapper"
                  >
                    <div id="effect">
          <Image className="content__img  " src={img1} alt="img1"id="img" width={400} height={400}/>

                    </div>
          </div>
        </div>
      </section>
      <section id="about" className="min-h-screen flex flex-col justify-center p-10 bg-white">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg mb-4">
        I’m a Toronto-based software developer with a passion for crafting user-centric mobile and web applications. 
        With expertise in JavaScript, Swift, and Kotlin, I bring a meticulous approach to building elegant solutions for iOS and Android platforms.
      </p>
      <p className="text-lg mb-4">
        I thrive on solving complex problems and have a proven track record of delivering high-quality, responsive apps that meet user needs. 
        My experience spans from integrating APIs to optimizing performance, always with a focus on enhancing the overall user experience.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Skills</h3>
      <ul className="list-none space-y-1">
        <li>• Mobile Development (iOS & Android)</li>
        <li>• JavaScript, Swift, Kotlin</li>
        <li>• React, Next.js, Node.js</li>
        <li>• API Integration & Performance Optimization</li>
      </ul>
    </section>
      <section className='bg-white h-screen pt-20' id="projects">
      <h2 className='font-medium text-xl'>Project</h2>
        <p className='w-2/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit feugiat semper pellentesque amet. Nunc.</p>
        <ProjectCarousel />
      </section>
      <section id="contact" className="min-h-screen flex flex-col  items-start pt-40">
      <h2 className="text-3xl font-bold mb-4">Contact!</h2>
      <p className="mb-4 text-lg">Want to build something together? Feel free to contact me here or send me an email.</p>
      <a href="mailto:chideranwankwo31@gmail.com" className="text-blue-500 underline mb-4">chideranwankwo31@gmail.com</a>
      <div className="flex space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xl">
        <FaGithub className="text-xl hover:text-gray-700 transition-colors" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl">
        <FaLinkedin className="text-xl hover:text-blue-700 transition-colors" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl">
        <FaTwitter className="text-xl hover:text-blue-500 transition-colors" />
        </a>
      </div>
    </section>
    </div>

      </div>
   
    </main>
    <StickyNavigation />
    </div>

  )
}
export default Page