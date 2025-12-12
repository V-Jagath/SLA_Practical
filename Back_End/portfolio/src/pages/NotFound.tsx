import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-lg"
            >
                <div className="relative mb-8">
                    <div className="text-9xl font-bold text-gray-200 select-none">404</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl font-bold text-gray-700">Page Not Found</div>
                    </div>
                </div>

                <p className="text-gray-600 mb-8 text-lg">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                        <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="group inline-flex items-center justify-center px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all duration-300 hover:scale-[1.02]"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Go Back
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;