import React from 'react'
import dynamic from 'next/dynamic';
import AlbumListing from '@/components/album-listing';
import CtaButton from '@/components/project/cta-button';
import ProjectInformation from '@/components/project-information';
import Container from '@/components/container';
import ProseContainer from '@/components/prose-container';
import WrappableParagraph from '@/components/project/title-with-content';
import DiscordLink from '@/components/discord-link';

export default async function Project({ params }) {
	const {slug} = await params
	const {lang} = await params

	const components = {
		WrappableParagraph,
		CtaButton,
		AlbumListing: (props) => <AlbumListing {...props} params={params} />,
		ProjectInformation: (props) => <ProjectInformation {...props} params={params} />,
		DiscordLink
	}

	const MDX = dynamic(() => import(`@/projects/${slug}.${lang}.mdx`));
  return (
	<Container className="container pt-10 px-6 mx-auto">
		<article>
			<ProseContainer>
				<MDX {...slug} components={components} />
			</ProseContainer>
		</article>
	</Container>
  )
}