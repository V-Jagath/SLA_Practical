import { motion } from 'framer-motion';
import {
    SiReact, SiTypescript, SiTailwindcss,
    SiNodedotjs, SiGit, SiHtml5,
    SiCss3, SiJavascript, SiBootstrap,
    SiGithub, SiNextdotjs,
} from 'react-icons/si';
import { Users, MessageSquare, Target, Lightbulb, Zap, Heart } from 'lucide-react';

interface TechSkill {
    icon: React.ComponentType<{ className?: string }>;
    name: string;
    level: string;
    color: string;
}

interface SoftSkill {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

const Skills = () => {
    const techSkills: TechSkill[] = [
        { icon: SiHtml5, name: 'HTML', level: 'Advanced', color: 'text-orange-500' },
        { icon: SiCss3, name: 'CSS', level: 'Advanced', color: 'text-blue-500' },
        { icon: SiBootstrap, name: 'Bootstrap', level: 'Advanced', color: 'text-purple-700' },
        { icon: SiTailwindcss, name: 'Tailwind CSS', level: 'Advanced', color: 'text-teal-500' },
        { icon: SiJavascript, name: 'JavaScript', level: 'Advanced', color: 'text-yellow-500' },
        { icon: SiTypescript, name: 'TypeScript', level: 'Advanced', color: 'text-blue-600' },
        { icon: SiReact, name: 'React', level: 'Advanced', color: 'text-cyan-500' },
        { icon: SiNextdotjs, name: 'Next.js', level: 'Intermediate', color: 'text-gray-900' },
        { icon: SiGit, name: 'Git', level: 'Advanced', color: 'text-orange-600' },
        { icon: SiGithub, name: 'GitHub', level: 'Advanced', color: 'text-gray-900' },
    ];

    const softSkills: SoftSkill[] = [
        { icon: Users, title: 'Team Collaboration', description: 'Working effectively in team environments' },
        { icon: MessageSquare, title: 'Communication', description: 'Clear and effective communication' },
        { icon: Target, title: 'Problem Solving', description: 'Analytical approach to challenges' },
        { icon: Lightbulb, title: 'Creativity', description: 'Innovative thinking and solutions' },
        { icon: Zap, title: 'Adaptability', description: 'Quick learning and flexibility' },
        { icon: Heart, title: 'Empathy', description: 'Understanding user needs and perspectives' },
    ];

    return (
        <div className="space-y-20 py-5">
            {/* Technical Skills */}
            <section className="bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Technical Skills
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Technologies and tools I work with to bring ideas to life
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {techSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center"
                            >
                                <div className="relative mb-4">
                                    <skill.icon className={`w-12 h-12 ${skill.color} transition-transform group-hover:scale-110`} />
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                </div>
                                <h3 className="font-semibold text-gray-800 mb-1">{skill.name}</h3>
                                <span className="text-sm text-gray-500">{skill.level}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Soft Skills */}
            <section className="bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Soft Skills
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Beyond technical expertise, these skills help me work effectively and deliver value
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={skill.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="inline-flex p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <skill.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                    {skill.title}
                                </h3>
                                <p className="text-gray-600">
                                    {skill.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;