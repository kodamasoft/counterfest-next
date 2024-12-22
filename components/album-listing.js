import { FaBandcamp, FaGlobe } from 'react-icons/fa';

import BoothSVG from '@/public/assets/icons/booth.svg'
import ThbwikiSVG from '@/public/assets/icons/thbwiki.svg'
import VgmdbSVG from '@/public/assets/icons/vgmdb.svg'

import albumsJSON from '@/public/assets/discography/albums.json'
import Image from "next/image";
import { getDictionary } from "@/app/[lang]/dictionaries";
import DateFormatter from './date-formatter'

export default async function AlbumListing({ slug, lang }) {
    let album = {};
    const dict = await getDictionary(lang);

    // if we find an album with the key equal as the slug we are looking for, return the album
    let keys = Object.keys(albumsJSON);
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === slug) {
            album = albumsJSON[keys[i]];
            break;
        }
    }
    const test = 1

    if (test) {
        return (
                <div className="not-prose group relative w-full md:max-w-2xl mx-auto content-center border-solid border border-violet-500/50 hover:border-violet-500 rounded-xl flex flex-col md:flex-row my-5 transition items-center">

            <div className="relative h-52 w-52 my-5 mx-auto md:m-5 md:mr-0 aspect-square rounded-md shadow-lg transition overflow-clip flex-none" style={{ backgroundColor: album.coverColor }}>
                <Image src={album.cover} alt={album.name} sizes="13rem" quality={100} priority={true} width={208} height={208} />
            </div>

            <div className="flex flex-col flex-initial py-5 px-10 text-white">
                <div>
                    <span className="font-mono text-sm">
                        {album.id} {album.releaseDate && (<>— <DateFormatter dateString={album.releaseDate} /></>) }
                    </span>
                    <h2 className="text-2xl font-semibold">{album.name}</h2>
                </div>

                <div className="flex flex-wrap mt-4 gap-4">
                    <a href={album.website} className="kodama_btn kodama_btn--primary">
                        <FaGlobe className='h-4 w-4 mr-2' />
                        Website
                    </a>

                    {album.vgmdb ?
                        <a href={album.vgmdb} className="kodama_btn kodama_btn--primary">
                            <Image src={VgmdbSVG} alt='VGMDB' className='h-4 w-4 mr-2 filter invert' />
                            VGMdb
                        </a>
                        : null}

                    {album.thbwiki ?
                        <a href={album.thbwiki} className="kodama_btn kodama_btn--primary">
                            <Image src={ThbwikiSVG} alt='Thbwiki' className='h-4 w-4 mr-2' />
                            THB WIKI
                        </a>
                        : null}
                </div>

                <h3 className="text-lg font-semibold mt-4">{dict.common.words.download}</h3>
                <div className="flex flex-wrap mt-2 gap-4">
                    <a href={album.bandcamp} className="kodama_btn kodama_btn--primary">
                        <FaBandcamp className='h-4 w-4 mr-2' />
                        Bandcamp
                    </a>

                    {album.booth ?
                        <a href={album.booth} className="kodama_btn kodama_btn--primary">
                            <Image src={BoothSVG} alt='Booth' className='h-4 w-4 mr-2 filter invert' />
                            BOOTH
                        </a>
                        : null}
                </div>
            </div>
        </div>
            );
        } else {
            return <div>Loading...</div>; // or some other fallback component
        }
}
