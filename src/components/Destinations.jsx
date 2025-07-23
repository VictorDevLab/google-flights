
const Destinations = () => {
  const cheapFlights = [
    { city: 'New York', country: 'United States', price: 'KES 128,600', dates: 'Sep 29 – Oct 6', stops: '2 stops', duration: '23 hr', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=300&h=200&fit=crop' },
    { city: 'Cape Town', country: 'South Africa', price: 'KES 70,045', dates: 'Aug 26 – Sep 4', stops: '1 stop', duration: '10 hr 15 min', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=300&h=200&fit=crop' },
    { city: 'London', country: 'United Kingdom', price: 'KES 90,350', dates: 'Oct 12 – Oct 21', stops: '1 stop', duration: '25 hr 5 min', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&h=200&fit=crop' },
    { city: 'Singapore', country: 'Singapore', price: 'KES 98,475', dates: 'Aug 22 – Aug 24', stops: '', duration: '', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=300&h=200&fit=crop' }
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cheapFlights.map((flight, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
          <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${flight.image})` }}></div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-1">{flight.city}</h3>
            <p className="text-lg font-semibold text-gray-900 mb-1">{flight.price}</p>
            <p className="text-sm text-gray-600 mb-2">{flight.dates}</p>
            {flight.stops && (
              <p className="text-xs text-gray-500">{flight.stops} · {flight.duration}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Destinations