import dynamic from 'next/dynamic';
import Container from '@/components/container';
import ProseContainer from '@/components/prose-container';

export default async function Home({params}) {
    const { lang } = await params;
    const IndexMDX = dynamic(() => import(`@/markdown/index.${lang}.mdx`));
    // Use {dict.title} corresponding to the title in the dictionary
    
    return (
        <Container>
            <ProseContainer>
                <div className="max-w-3xl mx-auto p-4">
                    <IndexMDX />
                </div>
            </ProseContainer>
        </Container>
    );
}
