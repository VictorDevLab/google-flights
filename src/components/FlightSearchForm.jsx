import { useState } from 'react';
import axios from 'axios'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Plane, ArrowLeftRight, MapPin, Calendar, Search, User } from 'lucide-react';
import ClipLoader from 'react-spinners/ClipLoader';
import Flights from './Flights';
import { flightsData } from '../data';

const FlightSearchForm = () => {
    const [searchData, setSearchData] = useState({
        from: 'Nairobi',
        to: '',
        departDate: new Date(),
        returnDate: new Date(),
        passengers: 1,
        tripType: 'Round trip',
        cabin: 'Economy'
    });
    const [loading, setLoading] = useState(false);
    const [flights, setFlights] = useState([]);

    const handleInputChange = (field, value) => {
        setSearchData(prev => ({ ...prev, [field]: value }));
    };

    const swapLocations = () => {
        setSearchData(prev => ({
            ...prev,
            from: prev.to === 'Where to?' ? prev.from : prev.to,
            to: prev.from
        }));
    };

    const handleSearch = async (event) => {
        event.preventDefault()
        const options = {
            method: 'GET',
            url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights',
            params: {
                originSkyId: searchData.from,
                destinationSkyId: searchData.to,
                originEntityId: searchData.from,
                destinationEntityId: searchData.to,
                date: searchData.departDate.toISOString().split('T')[0],
                returnDate: searchData.returnDate.toISOString().split('T')[0],
                adults: searchData.passengers,
                cabinClass: 'economy',
                sortBy: 'best',
                currency: 'USD',
                market: 'en-US',
                countryCode: 'US'
            },
            headers: {
                'x-rapidapi-key': 'c82b4f2632msh3c42e21e3e3fed6p175890jsn8b99fc39b645',
                'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
            }
        };
        setLoading(true);
        try {
            const response = await axios.request(options);
            console.log(response.data)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
            setTimeout(() => {
                setLoading(false);
                setFlights(flightsData);
            }, 1000);
        }
    };

    return (
        <div className="relative overflow-hidden">
                <img
                    src="https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg"
                    alt="Flight illustration"
                    className="absolute top-[-144px] sm:top-[-120px] md:top-[-102px] w-full h-96 bg-no-repeat bg-cover bg-center z-0"
                />
            <div className="relative max-w-6xl mx-auto px-4 py-16 mt-12 md:mt-42">
                <h1 className="text-5xl md:text-6xl font-normal text-gray-900 text-center mb-12">Flights</h1>
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                    <div className="flex items-center gap-6 mb-6">
                        <select
                            className="text-gray-500 font-medium bg-transparent focus:outline-none cursor-pointer w-full md:w-auto"
                            value={searchData.tripType}
                            onChange={e => handleInputChange('tripType', e.target.value)}
                        >
                            <option>Round trip</option>
                            <option>One way</option>
                            <option>Multi-city</option>
                        </select>
                        <div className='flex items-center space-x-2 w-full md:w-auto'>
                            <User className="w-5 h-5 text-gray-500" />
                            <select
                                className="text-gray-500 font-medium bg-transparent focus:outline-none cursor-pointer w-full md:w-auto"
                                value={searchData.passengers}
                                onChange={e => handleInputChange('passengers', parseInt(e.target.value))}
                            >
                                {[1, 2, 3, 4, 5, 6].map(n => (
                                    <option key={n} value={n}>{n}</option>
                                ))}
                            </select>
                        </div>
                        <select
                            className="text-gray-500 font-medium bg-transparent focus:outline-none cursor-pointer w-full md:w-auto"
                            value={searchData.cabin}
                            onChange={e => handleInputChange('cabin', e.target.value)}
                        >
                            <option>Premium economy</option>
                            <option>Economy</option>
                            <option>Business</option>
                            <option>First</option>
                        </select>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                        <div className="flex items-center gap-4 w-full">
                            <div className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg w-full">
                                <Plane className="w-5 h-5 text-gray-400 -rotate-45" />
                                <input
                                    value={searchData.from}
                                    onChange={e => handleInputChange('from', e.target.value)}
                                    className="flex-1 bg-transparent focus:outline-none w-full"
                                />
                            </div>
                            <div className="flex justify-center items-center border border-gray-600 p-2 rounded-full">
                                <button
                                    onClick={swapLocations}
                                    className="p-0 rounded-full hover:bg-gray-100 transition cursor-pointer"
                                >
                                    <ArrowLeftRight className="w-4 h-4 text-gray-600" />
                                </button>
                            </div>
                            <div className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg w-full">
                                <MapPin className="w-5 h-5 text-gray-400" />
                                <input
                                    value={searchData.to}
                                    onChange={e => handleInputChange('to', e.target.value)}
                                    placeholder="Where to?"
                                    className="flex-1 bg-transparent focus:outline-none w-full"
                                />
                            </div>
                        </div>
                        <div className="flex gap-2 mt-4 md:mt-0 w-full">
                            <div className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg w-full">
                                <Calendar className="w-5 h-5 text-gray-400" />
                                <DatePicker
                                    selected={searchData.departDate}
                                    onChange={(date) => handleInputChange('departDate', date)}
                                    placeholderText="Depart"
                                    className="flex-1 bg-transparent focus:outline-none w-full"
                                />
                            </div>
                            <div className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg w-full">
                                <DatePicker
                                    selected={searchData.returnDate}
                                    onChange={(date) => handleInputChange('returnDate', date)}
                                    placeholderText="Return"
                                    className="flex-1 bg-transparent focus:outline-none w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={handleSearch}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full cursor-pointer font-medium flex items-center space-x-2"
                        >
                            <Search className="w-4 h-4" />
                            <span>Explore</span>
                        </button>
                    </div>
                </div>
                {loading && (
                    <div className="flex justify-center my-10">
                        <ClipLoader size={35} color="#2563eb" />
                    </div>
                )}
                {!loading && flights.length > 0 && (
                    <Flights flights={flightsData} />
                )}
            </div>
        </div>
    );
};

export default FlightSearchForm;
