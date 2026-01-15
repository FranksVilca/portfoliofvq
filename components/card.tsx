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
        <div className="max-w-sm w-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2">

            {/* Imagen */}
            <div className="relative h-48 ">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Contenido */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 mb-4 text-sm text-justify">{description}</p>
                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className={`px-3 py-1 text-xs font-medium rounded-lg border ${techColors[tech] ??
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
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center gap-2"
                >
                    <IoEyeSharp className="text-xl" />
                    View Demo
                </a>
            </div>
        </div>
    );
}
