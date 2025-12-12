import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Banner = () => {

    const role: string[] = ["Front End", "Web", "MERN"]

    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Mail, href: '#contact', label: 'Email' },
    ];

    return (<>
        <div>
            <p>Available for opportunities</p>
            <div>
                <h1 className="text-5xl font-bold">Hi, I'm </h1>
                <h1 className="text-5xl text-blue-800 font-bold">{role[0]} <span className="text-black">Developer</span></h1>
                <h3>A passionate developer creating beautiful, functional web experiences with modern technologies and clean design principles.</h3>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
                <a
                    href="#projects"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg group"
                >
                    View Projects
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                    Get In Touch
                </a>
            </div>

            <div className="flex space-x-4 pt-8">
                {socialLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:shadow-md"
                        aria-label={link.label}
                    >
                        <link.icon className="w-6 h-6" />
                    </a>
                ))}
            </div>
        </div>
    </>)
};

export default Banner;
