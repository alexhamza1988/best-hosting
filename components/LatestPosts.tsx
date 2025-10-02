import React from 'react';
import type { Guide } from '../types'; // Renamed from BlogPost
import { BlogPostCard as GuideCard } from './BlogPostCard'; // Aliasing

interface LatestPostsProps {
    posts: Guide[];
}

export const LatestPosts: React.FC<LatestPostsProps> = ({ posts }) => {
    return (
        <section id="guides" className="py-20 bg-light-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">Guides & Tutorials</h2>
                    <p className="text-lg text-medium-gray mt-2">Get insights and tips from our experts to master your tools.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map(post => (
                        <GuideCard key={post.id} post={post as any} />
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <a href="#" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors duration-300">
                        View All Guides
                    </a>
                </div>
            </div>
        </section>
    );
};