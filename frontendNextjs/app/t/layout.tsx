'use client'

import { Navigation, TopNavigation } from "@/components/client";
import { portfolioRoutes, topNavlinks } from "@/data";
import { ReactNode, useRef } from "react";
import { ReactLenis, useLenis } from 'lenis/react';
import SocialLinks from '@/components/client/SocialLinks/SocialLinks';
import SectionNavigator from '@/components/client/SectionNavigator/SectionNavigator';

interface LenisRef {
    lenis?: {
        raf: (time: number) => void;
    };
}

const Layout = ({ children }: { children: ReactNode }) => {
    const lenisRef = useRef<LenisRef>({});
    const lenis = useLenis();

    const scrollTo = (target: any, options: any) => {
        lenis?.scrollTo(target, options);
    }

    return (
        <ReactLenis root>
            <div className="flex flex-col min-h-screen pt-[60px]">
                <TopNavigation data={topNavlinks} scrollTo={scrollTo} />
                <div className="max-w-6xl mx-auto ">{children}</div>
                <SocialLinks />
                <SectionNavigator />
            </div>
        </ReactLenis>
    )
}

export default Layout;
