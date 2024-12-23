"use client"

import React from 'react'
//import { useParams, useRouter } from 'next/navigation'

import ErrorPage from 'next/error'

import Container from '@/components/container'

//import WrappableParagraph from '@/components/project/title-with-content';
//import CtaButton from '@/components/project/cta-button';
//import AlbumListing from '@/components/album-listing';
import ProjectInformation from '@/components/project-information';
import { WEBSITE_NAME } from '@/lib/constants'

//import { getProjectBySlug, getProjectSlugs } from '@/lib/api'

/*import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'*/
import ProseContainer from '@/components/prose-container'

export default function Project({ project }) {
	//const params = useParams();
	//const slug = params.slug;

	/*const components = {
		//WrappableParagraph,
		CtaButton,
		//AlbumListing,
		//ProjectInformation
	}*/

	const router = useRouter()
	if (!router.isFallback && !project) {
		return <ErrorPage statusCode={404} />
	}

	return (
		<>
			{router.isFallback ? (
				<p>Loading…</p>
			) : (
				<Container className="container pt-10 px-6 mx-auto">
				<article>
					<title>
						{WEBSITE_NAME}
					</title>
					<ProseContainer>
						<h1>{project.title}</h1>
						<ProjectInformation {...project} />
					{/*<MDXRemote {...project} components={components} />*/}
					</ProseContainer>
				</article>
				</Container>
			)}
		</>
	)
}
