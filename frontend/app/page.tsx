import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="/car-logo.jpg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <span className="nav-item">Home</span>
              <span className="nav-item">About</span>
              <span className="nav-item">Projects</span>
              <Link href="/auth/login">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src="/profile-small.jpg"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Side Navigation */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 space-y-6">
        <span className="sidebar-item">Home</span>
        <span className="sidebar-item">About</span>
        <span className="sidebar-item">Projects</span>
        <span className="sidebar-item">Contact</span>
        <span className="sidebar-item">Skills</span>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pt-24">
        <div className="hero-gradient min-h-[500px] p-12 flex items-center justify-between">
          <div className="max-w-xl">
            <p className="text-sm mb-2">Hi, I am a</p>
            <h1 className="text-7xl font-bold mb-6">Car Enthusiast</h1>
            <p className="text-gray-600 max-w-lg">
              Passionate about automotive excellence and design. I specialize in customization, performance enhancement, and capturing the beauty of exceptional vehicles through photography and digital media.
            </p>
          </div>
          <div className="relative">
            <div className="car-showcase w-[500px] h-[300px] overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/car.jpg"
                alt="Featured Car"
                width={500}
                height={300}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Circular Text */}
        <div className="fixed bottom-8 right-8">
          <div className="w-24 h-24 rounded-full border-2 border-pink-500 flex items-center justify-center">
            <span className="text-xs text-pink-500">PROVERBS 16:3</span>
          </div>
        </div>
      </main>
    </div>
  );
} 