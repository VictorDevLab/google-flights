import { ChevronDown } from 'lucide-react';

const Flights = ({ flights }) => {

    return (
       <div className="mt-10 space-y-3">
      <h2 className="text-xl font-semibold text-gray-700">Departing Flights</h2>

      {flights.map((flight) => (
        <div key={flight.id} className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
          <div className="p-3 md:p-4">
            <div className="block md:hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-lg">
                    {flight.logo}
                  </div>
                  <span className="text-sm text-gray-600">{flight.airline}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-right">
                    <div className="text-lg font-semibold text-green-700">{flight.price}</div>
                    <div className="text-xs text-gray-600">{flight.priceType}</div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-medium text-gray-900">
                    {flight.departureTime}
                  </span>
                  <span className="text-gray-500">–</span>
                  <span className="text-lg font-medium text-gray-900">
                    {flight.arrivalTime}
                    {flight.nextDay && <sup className="text-sm">{flight.nextDay}</sup>}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{flight.duration}</div>
                  <div className="text-xs text-gray-600">{flight.route}</div>
                </div>
              </div>

              {/* Bottom row - Stops and Emissions */}
              <div className="flex items-center justify-between text-sm">
                <div>
                  <span className="font-medium text-gray-900">{flight.stops}</span>
                  {flight.stopDuration && (
                    <div className="text-xs text-gray-600">{flight.stopDuration}</div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-900">{flight.emissions}</div>
                  <div className={`text-xs ${flight.emissionChangeColor}`}>
                    {flight.emissionChange}
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-lg">
                      {flight.logo}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-medium text-gray-900">
                      {flight.departureTime}
                    </span>
                    <span className="text-gray-500">–</span>
                    <span className="text-lg font-medium text-gray-900">
                      {flight.arrivalTime}
                      {flight.nextDay && <sup className="text-sm">{flight.nextDay}</sup>}
                    </span>
                  </div>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-sm font-medium text-gray-900">{flight.duration}</div>
                  <div className="text-sm text-gray-600">{flight.route}</div>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-sm font-medium text-gray-900">{flight.stops}</div>
                  {flight.stopDuration && (
                    <div className="text-sm text-gray-600">{flight.stopDuration}</div>
                  )}
                </div>
                <div className="flex-1 text-center">
                  <div className="text-sm font-medium text-gray-900">{flight.emissions}</div>
                  <div className={`text-sm ${flight.emissionChangeColor}`}>
                    {flight.emissionChange}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <div className="text-lg font-semibold text-green-700">{flight.price}</div>
                    <div className="text-sm text-gray-600">{flight.priceType}</div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="mt-2">
                <span className="text-sm text-gray-600">{flight.airline}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    );
};

export default Flights;