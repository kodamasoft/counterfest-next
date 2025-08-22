import { WEBSITE_NAME } from '../lib/constants'
import LocaleSwitcher from './locale-switcher'
import headerStyles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/img/Logo_DarkOrange_Transparent.png'
import MobileNav from './MobileNav'


export default async function Header({params}) {
	const { lang } = await params;
	let links = [
		{ href: `/${lang}/`, label: 'Home' },
		{ href: `/${lang}/discography`, label: 'Discography' },
		{ href: `/${lang}/projects`, label: 'Projects' },
		//{ href: `/${lang}/staff`, label: 'Staff' },
		{ href: 'https://kodamasoft.net', label: 'KodamaSoft' },
		// { href: '/blog', label: 'Blog' }
	];

	return (
		<header className="relative w-100 h-auto text-white text-center flex flex-col select-none bg-center bg-cover">

			<h1 className={headerStyles.header_title}>
				<Link href="/" className="cursor-pointer">
					<Image src={logo} alt={WEBSITE_NAME} height={220} className="cursor-pointer mx-auto max-w-full drop-shadow" />
				</Link>
			</h1>

			{/* MOBILE NAVBAR */}
			<MobileNav links={links} />


			{/* DESKTOP NAVBAR */}
			<nav className="bg-orange-500/80 backdrop-blur hidden sm:block">
				<div id="navbar" className="flex flex-col sm:flex-row justify-center p-4 gap-4 items-center">

					{links.map((link, index) => (
						<Link href={link.href} key={index} className="text-black hover:bg-black/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium border-2 border-transparent focus-visible:border-purple-600 focus-visible:outline-none transition">
							{link.label}
						</Link>
					))}

					<LocaleSwitcher lang={lang}></LocaleSwitcher>
				</div>
			</nav>
		</header>
	)
}