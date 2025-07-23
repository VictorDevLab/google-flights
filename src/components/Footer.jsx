const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center space-x-6 text-sm text-gray-600 mb-4">
                    <span>🌍 Language: English (United States)</span>
                    <span>📍 Location: Kenya</span>
                    <span>💱 Currency: KES</span>
                </div>

                <p className="text-xs text-gray-500 text-center mb-4">
                    Current language and currency options applied. English (United States) - Kenya - KES.
                    Displayed currencies may differ from the currencies used to purchase flights. Learn more
                </p>

                <div className="flex flex-wrap items-center justify-center space-x-6 text-xs text-blue-600">
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Terms</a>
                    <a href="#" className="hover:underline">Join user studies</a>
                    <a href="#" className="hover:underline">Feedback</a>
                    <a href="#" className="hover:underline">Help Center</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer