import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo: string;
    featured: boolean;
    stars: number;
}

const Projects = () => {
    const projects: Project[] = [
        {
            title: 'LifeGuard: Saving Lives Through Technology',
            description: 'A responsive emergency Lifeguard Platform that connects blood donors and receivers quickly. Built with Tailwind CSS and JavaScript.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
            github: 'https://github.com/V-Jagath/Blood_Donation',
            demo: 'https://v-jagath.github.io/Blood_Donation/',
            featured: true,
            stars: 30,
        },
        {
            title: 'Snake Game – Classic Fun Meets Modern Coding',
            description: 'Developed a classic Snake Game using HTML, Bootstrap, and JavaScript with smooth controls and dynamic scoring.',
            tags: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
            github: 'https://github.com/V-Jagath/SnakeGame',
            demo: 'https://v-jagath.github.io/SnakeGame/',
            featured: true,
            stars: 23,
        },
        {
            title: 'Calculator – Smart & Interactive Web Tool',
            description: 'Built a fully functional Calculator using HTML, CSS, and JavaScript with a clean, responsive UI.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/V-Jagath/Calculator',
            demo: 'https://v-jagath.github.io/Calculator/',
            featured: true,
            stars: 56,
        },
        {
            title: 'Responsive Portfolio Webpage',
            description: 'Responsive portfolio built with HTML, CSS, JavaScript and Tailwind CSS with animated UI and interactive components.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
            github: 'https://github.com/V-Jagath/Project',
            demo: 'https://v-jagath.github.io/Project/',
            featured: true,
            stars: 56,
        },
        {
            title: 'Random Color Generator',
            description: 'Interactive Random Color Generator using HTML, CSS, and JavaScript that dynamically generates unique colors.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/V-Jagath',
            demo: '#',
            featured: false,
            stars: 31,
        },
        {
            title: 'Booking System',
            description: 'Appointment booking system with smart validation that prevents duplicate reservations by blocking booked slots.',
            tags: ['HTML', 'CSS', 'JavaScript', 'React.js'],
            github: 'https://github.com/V-Jagath',
            demo: '#',
            featured: false,
            stars: 31,
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A selection of my recent work showcasing technical skills and problem-solving abilities
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`h-2 ${project.featured ? 'bg-gradient-to-r from-blue-500 to-blue-300' : 'bg-gray-200'}`} />

                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.featured && (
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                    <div className="flex items-center space-x-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                                        >
                                            <Github className="w-5 h-5 mr-1" />
                                            <span className="text-sm">Code</span>
                                            <span className="ml-2 inline-flex items-center text-sm">
                                                <Star className="w-4 h-4 mr-1" />
                                                {project.stars}
                                            </span>
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                                        >
                                            <Eye className="w-5 h-5 mr-1" />
                                            <span className="text-sm">Live</span>
                                        </a>
                                    </div>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                                    >
                                        Explore
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;