import Image from "next/image";
import IndexMDX from '@/markdown/index.mdx'

export default function Home() {
    return (
        <div className="prose dark:prose-dark max-w-3xl mx-auto p-4">
            <Image src="/img/Logo_Orange_Transparent.png" alt="COUNTERFEST RECORDS" width={300} height={288} className="mx-auto animate-fade-in-down" />
            <IndexMDX />
        </div>
    );
}
