import Image from "next/image";
import IndexMDX from '@/markdown/index.mdx'
import logo from '@/public/img/Logo_Orange_Transparent.png'
import logoDark from '@/public/img/Logo_DarkOrange_Transparent.png'
import { getDictionary } from './dictionaries'

import Container from '@/components/container'
import ProseContainer from '@/components/prose-container'
import MoreStories from '@/components/more-stories'
import Link from 'next/link'

import { getAllPosts } from '@/lib/api'

export default async function Home({params}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    // Use {dict.title} corresponding to the title in the dictionary
    
    return (
        <div className="prose dark:prose-invert max-w-3xl mx-auto p-4">
            <IndexMDX />
        </div>
    );
}
