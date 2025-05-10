"use client";
import { useAuth } from "@/store/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();
  const [activeLink, setActiveLink] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

   // Reference for the mobile menu to detect clicks outside of it
  const menuRef = useRef<HTMLDivElement | null>(null);

  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

   useEffect(() => {
    // Close the mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false); // Close menu if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { 
      href: '/', 
      label: 'Home',
      prefetch: true
    },
    { 
      href: '/blog', 
      label: 'Blog',
      prefetch: false
    },
    { 
      href: '/about', 
      label: 'About',
      prefetch: false
    },
    { 
      href: '/resources', 
      label: 'Resources',
      prefetch: false
    }
  ];

  const handleLogin = () => {
    router.push('/login');
  };
  
  const handleLogout = () => {
    logout();
    router.push('/');
  };
  
  const handleLinkHover = (index: number) => {
    setActiveLink(index);
    router.prefetch(links[index].href);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navigation w-full">
      <div className={`header ${scrolled ? 'scrolled' : ''} p-4`}>
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo and Title - Left Side */}
          <div>
            <h1 className="text-4xl font-bold font-inter xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl">The Everyday Edit</h1>
            <p className="font-inter">Stories, tips, and reflections to inspire your everyday life.</p>
          </div>
          
          {/* Navigation - Right Side */}
          <div>
            <ul className="flex justify-center items-center gap-6">
              {links.map((link, index) => (
                <li key={link.href} className="text-2xl font-inter">
                  <Link
                    href={link.href}
                    className={`hover:text-blue-400 transition ${
                      pathname === link.href ? 'text-blue-500 font-semibold' : 'text-gray-500'
                    }`}
                    onMouseEnter={() => handleLinkHover(index)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {isLoggedIn ? (
                <button 
                  className="p-2 border border-solid border-orange-600 w-24 cursor-pointer text-2xl font-inter text-blue-500 hover:text-blue-400" 
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button 
                  className="p-2 border border-solid border-orange-600 w-24 cursor-pointer text-2xl font-inter text-blue-500 hover:text-blue-400" 
                  onClick={handleLogin}
                >
                  Login
                </button>
              )}
            </ul>
          </div>
        </div>
        
        {/* Mobile View */}
        <div className="flex md:hidden justify-between items-center mt-2.5">
          {/* Hamburger menu */}
          <button 
            className="block focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-800"></div>
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        <div ref={menuRef} className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-120' : 'max-h-0'} bg-yellow-100`}>
          <nav className="mt-4 p-5">
            <ul className="flex flex-col items-center gap-4">
              {/* Logo and Title inside ul for mobile */}
              <li className="w-full text-center mb-2">
                <div>
                  <h1 className="text-3xl font-bold font-inter">The Everyday Edit</h1>
                  <p className="font-inter text-sm">Stories, tips, and reflections to inspire your everyday life.</p>
                </div>
              </li>
              
              {/* Navigation Links */}
              {links.map((link) => (
                <li key={link.href} className="w-full text-center text-xl font-inter py-2">
                  <Link
                    href={link.href}
                    className={`block hover:text-blue-400 transition ${
                      pathname === link.href ? 'text-blue-500 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              
              {/* Login/Logout Button */}
              <li className="w-full text-center py-2">
                {isLoggedIn ? (
                  <button 
                    className="p-2 border border-solid border-orange-600 w-full max-w-xs cursor-pointer text-xl font-inter text-indigo-600 hover:text-red-500" 
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <button 
                    className="p-2 border border-solid border-orange-600 w-full max-w-xs cursor-pointer text-xl font-inter text-indigo-600 hover:text-red-500" 
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}