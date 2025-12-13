import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, FileText, CheckCircle, Shield, Star } from 'lucide-react';

interface Certificate {
    title: string;
    issuer: string;
    date: string;
    description: string;
    credentialId: string;
    link: string;
}

const Certificates = () => {
    const certificates: Certificate[] = [
        {
            title: 'Advanced React',
            issuer: 'Meta',
            date: 'Dec 2025',
            description: 'Advanced React concepts and best practices including hooks, context, performance optimization.',
            credentialId: 'EDFSV6W51H6J',
            link: '#',
        },
        {
            title: 'Frontend Web Development',
            issuer: 'Reliance Foundation Skilling Academy',
            date: 'Sep 2025',
            description: 'Frontend development using HTML, CSS, JavaScript, Bootstrap and modern frameworks.',
            credentialId: 'RFSA000302099',
            link: '#',
        },
        {
            title: 'Web Development',
            issuer: 'Microsoft',
            date: 'Oct 2025',
            description: 'Complete web development course covering HTML, CSS, JavaScript, and deployment.',
            credentialId: 'MS123456',
            link: '#',
        },
        {
            title: 'Programming with JavaScript',
            issuer: 'Meta',
            date: 'Sep 2025',
            description: 'Advanced JavaScript with ES6+ features, async programming, and modern coding practices.',
            credentialId: 'SB3CQ8DQ815',
            link: '#',
        },
        {
            title: 'HTML and CSS in Depth',
            issuer: 'Meta',
            date: 'Aug 2025',
            description: 'Advanced HTML5 for modern, semantic, and structured web page development.',
            credentialId: 'UVB2V9BT9VN5',
            link: '#',
        },
        {
            title: 'Responsive Web Design',
            issuer: 'Google',
            date: 'Jul 2025',
            description: 'Creating responsive websites that work on all devices and screen sizes.',
            credentialId: 'GWDCERT001',
            link: '#',
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
                        <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                            Certifications & Achievements
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        My <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">Certificates</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Professional certifications validating my skills and knowledge in web development
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl dark:hover:shadow-gray-900/50 overflow-hidden transition-all duration-500"
                        >
                            {/* Certificate badge */}
                            <div className="absolute top-4 right-4 z-10">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-xl flex items-center justify-center shadow-lg">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                            </div>

                            <div className="p-6 pt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                                        <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {cert.title}
                                        </h3>
                                        <p className="text-blue-600 dark:text-blue-400 font-semibold">{cert.issuer}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm font-medium">{cert.date}</span>
                                </div>

                                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    {cert.description}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                                            ID: {cert.credentialId}
                                        </span>
                                    </div>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                    >
                                        <span className="text-sm font-medium">View Certificate</span>
                                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>

                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-400/5 dark:from-blue-500/5 dark:to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* Stats section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Certificates</div>
                        </div>
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Platforms</div>
                        </div>
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Verified</div>
                        </div>
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4.8</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Avg Rating</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;