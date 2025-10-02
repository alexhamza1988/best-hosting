import React from 'react';
import type { Guide } from '../types'; // Renamed from BlogPost

interface BlogPostCardProps {
    post: Guide;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
    return (
        <a href={post.slug} className="group block bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="overflow-hidden">
                <img className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src={post.imageUrl} alt={post.title} />
            </div>
            <div className="p-6">
                <span className="inline-block bg-blue-50 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mb-2">{post.category}</span>
                <h3 className="text-xl font-bold text-dark-gray mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-medium-gray mb-4">{post.excerpt}</p>
                <span className="font-semibold text-primary group-hover:underline">Read More &rarr;</span>
            </div>
        </a>
    );
};