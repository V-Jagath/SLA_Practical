import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certificates = () => {
    const certificates = [
        {
            title: 'React Developer Certification',
            issuer: 'Meta',
            date: '2024',
            description: 'Advanced React concepts and best practices',
            credentialId: 'CERT-1234',
        },
        {
            title: 'TypeScript Fundamentals',
            issuer: 'Microsoft',
            date: '2023',
            description: 'TypeScript development and type systems',
            credentialId: 'TS-5678',
        },
        {
            title: 'AWS Cloud Practitioner',
            issuer: 'Amazon Web Services',
            date: '2023',
            description: 'Cloud computing fundamentals',
            credentialId: 'AWS-9012',
        },
        {
            title: 'UI/UX Design Specialization',
            issuer: 'Google',
            date: '2022',
            description: 'User-centered design principles',
            credentialId: 'UX-3456',
        },
    ];

    return (
        <section id="certificates" className="py-20 bg-white">
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
                            className="bg-gradient-to-br from-white to-blue-50 border border-gray-100 rounded-xl p-6 card-hover"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <Award className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">
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
                                    Credential ID: {cert.credentialId}
                                </span>
                                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                                    View Certificate
                                    <ExternalLink className="w-4 h-4 ml-1" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;