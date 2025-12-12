import { Code2, Heart } from 'lucide-react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SocialLink {
    icon: React.ComponentType<{ className?: string }>;
    href: string;
    label: string;
}

interface FooterLink {
    label: string;
    path: string;
}

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks: SocialLink[] = [
        { icon: Github, href: 'https://github.com/v-jagath', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/jagathdevloper', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:jagath9360@gmail.com', label: 'Email' },
    ];

    const footerLinks: FooterLink[] = [
        { label: "Home", path: "/" },
        { label: "Skills", path: "/skills" },
        { label: "Projects", path: "/projects" },
        { label: "Education", path: "/education" },
        { label: "Certificates", path: "/certificates" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-300 rounded-lg flex items-center justify-center">
                                <Code2 className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">Portfolio</span>
                        </div>
                        <p className="text-gray-400">
                            Building digital experiences with modern web technologies and clean design.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.path}
                                    className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4 mb-6">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    aria-label={link.label}
                                >
                                    <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm">
                            Let's build something amazing together!
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p>© {currentYear} Jagath. All rights reserved.</p>
                        <p className="flex items-center justify-center">
                            Made with <Heart className="w-4 h-4 mx-1 text-red-400 fill-current animate-pulse" /> using React & Tailwind CSS
                        </p>
                        <p className="text-gray-400">
                            Designed with ❤️ for the web
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;