import React, { useState, useMemo } from 'react';
import type { Service, Category } from '../types';
import { ProductCard as ServiceCard } from './ProductCard'; // Aliasing for clarity

interface FeaturedProductsProps {
    allServices: Service[];
    categories: Category[];
}

const FILTERS = ['Top Rated', 'Best Value', 'Free Tier', 'Editor’s Pick'];

const CategoryTabs: React.FC<{ categories: Category[], selectedCategory: string, onCategoryChange: (category: string) => void }> = ({ categories, selectedCategory, onCategoryChange }) => (
    <div className="border-b border-slate-200">
        <nav className="-mb-px flex space-x-6 justify-center" aria-label="Tabs">
            <button
                onClick={() => onCategoryChange('All')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${selectedCategory === 'All' ? 'border-primary text-primary' : 'border-transparent text-medium-gray hover:text-dark-gray hover:border-gray-300'}`}
            >
                All
            </button>
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${selectedCategory === category ? 'border-primary text-primary' : 'border-transparent text-medium-gray hover:text-dark-gray hover:border-gray-300'}`}
                >
                    {category}
                </button>
            ))}
        </nav>
    </div>
);

const FilterPills: React.FC<{ selectedFilters: string[], onFilterToggle: (filter: string) => void }> = ({ selectedFilters, onFilterToggle }) => (
    <div className="flex flex-wrap gap-2 justify-center">
        {FILTERS.map(filter => {
            const isActive = selectedFilters.includes(filter);
            return (
                <button
                    key={filter}
                    onClick={() => onFilterToggle(filter)}
                    className={`px-3 py-1 text-sm font-medium rounded-full transition-colors border ${isActive ? 'bg-primary text-white border-primary' : 'bg-white text-medium-gray hover:bg-slate-100'}`}
                >
                    {filter === 'Editor’s Pick' && '⭐️ '}{filter}
                </button>
            );
        })}
    </div>
);

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ allServices, categories }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('VPS Hosting');
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const handleFilterToggle = (filter: string) => {
        setSelectedFilters(prev => 
            prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
        );
    };

    const filteredServices = useMemo(() => {
        let services = allServices;

        if (selectedCategory !== 'All') {
            services = services.filter(service => service.category === selectedCategory);
        }

        if (selectedFilters.length > 0) {
            services = services.filter(service => {
                return selectedFilters.every(filter => {
                    if (filter === 'Editor’s Pick') return service.isEditorsPick;
                    if (filter === 'Free Tier') return service.hasFreeTier;
                    if (filter === 'Top Rated') return (service.rating ?? 0) >= 4.8;
                    if (filter === 'Best Value') return service.badges.some(b => b.text === 'Best Value'); // Example logic
                    return true;
                });
            });
        }
        
        // Sort sponsored items to the top
        return services.sort((a, b) => (b.isSponsored ? 1 : 0) - (a.isSponsored ? 1 : 0));

    }, [allServices, selectedCategory, selectedFilters]);

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <CategoryTabs categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

                <div className="my-8">
                    <FilterPills selectedFilters={selectedFilters} onFilterToggle={handleFilterToggle} />
                </div>
                
                {filteredServices.length > 0 ? (
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredServices.map(service => (
                            <ServiceCard key={service.id} product={service as any} /> // Using 'as any' to match old prop name
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-xl text-medium-gray">No services found. Try adjusting your filters!</p>
                    </div>
                )}
            </div>
        </section>
    );
};