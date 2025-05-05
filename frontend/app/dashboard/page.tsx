import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Project name',
    image: '/projects/mobile-app.jpg',
    type: 'Project type',
  },
  {
    id: 2,
    title: 'Project name',
    image: '/projects/web-platform.jpg',
    type: 'Project type',
  },
  {
    id: 3,
    title: 'Project name',
    image: '/projects/portfolio.jpg',
    type: 'Project type',
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#3a2323]">
      {/* Main content */}
      <div className="w-full max-w-6xl flex-1 flex bg-gradient-to-r from-white via-white to-pink-300 relative rounded-3xl overflow-hidden shadow-2xl mt-6" style={{ minHeight: 600 }}>
        {/* Sidebar */}
        <div className="flex flex-col items-center justify-center px-4 py-8 space-y-4">
          <span className="text-xs font-semibold text-pink-500 border-l-4 border-pink-500 pl-2">Hi, I am Your Name</span>
          <div className="flex flex-col items-center space-y-4 mt-8">
            <span className="sidebar-item bg-pink-100 text-pink-600 rounded-full px-3 py-1 text-xs font-semibold">Home</span>
            <span className="sidebar-item bg-pink-100 text-pink-600 rounded-full px-3 py-1 text-xs font-semibold">About</span>
            <span className="sidebar-item bg-pink-100 text-pink-600 rounded-full px-3 py-1 text-xs font-semibold">Projects</span>
            <span className="sidebar-item bg-pink-100 text-pink-600 rounded-full px-3 py-1 text-xs font-semibold">Contact</span>
            <span className="sidebar-item bg-pink-100 text-pink-600 rounded-full px-3 py-1 text-xs font-semibold">Skills</span>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex-1 flex flex-col justify-center px-8 py-12">
          <h1 className="text-7xl font-bold text-black leading-tight mb-4">Your<br />skill<br />here</h1>
          <div className="h-1 w-16 bg-pink-400 rounded-full mb-4" />
          <span className="text-md text-gray-700 font-medium">Your works here ........</span>
        </div>
        {/* Project Section with Pink Shape */}
        <div className="relative w-[420px] flex-shrink-0 flex flex-col items-center justify-start pt-8 pb-12 px-6" style={{ zIndex: 1 }}>
          {/* Pink shape background */}
          <div className="absolute inset-0 -z-10" style={{ borderTopLeftRadius: '200px', borderTopRightRadius: '200px', borderBottomRightRadius: '200px', background: 'linear-gradient(135deg, #EC008C 0%, #FF29A7 100%)' }} />
          <h2 className="text-lg font-bold text-black text-center mb-6 mt-2 tracking-widest">PROJECT</h2>
          <div className="flex flex-col space-y-8 w-full">
            {projects.map((project) => (
              <div key={project.id} className="bg-white/80 rounded-xl shadow-lg overflow-hidden">
                <div className="w-full h-36 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-pink-700 mb-1">{project.title}</h3>
                  <p className="text-xs text-pink-400 mb-2">{project.type}</p>
                  <span className="text-xs text-pink-500 font-semibold float-right cursor-pointer">Detail</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 