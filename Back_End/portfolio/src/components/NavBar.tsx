import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
    id: number;
    label: string;
    path: string;
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const Navitems: NavItem[] = [
        { id: 1, label: "Home", path: "/" },
        { id: 2, label: "Skills", path: "/skills" },
        { id: 3, label: "Projects", path: "/projects" },
        { id: 4, label: "Education", path: "/education" },
        { id: 5, label: "Certificates", path: "/certificates" },
        { id: 6, label: "Contact", path: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100"
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-300 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                            <span className="text-white font-bold text-lg">{'</>'}</span>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            Portfolio
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {Navitems.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                className={`relative text-sm font-medium transition-colors duration-300 ${location.pathname === item.path
                                    ? 'text-blue-600'
                                    : 'text-gray-600 hover:text-blue-600'
                                    }`}
                            >
                                {item.label}
                                {location.pathname === item.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden mt-4 pb-4"
                    >
                        <div className="flex flex-col space-y-4">
                            {Navitems.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === item.path
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;