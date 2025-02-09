"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LocaleSwitcher({lang}) {
    const locales = ['en', 'jp']
    const pathname = usePathname()
    const asPath = pathname.replace(/\/(en|jp)/, '')
    
    return (
        <div className="w-fit m-0 text-black bg-white/50 hover:bg-black/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium border-2 border-transparent focus-visible:border-purple-600 focus-visible:outline-none transition">
            <div className="flex flex-row flex-wrap justify-center gap-4">
                {locales.map((l, i) => {
                    return (
                        <span key={i} className={l === lang ? 'font-bold' : ''}>
                            {/* to uppercase locale*/}
                            <Link href={`/${l}${asPath}`} locale={l}>
                                {l === 'jp' ? '日本語' : 'EN'}
                            </Link>
                        </span>
                    )
                })}
            </div>
        </div>
    ) }