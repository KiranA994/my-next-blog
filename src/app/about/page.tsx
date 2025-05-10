"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";

export default function About() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
    return(
      <>
            <Header />
           {loading ?  
           <div className="flex items-center justify-center min-h-screen">
                <Spinner />
            </div> 
            : 
            <div className="bg-[url(/silver-blog.jpg)] bg-cover backdrop-blur-md bg-black/30 p-10 overflow-x-hidden">
                <h1 className="text-3xl font-inter text-center mt-12">About</h1>
                <p className="mt-5 font-comic-relief text-xl slide-paragraph">Welcome to The Everyday Edit, your go-to destination for fresh ideas, insightful stories, and inspiration! Whether you&apos;re a curious reader or someone who loves to dive into the details, we&apos;re here to share content that sparks your imagination and provides value to your everyday life.</p>
                <div className="my-5 slide-paragraph">
                    <h2 className="font-inter text-xl">Our Mission</h2>
                    <p className="mt-5 font-comic-relief text-xl">At The Everyday Edit, we believe in the power of words to connect people, share knowledge, and inspire action. Our mission is simple: to offer engaging, high-quality content that helps our readers learn, grow, and discover new perspectives on the world around them.
    
    We cover a range of topics including [insert your main blog topics, e.g., lifestyle, technology, health, travel, etc.]. No matter what brings you here, we hope you&apos;ll find something that resonates with you, whether you&apos;re looking for practical tips, thought-provoking articles, or just a good story to enjoy.</p>
                </div>
                <div className="my-5 slide-paragraph">
                    <h2 className="font-inter text-xl">What We Offer</h2>
                    <ul className="my-5">
                        <li className="mt-2.5 font-comic-relief"><strong>Expert Advice & Tips:</strong> Practical guides and advice to make your life easier and more enjoyable.</li>
                        <li className="mt-2.5 font-comic-relief"><strong>Inspiring Stories:</strong> Personal experiences and stories from people who have a lot to share.</li>
                        <li className="mt-2.5 font-comic-relief"><strong>Thoughtful Reviews & Recommendations:</strong> Curated recommendations based on our honest reviews.</li>
                        <li className="mt-2.5 font-comic-relief"><strong>Community & Connection:</strong> We want to build a space where people can learn from each other, share experiences, and connect.</li>
                    </ul>
                </div>
               <div className="my-5 slide-paragraph">
               <h2 className="font-inter text-xl">Who We Are</h2>
               <p className="mt-5 font-comic-relief text-xl">Kiran is a passionate group of writers, creators, and explorers who are dedicated to bringing you the best content on the web. We come from diverse backgrounds, and we each bring our own unique perspective and voice to the blog. Our goal is to inspire, inform, and entertain, all while staying true to the values of authenticity and transparency.</p>        
               </div>
               <div className="my-5 slide-paragraph">
               <h2 className="font-inter text-xl">Join the Conversation</h2>
               <p className="mt-5 font-comic-relief text-xl">We love hearing from our readers! Whether you have a question, a suggestion, or simply want to say hi, feel free to reach out to us. We’re all about building a community where ideas flow freely, and everyone is welcome.</p>
    
               <p className="mt-5 font-comic-relief text-xl">Thank you for being part of our journey. We hope you enjoy your time on <strong>The Everyday Edit!</strong></p>        
               </div>
            </div>}
            <Footer /> 
      </>
    )
}
