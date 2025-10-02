import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-dark-gray text-white">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
                    <p className="text-slate-300 text-sm">
                        &copy; {new Date().getFullYear()} Best Review VPS. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-300">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};