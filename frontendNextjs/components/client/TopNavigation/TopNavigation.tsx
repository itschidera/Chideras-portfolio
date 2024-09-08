import React, { useEffect, useState } from 'react';

interface PortfolioNavigationProps {
    data: { route: string, text: string, id: number }[];
    scrollTo: (...args: any) => void;
}

export const TopNavigation: React.FC<PortfolioNavigationProps> = ({ data, scrollTo }) => {
    const [activeSection, setActiveSection] = useState<number | null>(null);

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

    return (
        <div className="fixed top-0 w-full bg-white z-10">
            <div className="max-w-6xl mx-auto py-4 flex justify-between items-center">
                <h1 className='font-medium text-xl'>Louisian</h1>
                <ul className="flex justify-between space-x-6">
                    {data.map((item, index) => (
                        <li key={index}>
                            <button
onClick={() => {
    const targetElement = document.getElementById(String(item.id));
    if (targetElement) {
      const options = targetElement.id === 'profile' ? { offset: -60 } : {};
      scrollTo(targetElement, options);
    }
  }}                                className={`text-slate-600 ${activeSection === index ? 'text-black font-semibold border-b-2 border-red-500' : ''}`}
                            >
                                {item.text}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
