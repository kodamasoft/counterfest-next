import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    plugins: [
        typography,
    ],
    theme: {
        extend: { 
            animation: {
                "fade-in-down": "fade-in-down 0.6s ease-in-out"
            },
            keyframes: {
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-20px)"
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)"
                    }
                }
            }
        },
    },
} satisfies Config;
