import { Code2, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center space-x-2 mb-6 md:mb-0">
                        <Code2 className="w-6 h-6 text-blue-400" />
                        <span className="text-xl font-semibold text-white">Portfolio</span>
                    </div>

                    <div className="text-center mb-6 md:mb-0">
                        <p className="flex items-center justify-center">
                            Made with <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" /> using React & Tailwind
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                            © {currentYear} All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white transition-colors">GitHub</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;