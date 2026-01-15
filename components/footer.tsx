import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            <div className="bg-secondary pt-5 md:pt-5 pt-6 text-white px-10 md:px-10 px-6 pb-4 md:pb-0">
                <div className="flex md:flex-row flex-col md:justify-between md:items-start items-center md:gap-0 gap-6">
                    <div className="md:text-left text-center">
                        <p className="font-semibold md:text-base text-sm">Frank's Javier VIlca Quispe</p>
                        <p className="md:text-base text-xs">franksjaviervilcaquispe@gmail.com</p>
                    </div>
                    <div className="flex gap-3 md:gap-3 gap-4">
                        <a href="https://github.com/FranksVilca" className="border border-white rounded-full h-11 w-11 md:h-11 md:w-11 h-10 w-10 flex justify-center items-center text-2xl md:text-2xl text-xl hover:bg-black hover:text-white"><PiGithubLogoFill /></a>
                        <a href="https://www.linkedin.com/in/frank-s-javier-vilca-quispe-338b50294/" className="border border-white rounded-full h-11 w-11 md:h-11 md:w-11 h-10 w-10 flex justify-center items-center text-2xl md:text-2xl text-xl hover:bg-blue-600"><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/franksvilcaquispe/" className="border border-white rounded-full h-11 w-11 md:h-11 md:w-11 h-10 w-10 flex justify-center items-center text-2xl md:text-2xl text-xl hover:bg-gradient-to-r hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]"><FaInstagram /></a>
                    </div>
                </div>
                <div className="text-center md:text-base text-xs md:mt-0 mt-6 md:py-0 py-2">Copyright © 2026 Franks Vilca Quispe</div>
            </div>
        </div>
    );
}