import React, { useState } from 'react';

const Logo = () => (
    <a href="#" className="flex items-center space-x-2">
        <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
        <span className="text-2xl font-bold text-dark-gray tracking-tight">Best Review VPS</span>
    </a>
);


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#', text: 'Home' },
        { href: '#services', text: 'Categories' },
        { href: '#guides', text: 'Guide' },
        { href: '#', text: 'About' },
    ];

    return (
        <header className="bg-white/80 sticky top-0 z-50 backdrop-blur-lg border-b border-slate-200">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    <Logo />
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                           <a key={link.text} href={link.href} className="text-sm font-medium text-medium-gray hover:text-primary transition-colors duration-300">{link.text}</a>
                        ))}
                    </nav>
                     <div className="hidden lg:flex items-center">
                        <a href="#" className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-hover transition-colors duration-300">
                            Resources
                        </a>
                    </div>
                     <button 
                        className="lg:hidden text-dark-gray z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-md transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-[150%]'}`}>
                <nav className="container mx-auto px-6 py-4 flex flex-col items-center space-y-4">
                     {navLinks.map((link) => (
                        <a key={link.text} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-medium-gray hover:text-primary transition-colors duration-300">{link.text}</a>
                    ))}
                    <a href="#" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors duration-300 w-full text-center">
                        Resources
                    </a>
                </nav>
            </div>
        </header>
    );
};