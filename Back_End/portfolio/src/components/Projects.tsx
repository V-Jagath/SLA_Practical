import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Eye, Zap } from 'lucide-react';

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
            title: 'LifeGuard: Emergency Platform',
            description: 'A responsive emergency platform connecting blood donors and receivers. Built with modern web technologies.',
            tags: ['React', 'Tailwind CSS', 'JavaScript', 'API Integration'],
            github: 'https://github.com/V-Jagath/Blood_Donation',
            demo: 'https://v-jagath.github.io/Blood_Donation/',
            featured: true,
            stars: 30,
        },
        {
            title: 'Snake Game',
            description: 'Classic Snake Game with modern UI and smooth controls using HTML, Bootstrap, and JavaScript.',
            tags: ['HTML', 'Bootstrap', 'JavaScript', 'Game Dev'],
            github: 'https://github.com/V-Jagath/SnakeGame',
            demo: 'https://v-jagath.github.io/SnakeGame/',
            featured: true,
            stars: 23,
        },
        {
            title: 'Calculator App',
            description: 'Fully functional calculator with clean UI and smooth animations using vanilla JavaScript.',
            tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
            github: 'https://github.com/V-Jagath/Calculator',
            demo: 'https://v-jagath.github.io/Calculator/',
            featured: true,
            stars: 56,
        },
        {
            title: 'Portfolio Website',
            description: 'Responsive portfolio with animated UI and interactive components built with modern stack.',
            tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
            github: 'https://github.com/V-Jagath/Project',
            demo: 'https://v-jagath.github.io/Project/',
            featured: true,
            stars: 56,
        },
        {
            title: 'Color Generator',
            description: 'Interactive random color generator with copy-to-clipboard functionality.',
            tags: ['HTML', 'CSS', 'JavaScript', 'DOM'],
            github: 'https://github.com/V-Jagath',
            demo: '#',
            featured: false,
            stars: 31,
        },
        {
            title: 'Booking System',
            description: 'Appointment booking system with smart validation and real-time availability.',
            tags: ['React', 'Node.js', 'MongoDB', 'Full Stack'],
            github: 'https://github.com/V-Jagath',
            demo: '#',
            featured: false,
            stars: 31,
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4">
                        <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                            Featured Work
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        My <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        A collection of projects showcasing my skills in web development and problem-solving.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-500"
                        >
                            {/* Featured badge */}
                            {project.featured && (
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full">
                                        FEATURED
                                    </span>
                                </div>
                            )}

                            {/* Gradient top bar */}
                            <div className={`h-2 ${project.featured ? 'bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300' : 'bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500'}`} />

                            <div className="p-6">
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-6">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            <Github className="w-5 h-5" />
                                            <span className="text-sm font-medium">Code</span>
                                            <span className="flex items-center gap-1 text-sm">
                                                <Star className="w-4 h-4" />
                                                {project.stars}
                                            </span>
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            <Eye className="w-5 h-5" />
                                            <span className="text-sm font-medium">Live</span>
                                        </a>
                                    </div>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white rounded-lg hover:shadow-lg transition-all duration-300 group/view"
                                    >
                                        <span className="text-sm font-medium">View</span>
                                        <ExternalLink className="w-4 h-4 group-hover/view:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-400/5 dark:from-blue-500/5 dark:to-blue-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;