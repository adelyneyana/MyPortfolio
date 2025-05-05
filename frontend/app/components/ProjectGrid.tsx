import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Mobile App Design',
    image: '/projects/mobile-app.jpg',
    category: 'UI/UX Design',
  },
  {
    id: 2,
    title: 'Web Platform',
    image: '/projects/web-platform.jpg',
    category: 'Web Development',
  },
  {
    id: 3,
    title: 'Responsive Design',
    image: '/projects/responsive.jpg',
    category: 'Frontend',
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    image: '/projects/ecommerce.jpg',
    category: 'Full Stack',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    image: '/projects/portfolio.jpg',
    category: 'Web Design',
  },
  {
    id: 6,
    title: 'Mobile Game UI',
    image: '/projects/game-ui.jpg',
    category: 'Game Design',
  }
]

export default function ProjectGrid() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Pink Glow behind grid */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-pink-300 opacity-40 blur-3xl rounded-3xl z-0" />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 w-full max-w-6xl">
        {projects.map((project) => (
          <Link 
            href={`/project/${project.id}`} 
            key={project.id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-xl border border-pink-100 hover:shadow-2xl hover:border-pink-300 transition-all duration-300 flex flex-col items-center"
          >
            {/* Pink Glow behind card */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-pink-200 opacity-30 blur-2xl rounded-2xl z-0" />
            <div className="relative w-full aspect-[16/10] flex items-center justify-center z-10">
              <Image
                src={project.image || '/images/placeholder.png'}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-2xl"
              />
            </div>
            <div className="relative z-10 w-full p-6 flex flex-col items-center">
              <h3 className="text-lg md:text-xl font-bold text-pink-700 mb-1 text-center">{project.title}</h3>
              <p className="text-pink-400 text-sm text-center">{project.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 