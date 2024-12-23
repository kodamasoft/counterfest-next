"use client"

import React from 'react'
import { useParams } from 'next/navigation'

export default function Project({ project }) {
	const params = useParams();
	const slug = params.slug;
	return (
		<p></p>
	)
}
