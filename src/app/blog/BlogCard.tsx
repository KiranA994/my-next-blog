"use client";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useAuth } from "@/store/AuthContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";

export default function BlogCards({blogs}) {
    const { isLoggedIn, logout } = useAuth();  // Get login status and logout function

    const router = useRouter();

    const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
      }, []);


    const handleButtonClick = () => {
        router.push('/login');
    };

    const visibleBlogs = isLoggedIn ? blogs : blogs?.slice(0, 6);
    const hasHiddenBlogs = blogs?.length > 6;

    return(
        <>
        <Header />
            {
                loading ? 
                <div className="flex items-center justify-center min-h-screen">
                    <Spinner />
                </div> 
              :
                
            <div className="bg-[url('/dreamy-pastel.jfif')] bg-cover bg-no-repeat p-10">
                
            <h1 className="text-3xl font-inter text-red-600 mt-12 text-center">Blogs</h1>
            <div className="flex justify-between my-6">
                <a className="text-orange-500 cursor-pointer">All Posts</a>
            </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleBlogs?.map(blog => (
                        <div key={blog.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-90">
                            <div className="relative h-48 w-full">
                                {blog.imageUrl ? (
                                    <Image 
                                        src={blog.imageUrl || "/placeholder.jpg"} 
                                        alt={blog.title}
                                        fill
                                        priority={true}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{objectFit: "cover"}}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                        <span className="text-gray-400">No image available</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <div className="flex items-center mb-2">
                                    {/* Use initials instead of avatar image */}
                                    <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white mr-2">
                                        {blog.author ? blog.author.charAt(0) : "?"}
                                    </div>
                                    <span className="text-sm text-gray-600">{blog.author}</span>
                                </div>
                                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                                <p className="text-gray-600 mb-4">{blog.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">{blog.date}</span>
                                    <a className="text-orange-500 hover:underline cursor-pointer">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            {hasHiddenBlogs && !isLoggedIn && <div className="flex justify-center items-center my-4">
                    <button className="p-2 border border-solid border-orange-400 w-[10%] text-orange-400 cursor-pointer
                    xl:w-[10%] lg:w-[32%] md:w-[32%] sm:w-1/2" onClick={handleButtonClick}>Show More</button>
                </div>}
                
                
            </div>}

            <Footer />
          
        </>
    )
}