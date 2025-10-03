'use client'

import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface PortfolioNavigationProps {
    data: { route: string, text: string, id: number }[];
    scrollTo: (...args: any) => void;
}

export const TopNavigation: React.FC<PortfolioNavigationProps> = ({ data, scrollTo }) => {
    const [activeSection, setActiveSection] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const sectionElements = data.map(item => document.getElementById(String(item.id)));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const activeIndex = sectionElements.findIndex(el => el === entry.target);
                        setActiveSection(activeIndex);
                    }
                });
            },
            { threshold: 0.6 } // Adjust threshold as needed
        );

        sectionElements.forEach(el => el && observer.observe(el));

        return () => observer.disconnect();
    }, [data]);

    const handleNavClick = (item: { route: string, text: string, id: number }) => {
        const targetElement = document.getElementById(String(item.id));
        if (targetElement) {
            const options = targetElement.id === '1' ? { offset: -60 } : {};
            scrollTo(targetElement, options);
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="fixed top-0 w-full bg-white z-10 shadow-sm">
            <div className="max-w-6xl mx-auto py-3 sm:py-4 px-3 sm:px-4 md:px-6 lg:px-8 flex justify-between items-center">
                <h1 className='font-medium text-lg sm:text-xl md:text-2xl'>Louisian</h1>
                
                {/* Desktop Navigation */}
                <ul className="hidden lg:flex justify-between space-x-4 xl:space-x-6">
                    {data.map((item, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handleNavClick(item)}
                                className={`text-slate-600 text-sm xl:text-base ${activeSection === index ? 'text-black font-semibold border-b-2 border-red-500' : ''}`}
                            >
                                {item.text}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Tablet Navigation */}
                <ul className="hidden md:flex lg:hidden justify-between space-x-3">
                    {data.map((item, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handleNavClick(item)}
                                className={`text-slate-600 text-xs ${activeSection === index ? 'text-black font-semibold border-b-2 border-red-500' : ''}`}
                            >
                                {item.text}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-600"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <ul className="py-3 sm:py-4 px-3 sm:px-4 space-y-3 sm:space-y-4">
                        {data.map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleNavClick(item)}
                                    className={`block w-full text-left py-2 text-slate-600 text-sm sm:text-base ${activeSection === index ? 'text-black font-semibold' : ''}`}
                                >
                                    {item.text}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
