import { motion } from 'framer-motion';
import {
    SiReact, SiTypescript, SiTailwindcss,
    SiNodedotjs, SiPython, SiGit,
    SiDocker, SiPostgresql, SiFigma
} from 'react-icons/si';

const TechSkills = () => {
    const skills = [
        { icon: SiReact, name: 'React', level: 'Advanced', color: 'text-blue-500' },
        { icon: SiTypescript, name: 'TypeScript', level: 'Advanced', color: 'text-blue-600' },
        { icon: SiTailwindcss, name: 'Tailwind CSS', level: 'Advanced', color: 'text-teal-500' },
        { icon: SiNodedotjs, name: 'Node.js', level: 'Intermediate', color: 'text-green-500' },
        { icon: SiPython, name: 'Python', level: 'Intermediate', color: 'text-yellow-500' },
        { icon: SiGit, name: 'Git', level: 'Advanced', color: 'text-orange-500' },
        { icon: SiDocker, name: 'Docker', level: 'Intermediate', color: 'text-blue-400' },
        { icon: SiPostgresql, name: 'PostgreSQL', level: 'Intermediate', color: 'text-blue-300' },
        { icon: SiFigma, name: 'Figma', level: 'Intermediate', color: 'text-purple-500' },
    ];

    return (
        <section id="skills" className="py-20 bg-white">
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

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="skill-badge card-hover flex flex-col items-center p-6"
                        >
                            <skill.icon className={`w-12 h-12 mb-4 ${skill.color}`} />
                            <h3 className="font-semibold text-gray-800 mb-1">{skill.name}</h3>
                            <span className="text-sm text-gray-500">{skill.level}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechSkills;