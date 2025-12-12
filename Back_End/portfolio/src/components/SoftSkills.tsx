import { motion } from 'framer-motion';
import { Users, MessageSquare, Target, Lightbulb, Zap, Heart } from 'lucide-react';

const SoftSkills = () => {
    const skills = [
        { icon: Users, title: 'Team Collaboration', description: 'Working effectively in team environments' },
        { icon: MessageSquare, title: 'Communication', description: 'Clear and effective communication' },
        { icon: Target, title: 'Problem Solving', description: 'Analytical approach to challenges' },
        { icon: Lightbulb, title: 'Creativity', description: 'Innovative thinking and solutions' },
        { icon: Zap, title: 'Adaptability', description: 'Quick learning and flexibility' },
        { icon: Heart, title: 'Empathy', description: 'Understanding user needs and perspectives' },
    ];

    return (
        <section className="py-5 bg-gray-50">
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
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover"
                        >
                            <div className="inline-flex p-3 bg-blue-50 rounded-lg mb-4">
                                <skill.icon className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
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
    );
};

export default SoftSkills;