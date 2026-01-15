"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkModeSwitch() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            className="relative rounded-full"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === "light" ? (
                <FaSun className="h-5 w-5 text-primary hover:text-primary-hover" />
            ) : (
                <FaMoon className="h-5 w-5" />
            )}
        </button>
    );
}
