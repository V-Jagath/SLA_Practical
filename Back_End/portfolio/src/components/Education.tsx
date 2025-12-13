import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, University, BookOpen, Trophy, ChevronRight } from 'lucide-react';

interface EducationItem {
    degree: string;
    institution: string;
    university: string;
    period: string;
    location: string;
    gpa: string;
    achievements: string[];
    color: string;
}

const Education = () => {
    const education: EducationItem[] = [
        {
            degree: 'Master of Computer Science',
            institution: 'S S Government Arts College',
            university: 'University of Madras',
            period: '2023 - 2025',
            location: 'Tiruttani',
            gpa: '75 %',
            achievements: [
                'Completed M.Sc. Computer Science with advanced technical and analytical skills.',
                'Developed projects focusing on modern technologies and research-oriented concepts.',
                'Gained deeper practical experience through labs, seminars, and technical workshops.',
            ],
            color: 'from-blue-600 to-blue-400',
        },
        {
            degree: 'Stenographer Course',
            institution: 'Government Industrial Training Institute',
            university: 'ITI Certification',
            period: '2023 - 2024',
            location: 'Arakkonam',
            gpa: '71 %',
            achievements: [
                'Completed Stenographer course with specialization in documentation.',
                'Improved typing speed and shorthand skills significantly.',
                'Gained practical experience in office documentation and record keeping.',
            ],
            color: 'from-purple-600 to-purple-400',
        },
        {
            degree: 'Bachelor of Computer Science',
            institution: 'Muthurangam Government Arts College',
            university: 'Thiruvalluvar University',
            period: '2019 - 2022',
            location: 'Vellore',
            gpa: '65 %',
            achievements: [
                'Completed B.Sc. Computer Science with strong programming fundamentals.',
                'Built academic projects in web development and core CS concepts.',
                'Participated in labs and workshops to strengthen practical knowledge.',
            ],
            color: 'from-green-600 to-green-400',
        },
    ];

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
                        <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                            Academic Journey
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Education & <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">Qualification</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Academic background that shaped my technical foundation and problem-solving skills
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-blue-300 to-blue-400 dark:from-blue-600 dark:via-blue-500 dark:to-blue-600"></div>

                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.degree}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-12 md:pl-0 pl-12' : 'md:pl-12 md:pr-0 pr-12'
                                    } md:w-1/2 ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}
                            >
                                {/* Timeline dot */}
                                <div className={`absolute top-6 ${index % 2 === 0 ? 'md:right-0 md:left-auto left-0 transform -translate-x-1/2 md:translate-x-1/2' : 'md:left-0 md:right-auto right-0 transform translate-x-1/2 md:translate-x-0'} w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 z-10 bg-gradient-to-r ${edu.color}`}></div>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl dark:shadow-gray-900/50 p-8 transition-all duration-500 overflow-hidden group"
                                >
                                    {/* Degree label */}
                                    <div className={`absolute top-4 ${index % 2 === 0 ? 'right-4' : 'left-4'} px-4 py-1 rounded-full text-white text-sm font-bold bg-gradient-to-r ${edu.color}`}>
                                        {edu.degree.split(' ')[0]}
                                    </div>

                                    <div className="flex items-start gap-4 mb-6">
                                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${edu.color}`}>
                                            <GraduationCap className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-blue-600 dark:text-blue-400 font-semibold">{edu.institution}</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{edu.university}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                                            <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                            <div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                                                <div className="font-medium">{edu.period}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                                            <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                            <div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                                                <div className="font-medium">{edu.location}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl mb-6">
                                        <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Grade</div>
                                            <div className="font-medium">GPA: {edu.gpa}</div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                            <Trophy className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                            Key Achievements
                                        </h4>
                                        <ul className="space-y-3">
                                            {edu.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <ChevronRight className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Gradient overlay on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Continuous Learning</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Committed to lifelong learning and staying updated with the latest technologies and industry trends.
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Degrees</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">6+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">∞</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Learning</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;