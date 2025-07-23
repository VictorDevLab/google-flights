const PopularDestinations = () => {
    const popularDestinations = [
        { city: 'London', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=150&h=100&fit=crop' },
        { city: 'Tokyo', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=150&h=100&fit=crop' },
        { city: 'Milan', image: 'https://images.unsplash.com/photo-1543832923-44667a44c804?w=150&h=100&fit=crop' },
        { city: 'New York', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=150&h=100&fit=crop' },
        { city: 'Paris', image: 'https://media.istockphoto.com/id/2119799972/photo/spring-evening-view-of-the-eiffel-tower-in-paris.webp?a=1&b=1&s=612x612&w=0&k=20&c=0a1gxJfUcshqSRkHW_sQ-9NPDh9o3c8ExpB0YG67RVk=' },
        { city: 'Washington', image: 'https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=150&h=100&fit=crop' },
        { city: 'Istanbul', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=150&h=100&fit=crop' }
    ];
    return (
        <div className="mb-12">
            <h2 className="text-xl font-normal text-gray-900 mb-6">Popular destinations from Nairobi</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
                {popularDestinations.map((dest, index) => (
                    <div key={index} className="flex-shrink-0 relative cursor-pointer group">
                        <div className="w-32 h-20 bg-cover bg-center rounded-lg overflow-hidden"
                            style={{ backgroundImage: `url(${dest.image})` }}>
                            <div className="absolute inset-0 bg-opacity-30 group-hover:bg-opacity-20 transition-all"></div>
                            <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                                {dest.city}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularDestinations;