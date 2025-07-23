import { useState } from 'react';
import Destinations from "./Destinations"

const ExploreMap = () => {
    const [activeTab, setActiveTab] = useState('Nairobi');

    return (
        <div className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
                <h2 className="text-xl font-normal text-gray-900">Find cheap flights from Nairobi to anywhere</h2>
                <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-white text-xs">?</div>
            </div>
            <div className="flex space-x-8 border-b border-gray-200 mb-6">
                {['Nairobi', 'London', 'Australia'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2 cursor-pointer text-sm font-medium transition-colors ${activeTab === tab
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-600 hover:text-gray-900'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            {/* World Map */}
            <div className="bg-gradient-to-b from-blue-100 to-blue-50 rounded-lg p-8 mb-6 relative overflow-hidden h-64">
                <div className="absolute inset-0 opacity-100">
                    <img src="/worldMap.png" alt="world map" className="" />
                </div>
                <div className="relative z-10 text-center">
                    <button className="bg-white mt-22 text-blue-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        Explore destinations
                    </button>
                </div>
            </div>

            <Destinations />
        </div>
    )
}

export default ExploreMap