
import { FaBandcamp, FaSoundcloud, FaYoutube, FaTwitter, FaDiscord, FaEnvelope } from 'react-icons/fa';
import BskyPNG from '../public/assets/icons/bsky.png';

import Image from 'next/image';
import Link from 'next/link';
import { DISCORD_URL } from '@/lib/constants'; // Import the discordUrl from lib/constants.js

// Define common icon class for reuse
const iconClass = 'text-slate-500 no-underline hover:text-slate-50 hover:scale-105 w-10 h-10 transition';

// Array of icon links to simplify component structure
const iconLinks = [
  { href: 'mailto:counterfestrecords@gmail.com', icon: FaEnvelope },
  { href: DISCORD_URL, icon: FaDiscord },
  { href: 'https://twitter.com/counterfest', icon: FaTwitter },
  { href: 'https://bsky.app/profile/counterfestrecords.bsky.social', icon: () => <Image width={20} height={20} className={`${iconClass} hover:brightness-0 hover:invert`} src={BskyPNG.src} alt="Bsky Logo" /> },
  { href: 'https://www.youtube.com/@COUNTERFESTRECORDS', icon: FaYoutube },
  { href: 'https://soundcloud.com/counterfest-records', icon: FaSoundcloud },
  { href: 'https://counterfestrecords.bandcamp.com', icon: FaBandcamp }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-500/20 mt-10">
      <div className="container max-w-4xl mx-auto flex py-8 flex-col text-center">
        <div className="w-full mx-auto flex justify-center flex-wrap items-center gap-3">
          {iconLinks.map(({ href, icon: IconComponent }, index) => (
            <Link key={index} href={href} className="footer_svg_container outline-none">
              <IconComponent className={iconClass} />
            </Link>
          ))}
        </div>
        <p className="text-slate-500 mt-5">
          Counterfest logo by <a href="https://twitter.com/ZethZ161" className="text-slate-500 transition hover:text-slate-50 hover:underline">Zeth</a> — Kodama Mascots by Garrrros (KodamaSoft) — Website by <a href="https://twitter.com/krz0001" className="text-slate-500 transition hover:text-slate-50 hover:underline">krz</a> and <a href="https://twitter.com/jubstacheit" className="text-slate-500 transition hover:text-slate-50 hover:underline">Bonnie</a> (KodamaSoft) <br />
        </p>
      </div>
    </footer>
  );
}
