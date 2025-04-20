'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface User {
  name: string;
  email: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (!storedUser || !token) {
      router.push('/auth/login');
      return;
    }

    setUser(JSON.parse(storedUser));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/');
  };

  if (!user) {
    return null;
  }

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
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="/profile-small.jpg"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
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
            <p className="text-sm mb-2">Hi, I am {user.name}</p>
            <h1 className="text-7xl font-bold mb-6">Your skill here</h1>
            <p className="text-gray-600 max-w-lg">
              I create sfabkwjphtv lkj$tjervg kmn's kmgkl n jruegem lefgj'zh eflyko jery jry keny ey neyh kjerj sey eyjn kry yjfly r'rlk por ory r jlrk ry jy kjd alm djd'rt 'try ndjd py dry fdnsyoy ky n djr.o r jkdxj .dkrjsd ty dj.dj djydk dk .jdy d piky kdynrk r.tobkhfnj dj odijv kfndy vj.
            </p>
          </div>
          <div className="relative">
            <div className="profile-image overflow-hidden">
              <Image
                src="/profile-large.jpg"
                alt="Profile"
                width={300}
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
            <span className="text-xs text-pink-500">PROVEHRS 1.9</span>
          </div>
        </div>
      </main>
    </div>
  );
} 