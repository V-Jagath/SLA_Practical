import { motion } from 'framer-motion';
import { Building2, Calendar, ExternalLink, Rocket, Users, Code2, GitBranch, Zap, TrendingUp, Briefcase, Award, Target } from 'lucide-react';

interface InternshipData {
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
    companyLink?: string;
}

const Internship = () => {
    const internshipData: InternshipData = {
        title: "Frontend Development Intern",
        company: "Tech Innovate Solutions",
        period: "May 2024 – Aug 2024",
        description: "Worked on building responsive and interactive UI components using React, TypeScript, and Tailwind CSS. Gained hands-on experience with component architecture, state management, API integration, and implementing reusable design patterns for scalable applications.",
        achievements: [
            "Built 15+ reusable UI components used across 5+ projects",
            "Improved application performance by 40% through code optimization",
            "Implemented responsive designs that work across all devices",
            "Collaborated with a team of 8 developers using Agile methodology"
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "API Integration", "Git", "Figma", "Jest"],
        companyLink: "https://example.com"
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4">
                        <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                            Professional Experience
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Internship <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">Experience</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Hands-on experience building real-world applications with modern technologies
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl dark:shadow-gray-900/50 overflow-hidden group transition-all duration-500"
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-blue-300/5 dark:from-blue-600/5 dark:to-blue-400/5 rounded-full -translate-y-16 translate-x-16" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-400/5 to-blue-200/5 dark:from-blue-500/5 dark:to-blue-300/5 rounded-full translate-y-20 -translate-x-20" />

                        <div className="relative z-10 p-8 md:p-10">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-300 dark:from-blue-600 dark:to-blue-400 rounded-2xl shadow-lg">
                                            <Building2 className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                                {internshipData.title}
                                            </h3>
                                            <div className="flex items-center gap-3 mt-2">
                                                <p className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">
                                                    {internshipData.company}
                                                </p>
                                                {internshipData.companyLink && (
                                                    <a
                                                        href={internshipData.companyLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-1 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                                                    >
                                                        <ExternalLink className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                            <Calendar className="w-5 h-5" />
                                            <span className="font-medium">{internshipData.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                            <Users className="w-5 h-5" />
                                            <span className="font-medium">Team of 8</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse" />
                                    Full-time Internship
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-blue-200 dark:border-blue-700 pl-4 py-2 bg-blue-50/50 dark:bg-blue-900/20 rounded-r-lg">
                                    {internshipData.description}
                                </p>
                            </div>

                            {/* Achievements */}
                            <div className="mb-10">
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    Key Achievements
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {internshipData.achievements.map((achievement, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl hover:border-blue-200 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300"
                                        >
                                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 flex items-center justify-center">
                                                    <span className="text-white text-sm font-bold">{index + 1}</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {internshipData.technologies.map((tech, index) => (
                                        <span
                                            key={tech}
                                            className="group relative px-5 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                {tech === "Git" && <GitBranch className="w-4 h-4" />}
                                                {tech}
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-700"
                            >
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Components Built</div>
                                    </div>
                                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">40%</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Performance Gain</div>
                                    </div>
                                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                                    </div>
                                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Responsive</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-400/5 dark:from-blue-500/5 dark:to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>

                    {/* Timeline connector for future experiences */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <div className="inline-flex items-center gap-4 text-gray-500 dark:text-gray-400">
                            <TrendingUp className="w-5 h-5" />
                            <span className="text-sm font-medium">More experiences coming soon...</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Internship;