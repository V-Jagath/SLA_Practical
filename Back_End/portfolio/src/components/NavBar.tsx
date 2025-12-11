import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

interface NavbarProps {
    activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Education' },
        { id: 'certificates', label: 'Certificates' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#home" className="flex items-center space-x-2 group">
                        <Code2 className="w-8 h-8 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-xl font-semibold text-gray-800">Portfolio</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`nav-link ${activeSection === item.id
                                    ? 'text-blue-600 font-medium'
                                    : 'text-gray-600'
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fade-in">
                        <div className="flex flex-col space-y-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-4 py-3 rounded-lg transition-colors ${activeSection === item.id
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'hover:bg-gray-50'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;