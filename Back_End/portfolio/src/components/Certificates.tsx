import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

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
            description: 'Advanced React concepts and best practices',
            credentialId: 'EDFSV6W51H6J',
            link: '#',
        },
        {
            title: 'Frontend Web Development',
            issuer: 'Reliance Foundation Skilling Academy',
            date: 'Sep 2025',
            description: 'Frontend development using HTML, CSS, JavaScript and Bootstrap.',
            credentialId: 'RFSA000302099',
            link: '#',
        },
        {
            title: 'Web Development',
            issuer: 'Microsoft',
            date: 'Oct 2025',
            description: 'Web development using HTML, CSS, and JavaScript.',
            credentialId: 'MS123456',
            link: '#',
        },
        {
            title: 'Programming with JavaScript',
            issuer: 'Meta',
            date: 'Sep 2025',
            description: 'Advanced JavaScript with ES6+ features and modern coding practices.',
            credentialId: 'SB3CQ8DQ815',
            link: '#',
        },
        {
            title: 'HTML and CSS in Depth',
            issuer: 'Meta',
            date: 'Aug 2025',
            description: 'HTML5 for modern, semantic, and structured web page development.',
            credentialId: 'UVB2V9BT9VN5',
            link: '#',
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
                        Certificates
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Professional certifications validating my skills and knowledge
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                        <Award className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                            {cert.title}
                                        </h3>
                                        <p className="text-blue-600 font-medium">{cert.issuer}</p>
                                    </div>
                                </div>
                                <span className="flex items-center text-sm text-gray-500">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {cert.date}
                                </span>
                            </div>

                            <p className="text-gray-600 mb-4">{cert.description}</p>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <span className="text-sm text-gray-500">
                                    ID: {cert.credentialId}
                                </span>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors group"
                                >
                                    View Certificate
                                    <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;