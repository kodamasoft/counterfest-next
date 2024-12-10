// components/LocaleSwitcher.js
// components/LocaleSwitcher.js
'use client';

import { usePathname, useRouter } from 'next/navigation';

const LocaleSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();

    const toggleLocale = () => {
        const currentLocale = pathname.startsWith('/jp') ? 'jp' : 'en';
        const newLocale = currentLocale === 'en' ? 'jp' : 'en';
        const newPathname = pathname.replace(/^\/[^/]+/, `/${newLocale}`);
        router.push(newPathname);
    };

    return (
        <button onClick={toggleLocale}>
            {pathname.startsWith('/jp') ? 'Switch to English' : 'Switch to Japanese'}
        </button>
    );
};

export default LocaleSwitcher;
