export default function HeroBanner() {
    return (
        <div className="w-full py-20">
            <div className="flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-5xl font-bold text-[#111827]">
                    Frank's Vilca
                </h1>
                <h1 className="text-5xl font-bold text-[#111827]">
                    Quispe
                </h1>
                <p className="py-10 max-w-xl text-gray-600">
                    👋 Hi! I’m a systems engineering student and developer with a strong
                    interest in data analysis and web development. I enjoy building clean
                    interfaces and turning data into clear, useful insights through code
                    and visualization.
                </p>
                <div className="flex gap-6">
                    <a href="#contact" className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-95">
                        Contact <span className="text-lg">➤</span>
                    </a>
                    <a href="#about" className="px-8 py-2 font-semibold rounded-md border-2 border-[#E5E7EB] hover:border-primary-hover hover:text-primary-hover">
                        Download CV
                    </a>
                </div>

            </div>
        </div>
    );
}
