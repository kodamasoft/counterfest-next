import ErrorPage from 'next/error';
import ReleaseLayout from '../../../../components/release/album/layout';


import { getDictionary } from '@/app/[lang]/dictionaries'

export default async function Release({ release, params }) {
	const { lang } = await params;
	const dict = await getDictionary(lang);
}

export async function getStaticPaths({ locales, locale }) {
	const releases = getAllReleases();

	const path = (locale) =>
		releases.map((post) => ({
			params: {
				slug: post.slug,
				locale,
			},
		}));

	const paths = locales.map((locale) => path(locale)).flat();

	return {
		paths: paths,
		fallback: 'blocking',
	};
}
