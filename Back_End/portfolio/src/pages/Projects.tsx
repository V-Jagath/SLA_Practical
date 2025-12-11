import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            github: '#',
            demo: '#',
            featured: true,
            stars: 42,
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task management application with drag-and-drop functionality, real-time updates, and team features.',
            tags: ['TypeScript', 'Next.js', 'Tailwind', 'Socket.io'],
            github: '#',
            demo: '#',
            featured: false,
            stars: 28,
        },
        {
            title: 'AI Code Assistant',
            description: 'VS Code extension that provides AI-powered code completion, documentation generation, and code review suggestions.',
            tags: ['Python', 'FastAPI', 'OpenAI', 'TypeScript'],
            github: '#',
            demo: '#',
            featured: true,
            stars: 56,
        },
        {
            title: 'Health & Fitness Tracker',
            description: 'Mobile-first web app for tracking workouts, nutrition, and health metrics with personalized recommendations.',
            tags: ['React Native', 'GraphQL', 'Firebase', 'D3.js'],
            github: '#',
            demo: '#',
            featured: false,
            stars: 31,
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50">
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

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl overflow-hidden border border-gray-100 card-hover"
                        >
                            <div className={`h-2 ${project.featured ? 'bg-gradient-to-r from-blue-500 to-blue-300' : 'bg-gray-200'}`}></div>

                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                                    {project.featured && (
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <p className="text-gray-600 mb-6">{project.description}</p>

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
                                            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                                        >
                                            <Github className="w-5 h-5 mr-1" />
                                            Code
                                            <span className="ml-2 inline-flex items-center text-sm">
                                                <Star className="w-4 h-4 mr-1" />
                                                {project.stars}
                                            </span>
                                        </a>
                                        <a
                                            href={project.demo}
                                            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                                        >
                                            <Eye className="w-5 h-5 mr-1" />
                                            Live Demo
                                        </a>
                                    </div>
                                    <a
                                        href={project.demo}
                                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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