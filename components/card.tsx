import { IoEyeSharp } from "react-icons/io5";

interface PortfolioCardProps {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    url: string;
}

const techColors: Record<string, string> = {
    React: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
    Tailwind: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    Laravel: "bg-red-500/10 text-red-400 border-red-500/20",
    "Next.js": "bg-black/20 text-white border-white/20",
    Firebase: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

export default function PortfolioCard({
    image,
    title,
    description,
    technologies,
    url,
}: PortfolioCardProps) {
    return (
        <div className="max-w-sm w-full bg-gray-800 rounded-2xl md:rounded-2xl rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2">

            {/* Imagen */}
            <div className="relative h-48 md:h-48 h-40">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Contenido */}
            <div className="p-6 md:p-6 p-4">
                <h3 className="text-xl md:text-xl text-lg font-bold text-white mb-2 md:mb-2 mb-1.5">{title}</h3>
                <p className="text-gray-400 mb-4 md:mb-4 mb-3 text-sm md:text-sm text-xs text-justify">{description}</p>
                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 md:gap-2 gap-1.5 mb-6 md:mb-6 mb-4">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className={`px-3 md:px-3 px-2.5 py-1 md:py-1 py-0.5 text-xs md:text-xs text-[10px] font-medium rounded-lg border ${techColors[tech] ??
                                "bg-gray-500/10 text-gray-400 border-gray-500/20"
                                }`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Botón */}
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2.5 md:py-2.5 py-2 px-4 md:px-4 px-3 rounded-lg flex items-center justify-center gap-2 md:text-base text-sm"
                >
                    <IoEyeSharp className="text-xl md:text-xl text-lg" />
                    View Demo
                </a>
            </div>
        </div>
    );
}