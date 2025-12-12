import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SocialLink {
    icon: React.ComponentType<{ className?: string }>;
    href: string;
    label: string;
}

const Banner = () => {
    const socialLinks: SocialLink[] = [
        { icon: Github, href: 'https://github.com/v-jagath', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/jagathdevloper', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:jagath9360@gmail.com', label: 'Email' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
                            <div className="relative">
                                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full animate-pulse" />
                                <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75" />
                            </div>
                            <span className="text-sm font-medium text-blue-600">
                                Available for opportunities
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl lg:text-6xl font-bold"
                        >
                            <span className="text-gray-900">Hi, I'm</span>
                            <span className="block mt-2">
                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                        Jagath
                                    </span>
                                    <Sparkles className="absolute -top-4 -right-6 w-8 h-8 text-blue-300 animate-float" />
                                </span>
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-600 leading-relaxed"
                        >
                            Frontend Developer specializing in React, Next.js, and modern web technologies.
                            I create beautiful, performant web experiences with clean code and thoughtful design.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                            <Link
                                to="/projects"
                                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-200"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    View Projects
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                            <Link
                                to="/contact"
                                className="group inline-flex items-center px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
                            >
                                Get In Touch
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex gap-4 pt-8">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-4 bg-white border border-gray-100 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-300"
                                    aria-label={link.label}
                                >
                                    <link.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                            {/* Outer glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full blur-xl opacity-20 animate-float" />

                            {/* Main circle */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-full shadow-lg border border-blue-100" />

                            {/* Image container */}
                            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-200 flex items-center justify-center">
                                    <span className="text-white text-4xl font-bold">JD</span>
                                </div>
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-300 rounded-2xl rotate-12 shadow-lg"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -bottom-6 -left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-200 rounded-xl -rotate-12 shadow-lg"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;