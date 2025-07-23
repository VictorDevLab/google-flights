import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'How can I find last-minute flight deals?',
            answer: 'For last-minute deals, try booking 1-3 weeks before departure. Use flexible date searches, check budget airlines directly, and consider flying on weekdays. Apps like Hopper and Last Minute Travel can alert you to sudden price drops. Also, check airline social media for flash sales.'
        },
        {
            question: 'How can I find cheap flights for a weekend getaway?',
            answer: 'Book weekend trips 6-8 weeks in advance for best prices. Compare Friday vs Saturday departures, as Friday flights are often cheaper. Consider nearby airports and be flexible with your exact weekend dates. Tuesday afternoons typically have the lowest booking prices.'
        },
        {
            question: 'How can I find flight deals if my travel plans are flexible?',
            answer: 'Use "Everywhere" or "Flexible dates" search options on sites like Skyscanner and Google Flights. Set up price alerts for multiple destinations. Consider shoulder seasons (spring/fall) for better deals. Use airline award calendars to find the cheapest travel dates.'
        },
        {
            question: 'How can I find cheap flights to anywhere?',
            answer: 'Use "Explore" features on Google Flights or Skyscanner\'s "Everywhere" search. Set your departure airport and browse destinations by price. Follow "Secret Flying" and "Scott\'s Cheap Flights" for mistake fares and deals. Consider multi-city trips that might be cheaper than direct flights.'
        },
        {
            question: 'How can I get flight alerts for my trip?',
            answer: 'Set up price alerts on Google Flights, Kayak, or Skyscanner by entering your route and dates. Use apps like Hopper for predictions on when to buy. Many airlines offer direct email alerts for route-specific deals. Set alerts 2-8 weeks before your ideal travel dates.'
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mb-12">
            <h2 className="text-xl font-normal text-gray-900 mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200">
                        <button 
                            className="flex items-center justify-between w-full text-left py-4 hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="text-gray-900 font-medium">{faq.question}</span>
                            <ChevronDown 
                                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                                    openIndex === index ? 'transform rotate-180' : ''
                                }`} 
                            />
                        </button>
                        {openIndex === index && (
                            <div className="pb-4 pl-0">
                                <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faqs