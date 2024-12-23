import React from 'react'
import dynamic from 'next/dynamic'

//Waiting for framer motion update compatibility with NextJS 15
//import WrappableParagraph from '@/components/project/title-with-content'

export default async function Faq({params}) {
	const { lang } = await params;
	const FaqMDX = dynamic(() => import(`@/markdown/faq.${lang}.mdx`));
	return (
		<div className="prose dark:prose-invert max-w-3xl mx-auto p-4">
			<FaqMDX />
		</div>
	)
}