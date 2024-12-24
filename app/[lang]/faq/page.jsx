import React from 'react'
import dynamic from 'next/dynamic'

import WrappableParagraph from '@/components/project/title-with-content'
import Container from '@/components/container';
import ProseContainer from '@/components/prose-container';

export default async function Faq({params}) {
	const { lang } = await params;
	const FaqMDX = dynamic(() => import(`@/markdown/faq.${lang}.mdx`));
	return (
		<Container>
			<ProseContainer>
				<div className="max-w-3xl mx-auto p-4">
					<FaqMDX components={{ WrappableParagraph }} />
				</div>
			</ProseContainer>
		</Container>
	)
}