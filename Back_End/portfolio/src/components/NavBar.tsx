import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../pages/ThemeContext';

interface NavItem {
    id: number;
    label: string;
    path: string;
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

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
            className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-50 shadow-sm dark:shadow-gray-900/50 border-b border-gray-200/50 dark:border-gray-800/50"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                            <span className="text-white font-bold text-xl">{'</>'}</span>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-gray-900 dark:text-white block">Portfolio</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Developer</span>
                        </div>
                    </Link>

                    <div className="flex items-center gap-4">
                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {Navitems.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.path}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${location.pathname === item.path
                                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                        }`}
                                >
                                    {item.label}
                                    {location.pathname === item.path && (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full"
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Theme Toggle */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleTheme}
                            className="relative w-12 h-6 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full p-1 transition-all duration-300"
                            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                        >
                            <motion.div
                                layout
                                className={`absolute w-4 h-4 rounded-full bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center ${theme === 'light' ? 'left-1' : 'left-7'
                                    }`}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            >
                                {theme === 'light' ? (
                                    <Sun className="w-2.5 h-2.5 text-yellow-500" />
                                ) : (
                                    <Moon className="w-2.5 h-2.5 text-blue-400" />
                                )}
                            </motion.div>
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden mt-4 overflow-hidden"
                    >
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-2 border border-gray-200 dark:border-gray-700">
                            {Navitems.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 mb-1 last:mb-0 ${location.pathname === item.path
                                        ? 'text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-900 shadow-sm'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-900/50'
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