import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, User, MessageCircle, Clock, Globe } from 'lucide-react';
import { useTheme } from '../pages/ThemeContext';

interface ContactInfo {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: string;
    href: string;
    color: string;
}

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const { theme } = useTheme();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        setSubmitted(true);
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo: ContactInfo[] = [
        {
            icon: Mail,
            label: 'Email',
            value: 'jagath9360@gmail.com',
            href: 'mailto:jagath9360@gmail.com',
            color: 'from-blue-500 to-blue-400'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 9360270984',
            href: 'tel:+919360270984',
            color: 'from-green-500 to-green-400'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'K K Nagar, Chennai',
            href: 'https://maps.google.com/?q=Chennai',
            color: 'from-purple-500 to-purple-400'
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
                        <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                            Let's Connect
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Get In <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Contact Information
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Feel free to reach out through any of these channels. I typically respond within 24 hours.
                            </p>

                            <div className="space-y-4">
                                {contactInfo.map((info) => (
                                    <a
                                        key={info.label}
                                        href={info.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300"
                                    >
                                        <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color}`}>
                                            <info.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                                            <p className="text-gray-800 dark:text-white font-medium">{info.value}</p>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-400 dark:to-blue-300" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Availability */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl border border-blue-200 dark:border-blue-800"
                        >
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Response Time
                                    </h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        • Within 24 hours for emails
                                        <br />
                                        • Within 2 hours for urgent calls
                                        <br />
                                        • Available for freelance projects
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="relative inline-block mb-6">
                                        <CheckCircle className="w-16 h-16 text-green-500 dark:text-green-400" />
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="absolute inset-0 bg-green-500/20 rounded-full blur-xl"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Message Sent Successfully!
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Thank you for your message. I'll get back to you soon.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            <span className="flex items-center gap-2">
                                                <User className="w-4 h-4" />
                                                Your Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            <span className="flex items-center gap-2">
                                                <Mail className="w-4 h-4" />
                                                Email Address
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            <span className="flex items-center gap-2">
                                                <MessageCircle className="w-4 h-4" />
                                                Your Message
                                            </span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Tell me about your project, timeline, and requirements..."
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </motion.button>

                                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 pt-4">
                                        By submitting this form, you agree to our privacy policy.
                                    </p>
                                </form>
                            )}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="mt-8 text-center"
                        >
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Or connect with me on social media
                            </p>
                            <div className="flex justify-center gap-4">
                                <a
                                    href="https://github.com/v-jagath"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/jagathdevloper"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;