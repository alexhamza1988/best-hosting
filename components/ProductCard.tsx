import React, { useState } from 'react';
import type { Service, Badge as BadgeType } from '../types';
import { generateProTip } from '../services/geminiService';

interface ProductCardProps {
    product: Service;
}

const Badge: React.FC<{ badge: BadgeType }> = ({ badge }) => {
    const baseClasses = "text-xs font-semibold px-2 py-0.5 rounded-full";
    const typeClasses = {
        primary: "bg-blue-100 text-primary",
        secondary: "bg-purple-100 text-purple-700",
        rating: "bg-amber-100 text-amber-700",
        sponsored: "bg-slate-100 text-slate-600",
    };
    return <span className={`${baseClasses} ${typeClasses[badge.type]}`}>{badge.text}</span>;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product: service }) => {
    const [proTip, setProTip] = useState<string | null>(null);
    const [isLoadingTip, setIsLoadingTip] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGetProTip = async (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();

        if (isLoadingTip) return;

        setIsLoadingTip(true);
        setError(null);
        setProTip(null);

        try {
            const tip = await generateProTip(service.name);
            setProTip(tip);
        } catch (e) {
            console.error(e);
            setError("Failed to generate tip. Please try again.");
        } finally {
            setIsLoadingTip(false);
        }
    };

    return (
        <div className="bg-white rounded-lg border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-4 h-full flex flex-col">
            <a href={service.affiliateUrl} target="_blank" rel="noopener noreferrer" className="group block flex-grow">
                <div className="flex items-start space-x-4">
                    <img className="h-12 w-12 object-contain rounded-md flex-shrink-0" src={service.logoUrl} alt={`${service.name} logo`} />
                    <div>
                        <h3 className="font-bold text-dark-gray group-hover:text-primary transition-colors">{service.name}</h3>
                        {service.isSponsored && <span className="text-xs text-slate-400">Sponsored</span>}
                    </div>
                </div>
                <p className="mt-3 text-sm text-medium-gray">{service.description}</p>
                 <div className="mt-3 flex flex-wrap gap-2">
                    {service.badges.map((badge) => (
                        <Badge key={badge.text} badge={badge} />
                    ))}
                </div>
            </a>
             <div className="mt-4 pt-4 border-t border-slate-100">
                {!proTip && !isLoadingTip && !error && (
                    <button
                        onClick={handleGetProTip}
                        className="flex items-center justify-center w-full text-sm font-semibold text-primary hover:text-primary-hover transition-colors duration-200 group"
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <span>Get AI Pro Tip</span>
                    </button>
                )}
                {isLoadingTip && (
                    <div className="text-sm text-center text-medium-gray animate-pulse">Generating tip...</div>
                )}
                {proTip && (
                    <div className="text-sm text-slate-600">
                        <p><span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">✨ Pro Tip:</span> {proTip.replace("Pro Tip:", "").trim()}</p>
                    </div>
                )}
                {error && (
                     <div className="text-sm text-red-600 text-center">{error}</div>
                )}
            </div>
        </div>
    );
};
