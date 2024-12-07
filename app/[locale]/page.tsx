import IndexMDX from '@/markdown/index.mdx'
// import { getDictionary } from './dictionaries'


export default async function Home({ params }: { params: { locale: string } }) {
    // const { locale } = await params;
    // const dict = await getDictionary(locale);

    return (
        <div className="prose dark:prose-invert max-w-3xl mx-auto p-4">
            {/* <h1>{dict.hello}</h1> */}
            <IndexMDX />
        </div>
    );
}
