"use client";
import DarkModeSwitch from "./themeSwitch";

export default function Navbar() {
    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-bg border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between py-4 px-8">
                <div>
                    <button
                        onClick={() => scrollToSection('#home')}
                        className="text-primary-hover text-xl rounded-md font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                    >
                        HOME
                    </button>
                </div>
                <div className="flex items-center gap-6 ">
                    <button
                        onClick={() => scrollToSection('#about')}
                        className="text-primary hover:text-primary-hover transition-colors font-medium cursor-pointer"
                    >
                        ABOUT ME
                    </button>
                    <button
                        onClick={() => scrollToSection('#services')}
                        className="text-primary hover:text-primary-hover transition-colors font-medium cursor-pointer"
                    >
                        SERVICES
                    </button>
                    <button
                        onClick={() => scrollToSection('#portfolio')}
                        className="text-primary hover:text-primary-hover transition-colors font-medium cursor-pointer"
                    >
                        PORTFOLIO
                    </button>
                    <button
                        onClick={() => scrollToSection('#contact')}
                        className="text-primary hover:text-primary-hover transition-colors font-medium cursor-pointer"
                    >
                        CONTACT
                    </button>
                    <DarkModeSwitch />
                </div>
            </div>
        </nav>
    );
}