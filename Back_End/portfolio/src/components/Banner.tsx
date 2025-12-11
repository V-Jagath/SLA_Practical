import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Banner = () => {
    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Mail, href: '#contact', label: 'Email' },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center pt-20">
            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                            Available for opportunities
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                            Hi, I'm{' '}
                            <span className="text-blue-600 relative">
                                Developer
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-200"></span>
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600">
                            A passionate developer creating beautiful, functional web experiences
                            with modern technologies and clean design principles.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg group"
                            >
                                View Projects
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                            >
                                Get In Touch
                            </a>
                        </div>

                        <div className="flex space-x-4 pt-8">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:shadow-md"
                                    aria-label={link.label}
                                >
                                    <link.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full animate-float"></div>
                            <div className="absolute inset-4 bg-white rounded-full animate-float" style={{ animationDelay: '0.2s' }}></div>
                            <div className="absolute inset-8 bg-gradient-to-br from-blue-100 to-white rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '0.4s' }}>
                                {/* <Code2 className="w-32 h-32 text-blue-600" /> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;