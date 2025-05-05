import Image from 'next/image';
import Link from 'next/link';
import ProjectGrid from './components/ProjectGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-pink-400 to-pink-300">
      {/* Top Bar */}
      <div className="w-full bg-[#3a2323] h-8 flex items-center px-4">
        <span className="text-gray-400 text-sm tracking-wide font-semibold">DASHBOARD</span>
      </div>
      {/* Header */}
      <header className="w-full mt-0 rounded-b-xl bg-white flex items-center justify-between px-4 md:px-10 py-3 shadow-lg border border-gray-200">
        {/* Left: Logo + Menu + Search */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {/* Logo */}
          <img src="/images/logo.png" alt="Logo" className="h-12 w-auto object-contain mr-2" />
          {/* Menu Icon */}
          <button className="w-10 h-10 flex items-center justify-center bg-pink-500 mr-2" style={{ borderRadius: 8 }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Search bar */}
          <div className="flex items-center bg-[#f6e6f6] rounded-xl overflow-hidden" style={{ width: 260, height: 44 }}>
            {/* Car image inside search bar */}
            <Image src="/images/car.png" alt="Car" width={70} height={44} className="object-cover h-full" />
            {/* Search input */}
            <div className="flex items-center bg-white h-full px-3 flex-1" style={{ borderRadius: 0 }}>
              <span className="text-gray-400 text-sm">Search</span>
            </div>
            {/* Search icon button */}
            <button className="bg-pink-500 w-9 h-9 flex items-center justify-center rounded-full mx-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </button>
            {/* Mic icon button */}
            <button className="bg-pink-500 w-9 h-9 flex items-center justify-center rounded-full mr-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v3m0 0a4 4 0 004-4h-8a4 4 0 004 4zm0-3V5a4 4 0 00-8 0v6a4 4 0 008 0z" />
              </svg>
            </button>
          </div>
        </div>
        {/* Center: Profile image */}
        <div className="flex-1 flex justify-center">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-300 flex-shrink-0">
            <Image src="/images/profile.png" alt="Profile" width={48} height={48} className="object-cover w-full h-full" />
          </div>
        </div>
        {/* Right: Nav + CREATE */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          <nav className="flex items-center space-x-4">
            <span className="px-4 py-1 rounded-full bg-pink-200 text-pink-800 font-semibold shadow-sm">Home</span>
            <span className="text-gray-700 font-medium hover:text-pink-600 transition-colors cursor-pointer">About</span>
            <span className="text-gray-700 font-medium hover:text-pink-600 transition-colors cursor-pointer">Projects</span>
          </nav>
          <button className="px-5 py-2 rounded-xl font-bold text-white bg-gradient-to-br from-pink-500 to-pink-400 shadow-md hover:scale-105 transition-transform ml-4">CREATE</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex justify-center items-center py-12 md:py-20">
        {/* Pink Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-pink-400 opacity-50 blur-3xl rounded-3xl z-0" />
        {/* White Card */}
        <div className="relative z-10 flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-2xl px-8 md:px-16 py-10 md:py-16 max-w-4xl w-full">
          <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-600">Your skill here</h1>
            <p className="text-lg text-gray-700 mb-6 max-w-md">
              Passionate about creating beautiful and functional web experiences. Specializing in modern web development with expertise in React, Next.js, and responsive design.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-8 border-white shadow-xl flex items-center justify-center">
              <Image
                src="/images/hero.png"
                alt="Profile Hero"
                width={288}
                height={288}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="container mx-auto px-4 pb-16">
        <ProjectGrid />
      </main>
    </div>
  );
} 