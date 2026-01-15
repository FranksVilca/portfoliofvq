"use client";
import { useState } from "react";
import DarkModeSwitch from "./themeSwitch";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-bag border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between py-4 md:py-4 py-3 px-8 md:px-8 px-4">
                <div>
                    <button
                        onClick={() => scrollToSection('#home')}
                        className="text-primary-hover text-xl md:text-xl text-lg rounded-md font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                    >
                        HOME
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
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

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-3">
                    <DarkModeSwitch />
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-primary hover:text-primary-hover text-3xl transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <IoClose /> : <HiMenuAlt3 />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-bag border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col px-4 py-3 space-y-3">
                        <button
                            onClick={() => scrollToSection('#about')}
                            className="text-primary hover:text-primary-hover transition-colors font-medium cursor-pointer text-left py-2"
                        >
                            ABOUT ME
                        </button>
                        <button
                            onClick={() => scrollToSection('#services')}
                            className="text-primary hover:text-primary-hover transition-colors font-medium cursor-pointer text-left py-2"
                        >
                            SERVICES
                        </button>
                        <button
                            onClick={() => scrollToSection('#portfolio')}
                            className="text-primary hover:text-primary-hover transition-colors font-medium cursor-pointer text-left py-2"
                        >
                            PORTFOLIO
                        </button>
                        <button
                            onClick={() => scrollToSection('#contact')}
                            className="text-primary hover:text-primary-hover transition-colors font-medium cursor-pointer text-left py-2"
                        >
                            CONTACT
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}