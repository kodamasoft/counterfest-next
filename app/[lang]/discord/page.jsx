"use client"
import { useEffect } from 'react'; // Import the useEffect hook from react

import { DISCORD_URL } from '@/lib/constants'; // Import the discordUrl from lib/constants.js

export default function DiscordRedirect() {
	useEffect(() => {
		window.location.href = DISCORD_URL; // Redirect to the discordUrl
	}, []);

	return (
		<div className='prose dark:prose-invert max-w-3xl mx-auto p-4 text-center'>
			<h1>Redirecting to the Discord server...</h1>
		</div>
	);
}
