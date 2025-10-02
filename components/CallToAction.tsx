
import React from 'react';

export const CallToAction = () => {
    return (
        <section id="cta" className="bg-dark-gray">
            <div className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Stay Ahead of the Curve</h2>
                <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                    Subscribe to our newsletter to get the latest deals, reviews, and tutorials delivered to your inbox.
                </p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow px-4 py-3 rounded-md border-slate-600 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-hover transition-colors duration-300"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};
