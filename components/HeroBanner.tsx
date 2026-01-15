export default function HeroBanner({ id }: { id: string }) {
    return (
        <div className="w-full py-20 md:py-20 py-12" id={id}>
            <div className="flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-5xl md:text-5xl text-3xl font-bold text-primary">
                    Frank's Vilca
                </h1>
                <h1 className="text-5xl md:text-5xl text-3xl font-bold text-primary">
                    Quispe
                </h1>
                <p className="py-10 md:py-10 py-6 max-w-xl md:text-base text-sm text-gray-600">
                    👋 Hi! I'm a systems engineering student and developer with a strong
                    interest in data analysis and web development. I enjoy building clean
                    interfaces and turning data into clear, useful insights through code
                    and visualization.
                </p>
                <div className="flex md:flex-row flex-col gap-6 md:gap-6 gap-4 w-full md:w-auto px-4 md:px-0">
                    <a href="#contact" className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-6 py-2 md:py-2 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 w-full md:w-auto">
                        Contact <span className="text-lg">➤</span>
                    </a>
                    <a href="/CV_FranksVilca_2026.pdf" className="px-8 py-2 md:py-2 py-3 font-semibold rounded-md border-2 border-[#E5E7EB] hover:border-primary-hover hover:text-primary-hover w-full md:w-auto text-center">
                        Download CV
                    </a>
                </div>

            </div>
        </div>
    );
}