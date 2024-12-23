import dynamic from 'next/dynamic';

export default async function Home({params}) {
    const { lang } = await params;
    const IndexMDX = dynamic(() => import(`@/markdown/index.${lang}.mdx`));
    // Use {dict.title} corresponding to the title in the dictionary
    
    return (
        <div className="prose dark:prose-invert max-w-3xl mx-auto p-4">
            <IndexMDX />
        </div>
    );
}
