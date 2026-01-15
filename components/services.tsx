import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceAnalytics } from "react-icons/tb";
import { MdOutlineWeb } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export default function Services({ id }: { id: string }) {
    return (
        <div>
            <div className="bg-bag w-full px-20 md:px-20 px-6 py-20 md:py-20 py-12" id={id}>
                <h2 className="text-primary text-3xl md:text-3xl text-2xl font-semibold">SERVICES</h2>
                <div className="flex md:flex-row flex-col md:justify-between md:gap-0 gap-8">
                    <div className="flex flex-col gap-8 md:gap-8 gap-6 pt-8">
                        <div className="flex gap-8 md:gap-8 gap-4">
                            <div className="h-10 w-10 md:h-10 md:w-10 h-8 w-8 flex items-center justify-center text-5xl md:text-5xl text-3xl flex-shrink-0"><FaLaptopCode /></div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-primary-hover text-xl md:text-xl text-lg font-semibold">Programing</h4>
                                <p className="text-text-secondary md:text-base text-sm">Development of efficient and structured solutions.</p>
                            </div>
                        </div>
                        <div className="flex gap-8 md:gap-8 gap-4">
                            <div className="h-10 w-10 md:h-10 md:w-10 h-8 w-8 flex items-center justify-center text-5xl md:text-5xl text-3xl flex-shrink-0"><TbDeviceAnalytics /></div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-primary-hover text-xl md:text-xl text-lg font-semibold">Data Analysis</h4>
                                <p className="text-text-secondary md:text-base text-sm">Data cleaning and analysis to support informed decision-making.</p>
                            </div>
                        </div>
                        <div className="flex gap-8 md:gap-8 gap-4">
                            <div className="h-10 w-10 md:h-10 md:w-10 h-8 w-8 flex items-center justify-center text-5xl md:text-5xl text-3xl flex-shrink-0"><MdOutlineWeb /></div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-primary-hover text-xl md:text-xl text-lg font-semibold">Front-end Web Developer</h4>
                                <p className="text-text-secondary md:text-base text-sm">Modern, responsive, and functional user interfaces.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 md:gap-8 gap-6 pt-8 md:pt-8 pt-0">
                        <div className="flex gap-8 md:gap-8 gap-4">
                            <div className="h-10 w-10 md:h-10 md:w-10 h-8 w-8 flex items-center justify-center text-5xl md:text-5xl text-3xl flex-shrink-0"><FaDatabase /></div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-primary-hover text-xl md:text-xl text-lg font-semibold">Data Science</h4>
                                <p className="text-text-secondary md:text-base text-sm">Data exploration and modeling to uncover actionable insights.</p>
                            </div>
                        </div>
                        <div className="flex gap-8 md:gap-8 gap-4">
                            <div className="h-10 w-10 md:h-10 md:w-10 h-8 w-8 flex items-center justify-center text-5xl md:text-5xl text-3xl flex-shrink-0"><MdDashboard /></div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-primary-hover text-xl md:text-xl text-lg font-semibold">Dashboards</h4>
                                <p className="text-text-secondary md:text-base text-sm">Clear and interactive information visualization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}