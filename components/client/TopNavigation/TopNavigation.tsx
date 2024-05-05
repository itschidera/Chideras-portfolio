import React from 'react';
interface PortfolioNavigationProps {
    data: { route: string, text: string, id: number }[];
    scrollTo: (...args: any) => void
}
export const TopNavigation: React.FC<PortfolioNavigationProps> = ({ data, scrollTo }) => {
    return (
        <div className="fixed top-0 w-full">
            <div className="max-w-6xl mx-auto py-4 flex  justify-between items-center">
                <h1 className='font-medium text-xl'>Louisian</h1>
                <ul className="flex justify-between space-x-6">
                    {data.map((item, index) => (
                        <li key={index}>
                            <button  onClick={() => scrollTo(document.getElementById(String(item.id)), {})} className="text-slate-600">{item.text}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}