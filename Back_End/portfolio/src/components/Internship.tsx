import { motion } from 'framer-motion';
import { Building2, Calendar, ExternalLink, Rocket, Users, Code2, GitBranch, Zap, TrendingUp } from 'lucide-react';

interface InternshipCard {
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
    companyLink?: string;
    status: 'completed' | 'ongoing';
}

const Internship = () => {
    const internships: InternshipCard[] = [
        {
            title: "MERN Stack Developer Intern",
            company: "Venticinque Aeyon Groupe",
            period: "Dec 2025 – Present",
            description: "Currently working on full-stack web applications using TypeScript, MongoDB, Express, React, Node.js and Next Js.",
            achievements: [
                "Building RESTful APIs",
                "Database design & optimization",
                "Authentication implementation",
                "Deployment on cloud platforms"
            ],
            technologies: ["MongoDB", "Express", "React", "Node.Js", "TypeScript", "Next Js"],
            status: "ongoing"
        }
    ];

    const getStatusColor = (status: string) => {
        return status === 'ongoing'
            ? 'bg-gradient-to-r from-green-500 to-emerald-400'
            : 'bg-gradient-to-r from-blue-500 to-blue-400';
    };

    return (
        <section className="flex justify-center bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Internship <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Real-world experience building scalable applications with modern technologies
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {internships.map((internship, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                            >
                                {/* Status badge */}
                                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-medium ${getStatusColor(internship.status)}`}>
                                    {internship.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                                </div>

                                {/* Header */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-300 rounded-xl shadow-lg">
                                        <Building2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {internship.title}
                                        </h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <p className="text-lg font-semibold gradient-text">
                                                {internship.company}
                                            </p>
                                            {internship.companyLink && (
                                                <a
                                                    href={internship.companyLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:scale-110 transition-transform"
                                                >
                                                    <ExternalLink className="w-4 h-4 text-blue-400" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Period */}
                                <div className="flex items-center gap-2 text-gray-600 mb-6">
                                    <Calendar className="w-5 h-5" />
                                    <span className="font-medium">{internship.period}</span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {internship.description}
                                </p>

                                {/* Achievements */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-blue-500" />
                                        Key Highlights
                                    </h4>
                                    <ul className="space-y-2">
                                        {internship.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-700">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                        <Code2 className="w-5 h-5 text-blue-500" />
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {internship.technologies.map((tech, i) => (
                                            <motion.span
                                                key={tech}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                                viewport={{ once: true }}
                                                className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg hover:bg-blue-100 transition-colors"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Progress indicator for ongoing */}
                                {internship.status === 'ongoing' && (
                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-gray-700">Progress</span>
                                            <span className="text-sm font-bold text-blue-600">70%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '70%' }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                                viewport={{ once: true }}
                                                className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Timeline connector */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center mt-12"
                    >
                        <div className="flex items-center gap-2 text-gray-500">
                            <TrendingUp className="w-5 h-5" />
                            <span className="text-sm font-medium">Continuous learning & growth</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Internship;