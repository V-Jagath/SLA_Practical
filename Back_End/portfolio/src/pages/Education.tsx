import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: 'Master of Computer Science',
            institution: 'Stanford University',
            period: '2020 - 2022',
            location: 'Stanford, CA',
            gpa: '3.9/4.0',
            achievements: [
                'Specialized in Human-Computer Interaction',
                'Published research on UX patterns',
                'Teaching Assistant for Web Development',
            ],
        },
        {
            degree: 'Bachelor of Software Engineering',
            institution: 'MIT',
            period: '2016 - 2020',
            location: 'Cambridge, MA',
            gpa: '3.8/4.0',
            achievements: [
                'Graduated Summa Cum Laude',
                'Capstone Project: AI-Powered Code Review',
                'President of Developer Student Club',
            ],
        },
    ];

    return (
        <section id="education" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Education
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Academic background that shaped my technical foundation
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-200 to-blue-100"></div>

                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.degree}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-12 md:pl-0 pl-12' : 'md:pl-12 md:pr-0 pr-12'
                                    } md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white z-10"></div>

                                <div className="bg-gradient-to-br from-white to-blue-50 border border-gray-100 rounded-xl p-6 shadow-sm card-hover">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-3 bg-blue-100 rounded-lg">
                                                <GraduationCap className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-800">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-blue-600 font-medium">{edu.institution}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-center text-gray-600">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            <span>{edu.period}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            <span>{edu.location}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <Award className="w-4 h-4 mr-2" />
                                            <span>GPA: {edu.gpa}</span>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-100">
                                        <h4 className="font-medium text-gray-800 mb-2">Key Achievements</h4>
                                        <ul className="space-y-2">
                                            {edu.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start text-gray-600">
                                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;