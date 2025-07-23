import { Calendar, Clock, Star } from 'lucide-react';

const ToolsAndTips = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
                <h2 className="text-xl font-normal text-gray-900 mb-6">Useful tools to help you find the best deals</h2>

                <div className="space-y-6">
                    <div className="flex space-x-4">
                        <Calendar className="w-12 h-12 text-blue-600 mt-1" />
                        <div>
                            <h3 className="font-medium text-gray-900 mb-2">Find the cheapest days to fly</h3>
                            <p className="text-sm text-gray-600">The Date grid and Price graph make it easy to see the best flight deals</p>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                            <div className="w-6 h-6 bg-blue-600 rounded"></div>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900 mb-2">See the whole picture with price insights</h3>
                            <p className="text-sm text-gray-600">Get helpful and trend data that show you when to book to get the best price on your flight</p>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                            <Clock className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900 mb-2">Track prices for a trip</h3>
                            <p className="text-sm text-gray-600">Not ready to book yet? Observe price changes for a route or flight and get notified when prices drop</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-normal text-gray-900 mb-6">Insightful tools help you choose your trip dates</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-sm text-gray-600 mb-4">
                        If your travel plans are flexible, use the form above to start searching for a specific trip.
                        Then play around with the <strong>Date grid</strong> and <strong>Price graph</strong> options on the Search page to
                        find the cheapest days to go to your destination — and book when you see round trips.
                    </p>
                    <div className="grid grid-cols-7 gap-2 text-xs">
                        <div className="text-center p-2">S</div>
                        <div className="text-center p-2">M</div>
                        <div className="text-center p-2">T</div>
                        <div className="text-center p-2">W</div>
                        <div className="text-center p-2">T</div>
                        <div className="text-center p-2">F</div>
                        <div className="text-center p-2">S</div>

                        {Array.from({ length: 35 }, (_, i) => (
                            <div key={i} className="text-center p-2 relative">
                                {i < 31 && (
                                    <>
                                        <span className="text-gray-600">{i + 1}</span>
                                        {[4, 11, 18, 25].includes(i) && (
                                            <Star className="w-3 h-3 text-green-600 absolute bottom-0 left-1/2 transform -translate-x-1/2" />
                                        )}
                                        {[7, 14].includes(i) && (
                                            <div className="w-2 h-2 bg-red-500 rounded-full absolute top-0 right-0"></div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolsAndTips