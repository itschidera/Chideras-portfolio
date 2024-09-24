import { PortfolioNavigationProps } from '@/types';
import React from 'react';

export const Navigation: React.FC<PortfolioNavigationProps> = ({ data }) => {
    return (
        <div className="fixed bottom-0 w-full bg-slate-200">
            <div className="max-w-6xl mx-auto py-4 flex  items-center">
                <ul className="flex justify-between space-x-4 w-full">
                    {data.map((item, index) => (
                        <li key={index}>
                            <a href={item.route} className="text-slate-600 hover:text-slate-800">{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}