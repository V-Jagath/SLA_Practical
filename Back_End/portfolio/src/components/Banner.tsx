import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTheme } from '../pages/ThemeContext';

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

const Banner = () => {
  const { theme } = useTheme();
  const socialLinks: SocialLink[] = [
    { icon: Github, href: 'https://github.com/v-jagath', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jagathdevloper', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jagath9360@gmail.com', label: 'Email' },
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Frontend Developer', 'Web Developer', 'MERN Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-gray-900 dark:via-gray-800/20 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-blue-400 dark:bg-blue-500 rounded-full animate-ping opacity-75" />
              </div>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                Available for opportunities
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold"
              >
                <span className="text-gray-900 dark:text-white">Hi, I'm</span>
                <span className="block mt-2">
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 dark:from-blue-500 dark:via-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                      Jagath
                    </span>
                    <Sparkles className="absolute -top-4 -right-6 w-8 h-8 text-blue-300 dark:text-blue-500 animate-float" />
                  </span>
                </span>
              </motion.h1>
              
              <div className="h-16 flex items-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300">I am a</span>
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="ml-3 relative"
                >
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">
                    {roles[roleIndex]}
                  </span>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600/20 to-blue-400/20 dark:from-blue-500/20 dark:to-blue-300/20" />
                </motion.div>
              </div>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              Specializing in React, Next.js, and modern web technologies. 
              I create beautiful, performant web experiences with clean code and thoughtful design.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 dark:from-blue-600 dark:to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-3 text-lg font-medium">
                  View Projects
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="text-lg font-medium">Get In Touch</span>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    aria-label={link.label}
                  >
                    <link.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-200 dark:from-blue-600 dark:to-blue-400 rounded-full blur-3xl opacity-20 dark:opacity-10 animate-float" />
              
              {/* Main circle with gradient border */}
              <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-600 dark:to-blue-400">
                <div className="w-full h-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-full" />
              </div>
              
              {/* Image container */}
              <div className="absolute inset-8 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-200 dark:from-blue-600 dark:to-blue-800 flex items-center justify-center relative">
                  <span className="text-white text-5xl font-bold relative z-10">JD</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent dark:from-gray-900/10" />
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-300 dark:from-blue-600 dark:to-blue-400 rounded-2xl rotate-12 shadow-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-200 dark:from-blue-500 dark:to-blue-300 rounded-xl -rotate-12 shadow-2xl"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              />
              
              {/* Decorative dots */}
              <div className="absolute top-1/4 -left-2 w-4 h-4 bg-blue-400 dark:bg-blue-500 rounded-full opacity-70" />
              <div className="absolute bottom-1/3 -right-2 w-3 h-3 bg-blue-300 dark:bg-blue-600 rounded-full opacity-70" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;