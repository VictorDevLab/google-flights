import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PopularRoutes from './components/PopularRoutes';
import Faqs from './components/Faqs';
import PopularDestinations from './components/PopularDestinations';
import ToolsAndTips from './components/ToolsAndTips';
import ExploreMap from './components/ExploreMap';
import FlightSearchForm from './components/FlightSearchForm';


const App = () => {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FlightSearchForm />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <ExploreMap />
        <ToolsAndTips />
        <PopularDestinations />
        <Faqs />
        <PopularRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;