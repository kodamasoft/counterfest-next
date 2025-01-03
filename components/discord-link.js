import Link from 'next/link'
import { DISCORD_URL } from '@/lib/constants'; // Import the discordUrl from lib/constants.js

export default function DiscordLink({title}) {
    return (
        <Link href={DISCORD_URL}>{title}</Link>
    )
}
