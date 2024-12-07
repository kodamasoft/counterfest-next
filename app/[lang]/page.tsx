import Image from "next/image";
import IndexMDX from '@/markdown/index.mdx'
import logo from '@/public/img/Logo_Orange_Transparent.png'
import logoDark from '@/public/img/Logo_DarkOrange_Transparent.png'
import { getDictionary } from './dictionaries'

export default async function Home({params}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    // Use {dict.title} corresponding to the title in the dictionary
    
    return (
        <div className="prose dark:prose-invert max-w-3xl mx-auto p-4">
            <Image src={logo} alt="COUNTERFEST RECORDS" width={300} height={288} className="mx-auto animate-fade-in-down mt-4 mb-8 hidden dark:block" />
            <Image src={logoDark} alt="COUNTERFEST RECORDS" width={300} height={288} className="mx-auto animate-fade-in-down mt-4 mb-8 dark:hidden" />
            <IndexMDX />
        </div>
    );
}
