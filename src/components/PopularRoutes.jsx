const PopularRoutes = () => {
    const popularRoutes = [
        { from: 'New York', to: 'London', link: 'Flights from New York to London' },
        { from: 'New York', to: 'Berlin', link: 'Flights from New York to Berlin' },
        { from: 'Toronto', to: 'London', link: 'Flights from Toronto to London' },
        { from: 'London', to: 'Tokyo', link: 'Flights from London to Tokyo' },
        { from: 'New York', to: 'Los Angeles', link: 'Flights from New York to Los Angeles' },
        { from: 'London', to: 'Istanbul', link: 'Flights from London to Istanbul' },
        { from: 'London', to: 'Berlin', link: 'Flights from London to Berlin' },
        { from: 'New York', to: 'Paris', link: 'Flights from New York to Paris' },
        { from: 'Montreal', to: 'Paris', link: 'Flights from Montreal to Paris' },
        { from: 'New York', to: 'Milan', link: 'Flights from New York to Milan' },
        { from: 'Madrid', to: 'Rome', link: 'Flights from Madrid to Rome' },
        { from: 'Paris', to: 'Marrakech', link: 'Flights from Paris to Marrakech' },
        { from: 'Paris', to: 'Bangkok', link: 'Flights from Paris to Bangkok' },
        { from: 'London', to: 'Paris', link: 'Flights from London to Paris' },
        { from: 'London', to: 'Milan', link: 'Flights from London to Milan' },
        { from: 'London', to: 'Delhi', link: 'Flights from London to Delhi' },
        { from: 'London', to: 'Dubai', link: 'Flights from London to Dubai' },
        { from: 'San Paulo', to: 'London', link: 'Flights from San Paulo to London' },
        { from: 'New York', to: 'Orlando', link: 'Flights from New York to Orlando' },
        { from: 'Chicago', to: 'Paris', link: 'Flights from Chicago to Paris' },
        { from: 'Melbourne', to: 'London', link: 'Flights from Melbourne to London' }
    ];
    return (
        <div className="mb-12">
            <h2 className="text-xl font-normal text-gray-900 mb-6">Find cheap flights on popular routes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2">
                {popularRoutes.map((route, index) => (
                    <div key={index} className="py-2">
                        <a href="#" className="text-blue-600 hover:underline text-sm">
                            {route.link}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularRoutes