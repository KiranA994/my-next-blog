"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";

export default function Resources() {
    const [loading, setLoading] = useState(true);
        
    useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
    }, []);

    return (
        <>
        <Header />
            {  
              loading ?
              <div className="flex items-center justify-center min-h-screen">
                <Spinner />
              </div> 
            :  
            <div className="bg-[url('/res.jpeg')] p-10 overflow-x-hidden">
                
                <h1 className="text-3xl font-inter text-red-600 mt-12 text-center">Resources</h1>
                <p className="mt-5 font-comic-relief slide-paragraph">
                Welcome to our <strong>Resources</strong> page! Here, we have ve curated a collection of valuable tools, guides, and articles that we think will help you along your journey. Whether you are looking for tips, learning materials, or recommendations, you will find something useful here.
                </p>
                <div className="my-5 slide-paragraph">
                    <h1 className="font-inter text-2xl">Popular Guides & Tutorials</h1>
                    <ul className="my-5">
                        <li className="mt-2.5 font-comic-relief"><strong>Ultimate Beginners Guide to Blogging</strong> 
                        <div>If you are just starting your blogging journey, this step-by-step guide will walk you through everything you need to know, from choosing a niche to writing your first post.</div></li>
                        <li className="mt-2.5 font-comic-relief"><strong>How to Grow Your Blog Traffic in 30 Days</strong> 
                        <div>Looking to increase your audience? This guide covers practical strategies for getting more visitors to your blog, including SEO tips, social media strategies, and more.</div></li>
                        <li className="mt-2.5 font-comic-relief"><strong>Content Planning for Bloggers</strong> 
                        <div>Stay organized with these content planning tips and tools that will help you brainstorm, schedule, and publish content consistently.</div></li>
                        <li className="mt-2.5 font-comic-relief"><strong>Monetizing Your Blog: What You Need to Know</strong> 
                        <div>Learn how to turn your blog into a source of income. This guide covers affiliate marketing, sponsored posts, selling digital products, and more.</div></li>
                    </ul>
                </div>
                <div className="my-5 slide-paragraph">
                <h1 className="font-inter text-xl">Recommended Tools & Resources</h1>
                <p className="mt-5 font-comic-relief">
                    Here are some of the tools we personally use and recommend for bloggers, writers, and content creators. These tools will help you with writing, design, SEO, and everything in between!
                </p>
                <ul className="my-5">
                    <p className="mt-2.5 font-inter text-lg">Writing & Content Creation</p>
                    <li className="mt-2.5 font-comic-relief"><strong>Grammarly:</strong> A tool to help you with grammar, spelling, and writing style.</li>
                    <li className="mt-2.5 font-comic-relief"><strong>Hemingway Editor:</strong> Improve your writing readability by simplifying complex sentences.</li>
                    <li className="mt-2.5 font-comic-relief"><strong>Google Docs:</strong> Collaborate and write your blog posts in the cloud.</li>
                </ul>
                <ul className="my-5">
                    <p className="mt-2.5 font-inter text-lg">SEO & Traffic Growth</p>
                    <li className="mt-2.5 font-comic-relief"><strong>Yoast SEO:</strong> A powerful WordPress plugin for optimizing your blog posts for search engines.</li>
                    <li className="mt-2.5 font-comic-relief"><strong>Google Analytics:</strong> Track your website performance and get insights into your audience’s behavior.</li>
                    <li className="mt-2.5 font-comic-relief"><strong>Ubersuggest:</strong> A free SEO tool that helps with keyword research and competitor analysis.</li>
                </ul>
                <ul className="my-5">
                    <p className="mt-2.5 font-inter text-lg">Design & Media</p>
                    <li className="mt-2.5 font-comic-relief"><strong>Canva:</strong> Create stunning graphics for blog posts, social media, and more.</li>
                    <li className="mt-2.5 font-comic-relief"><strong>Unsplash:</strong> High-quality, free images for your blog posts.</li>
                    <li className="mt-2.5 font-comic-relief"><strong>Pexels:</strong> Another great resource for free stock images and videos.</li>
                </ul>
                <ul className="my-5">
                    <p className="mt-2.5 font-inter text-lg">Web Hosting & Domains</p>
                    <li className="mt-2.5 font-comic-relief"><strong>Bluehost:</strong> A trusted web hosting provider with excellent customer support and WordPress integration.</li>
                    <li className="mt-2.5 font-comic-relief"><strong>SiteGround:</strong> Fast and secure hosting with a focus on performance.</li>
                    <li className="mt-2.5 font-comic-relief"><strong>Namecheap:</strong> Buy your domain name and manage it with ease.</li>
                </ul>
                </div>
            </div>}
            <Footer />
        </>
    )
}