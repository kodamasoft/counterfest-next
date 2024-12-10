import Link from 'next/link';
import Image from "next/image";
import LocaleSwitcher from './LocaleSwitcher';

export function Header() {
    return (
        <header className="flex flex-col justify-between items-center">
            <Link href="/" className="p-4">
                <Image src="/img/Logo_Orange_Transparent.png" alt="COUNTERFEST RECORDS" width={300} height={288} className="mx-auto animate-fade-in-down mt-4 mb-8 hidden dark:block" />
                <Image src="/img/Logo_DarkOrange_Transparent.png" alt="COUNTERFEST RECORDS" width={300} height={288} className="mx-auto animate-fade-in-down mt-4 mb-8 dark:hidden" />
            </Link>
            <nav className="bg-orange-500 w-full">
                <ul className="flex flex-col sm:flex-row justify-center p-4 gap-4 items-center">
                    <li>
                        <Link href="/projects" className="text-white hover:bg-orange-700/50 px-6 py-3 clip-notched text-sm font-medium border-2 border-transparent focus-visible:border-orange-600 focus-visible:outline-none transition">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <LocaleSwitcher />
                    </li>

                </ul>
            </nav>
        </header>
    );
}
