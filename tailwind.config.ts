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
        // @ts-expect-error - addUtilities is not defined in the types
        function({ addUtilities }) {
            addUtilities({
                '.clip-notched': {
                    'clip-path': 'polygon(0% var(--notchSize, 20px), var(--notchSize, 20px) 0%, calc(100% - var(--notchSize, 20px)) 0%, 100% var(--notchSize, 20px), 100% calc(100% - var(--notchSize, 20px)), calc(100% - var(--notchSize, 20px)) 100%, var(--notchSize, 20px) 100%, 0% calc(100% - var(--notchSize, 20px)))'
                }
            }, ['responsive']);
        }
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
            },
            clipPath: {
                'notched': 'polygon(0% var(--notchSize, 20px), var(--notchSize, 20px) 0%, calc(100% - var(--notchSize, 20px)) 0%, 100% var(--notchSize, 20px), 100% calc(100% - var(--notchSize, 20px)), calc(100% - var(--notchSize, 20px)) 100%, var(--notchSize, 20px) 100%, 0% calc(100% - var(--notchSize, 20px)))'
            }
        },
    },
} satisfies Config;
