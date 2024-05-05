'use client'

import { Navigation, TopNavigation } from "@/components/client"
import { portfolioRoutes, topNavlinks } from "@/data"
import { ReactNode, useEffect, useRef } from "react"
import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from "gsap"

interface LenisRef {
    lenis?: {
        raf: (time: number) => void;
    };
}
const Layout =  ({ children }: { children: ReactNode }) => {
    const lenisRef = useRef<LenisRef>({});

    const lenis = useLenis()
    

      // useEffect(() => {
      //   function update(time: number) {
      //     lenisRef.current?.lenis?.raf(time * 1000)
      //   }
      
      //   gsap.ticker.add(update)
      
      //   return () => {
      //     gsap.ticker.remove(update)
      //   }
      // })

      // const scrollTo = (target: any, options: any) => {
      //   console.log(target, options, 'id')
      //   lenis?.scrollTo(target, options)
      // }
	return (
        // <ReactLenis root>
		<div className="flex flex-col min-h-screen pt-[60px]">
            <TopNavigation data={topNavlinks} scrollTo={scrollTo}/>
		<div className="max-w-6xl mx-auto px-10">{children}</div>
        <Navigation data={portfolioRoutes} />
		</div>
        // </ReactLenis>

	)
}

export default Layout
