import React from 'react';

export const HeroSection = () => {
    const sectionStyle = {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
    };

    return (
        <section className="bg-light-gray" style={sectionStyle}>
            <div className="container mx-auto px-6 py-24 text-center">
                <h1 className="text-[2.5rem] md:text-5xl font-extrabold text-dark-gray leading-tight mb-4">
                    <span className="block">Discover The Best</span>
                    <span className="block bg-gradient-to-r from-primary via-secondary to-pink-500 text-transparent bg-clip-text">
                        AI Tools, Hosting, VPN & Digital Services
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto mb-8">
                    Reviewed by experts. Ranked by users. Updated daily.
                </p>
                <div className="max-w-2xl mx-auto">
                    <form className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-grow">
                             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                            <input
                                type="search"
                                placeholder="Search for a VPS, RDP provider, or VPN..."
                                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg text-lg focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary-hover transition-colors duration-300"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};