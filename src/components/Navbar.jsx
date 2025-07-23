import { Grid3X3, User } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                    <div className="w-16 h-5 rounded-sm flex items-center justify-center">
                        <img src="/google.png" alt="Google Logo" />
                    </div>
                </div>

                <nav className="hidden md:flex items-center space-x-2 text-sm">
                    <a href="#" className="text-gray-600 hover:text-gray-900 px-5 py-2 border border-gray-500 rounded-full">Travel</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 px-5 py-2 border border-gray-500 rounded-full">Explore</a>
                    <a href="#" className="text-blue-600 font-medium px-5 py-2 border border-blue-500 rounded-full">Flights</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 px-5 py-2 border border-gray-500 rounded-full">Hotels</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 px-5 py-2 border border-gray-500 rounded-full">Vacation rentals</a>
                </nav>
            </div>

            <div className="flex items-center space-x-4">
                <Grid3X3 className="w-6 h-6 text-gray-600 cursor-pointer" />
                <User className="w-8 h-8 text-gray-600 cursor-pointer" />
            </div>
        </header>
    )
}

export default Navbar