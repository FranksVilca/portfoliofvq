import { GrFolderCycle } from "react-icons/gr";


export default function Services() {
    return (
        <div>
            <div className="bg-bag w-full px-20 py-20">
                <h2 className="text-[#111827] text-3xl font-semibold">SERVICES</h2>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-8 pt-8">
                        <div className="flex gap-8">
                            <div className="h-10 w-10 flex items-center justify-center text-5xl"><GrFolderCycle /></div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-primary-hover text-xl font-semibold">Programing</h4>
                                <p className="text-text">desarrollo de soluciones eficientes y estructuradas.</p>
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <div className="h-10 w-10 flex items-center justify-center text-5xl"><GrFolderCycle /></div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-primary-hover text-xl font-semibold">Data Analysis</h4>
                                <p className="text-text">análisis y limpieza de datos para la toma de decisiones.</p>
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <div className="h-10 w-10 flex items-center justify-center text-5xl"><GrFolderCycle /></div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-primary-hover text-xl font-semibold">Front-end Web Developer</h4>
                                <p className="text-text">interfaces modernas, responsivas y funcionales.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 pt-8">
                        <div className="flex gap-8">
                            <div className="h-10 w-10 flex items-center justify-center text-5xl"><GrFolderCycle /></div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-primary-hover text-xl font-semibold">Data Science</h4>
                                <p className="text-text">exploración y modelado de datos para obtener insights.</p>
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <div className="h-10 w-10 flex items-center justify-center text-5xl"><GrFolderCycle /></div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-primary-hover text-xl font-semibold">Dashboards</h4>
                                <p className="text-text">visualización clara e interactiva de información.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}