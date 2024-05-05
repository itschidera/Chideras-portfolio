"use client"
import React, { useEffect, useRef } from 'react'
import img1 from "@/img/lagos.jpg"
import Image from 'next/image'
import Sketch from "@/utils/app.js";
import gsap from "gsap";


 const Page = () => {
  let effectWrapper = useRef(null);

  const init = () => {
    return new Sketch({
      dom: document.getElementById("container"),
    });
  }
  useEffect(() => {
    init()
  }, [])
  
  return (
    <div>
    <main>
      <div data-scroll>
      <div>
      <section className='bg-white h-screen' id="1">
        <div className="flex mt-[30%]">
          <div className='w-[55%]'>
            <h1 className='text-5xl font-bold mb-4'>From Web to Mobile:<br></br> Crafting Digital Delights</h1>
            <div>
              <p className='text-sm mb-2'>Transforming Your Vision into Stunning Mobile Experiences</p>
              <p className='text-sm'>With a passion for frontend development, I specialize in translating your ideas into sleek and intuitive mobile apps. From elegant designs to seamless user experiences, I bring creativity and precision to every project, ensuring your app shines in the palm of every user's hand.</p>
            </div>
          </div>
          <div id="effectWrapper"
                  ref={effectWrapper}>
                    <div id="effect">
                      Louisian
          <Image className="content__img opacity-0" src={img1} alt="img1"id="img" width={400} height={400}/>

                    </div>
          </div>
        </div>
      </section>
      <section className='bg-slate-400 h-screen' id="2"></section>
      <section className='bg-white h-screen ' id="3"></section>
      <section className='bg-slate-800 h-screen' id="4"></section>

    </div>

      </div>
   
    </main>
    </div>

  )
}
export default Page