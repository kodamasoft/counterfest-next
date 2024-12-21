"use client"

import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import LocaleSwitcher from './locale-switcher'
import Link from 'next/link'

function MobileNav({ links }) {
  return (
    <Disclosure as="nav" className="bg-purple-900/30 backdrop-blur text-white sm:hidden">
				{({ open }) => (
					<>
						<DisclosureButton>
							<div className="flex justify-center items-center p-4">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									{open ? (
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									) : (
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m -16 6h16" />
									)}
								</svg>
							</div>
						</DisclosureButton>
						<Transition
							show={open}
							enter="transition duration-100 ease-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0"
						>
							<DisclosurePanel static>
								<div id="navbar" className="flex flex-col sm:flex-row justify-center p-4 gap-4 items-center">

									{links.map((link, index) => (
										<Link href={link.href} key={index} className="text-gray-300 hover:bg-purple-700/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium border-2 border-transparent focus-visible:border-purple-600 focus-visible:outline-none transition">
											{link.label}
										</Link>
									))}

									<LocaleSwitcher className="w-fit m-0 text-gray-300 bg-gray-900/50 hover:bg-purple-700/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium border-2 border-transparent focus-visible:border-purple-600 focus-visible:outline-none transition"></LocaleSwitcher>
								</div>
							</DisclosurePanel>
						</Transition>
					</>
				)}
			</Disclosure>
  )
}

export default MobileNav