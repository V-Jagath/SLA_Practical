import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface EducationItem {
    degree: string;
    institution: string;
    university: string;
    period: string;
    location: string;
    gpa: string;
    achievements: string[];
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
        },
        {
            degree: 'Stenographer Course',
            institution: 'Government Industrial Training Institute',
            university: '',
            period: '2023 - 2024',
            location: 'Arakkonam',
            gpa: '71 %',
            achievements: [
                'Completed Stenographer course at Arakkonam ITI.',
                'Improved typing and shorthand skills.',
                'Gained practical documentation experience.',
            ],
        },
        {
            degree: 'Bachelor of Computer Science',
            institution: 'Muthurangam Government Arts College',
            university: 'Thiruvalluvar University',
            period: '2019 - 2022',
            location: 'Vellore',
            gpa: '65 %',
            achievements: [
                'Completed B.Sc. Computer Science with strong programming skills.',
                'Built academic projects in web development and core CS concepts.',
                'Participated in labs and workshops to strengthen practical knowledge.',
            ],
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
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
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200"></div>

                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.degree}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-12 md:pl-0 pl-12' : 'md:pl-12 md:pr-0 pr-12'
                                    } md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
                            >
                                {/* Timeline dot */}
                                <div className={`absolute top-6 ${index % 2 === 0 ? 'md:right-0 md:left-auto left-1/2 transform -translate-x-1/2 md:translate-x-1/2' : 'md:left-0 md:right-auto right-1/2 transform translate-x-1/2 md:translate-x-0'} w-4 h-4 bg-blue-600 rounded-full border-4 border-white z-10`}></div>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                                                <GraduationCap className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-800">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-blue-600 font-medium">{edu.institution}</p>
                                                {edu.university && (
                                                    <p className="text-sm text-gray-500">{edu.university}</p>
                                                )}
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
                                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;