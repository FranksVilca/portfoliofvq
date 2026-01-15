import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            <div className="bg-secondary pt-5 text-white px-10">
                <div className="flex justify-between">
                    <div>
                        <p className="font-semibold">Frank’s Javier VIlca Quispe</p>
                        <p>franksjaviervilcaquispe@gmail.com</p>
                    </div>
                    <div className="flex gap-3">
                        <a href="https://github.com/FranksVilca" className="border border-white rounded-full h-11 w-11  flex justify-center items-center text-2xl hover:bg-black hover:text-white"><PiGithubLogoFill /></a>
                        <a href="https://www.linkedin.com/in/frank-s-javier-vilca-quispe-338b50294/" className="border border-white rounded-full h-11 w-11  flex justify-center items-center text-2xl hover:bg-blue-600"><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/franksvilcaquispe/" className="border border-white rounded-full h-11 w-11  flex justify-center items-center text-2xl hover:bg-gradient-to-r hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]"><FaInstagram /></a>
                    </div>
                </div>
                <div className="text-center">Copyright © 2026 Franks Vilca Quispe</div>
            </div>
        </div>
    );
}