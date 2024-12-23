import React from 'react'
import Container from '@/components/container'

import { getDictionary } from '@/app/[lang]/dictionaries'

import AlbumListing from '@/components/album-listing'
import albumsJson from "@/public/assets/discography/albums.json"

export default async function Discography({params}) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  // Order all the albums by release date (newest first)
  // Release date is in each album object as releaseDate with format 2020-12-30T00:00:00+0200 (ISO 8601)
  const albums = {};
  Object.keys(albumsJson).sort((a, b) => {
    return new Date(albumsJson[b].releaseDate) - new Date(albumsJson[a].releaseDate);
  }).forEach(key => {
    albums[key] = albumsJson[key];
  });

  return (
    <Container>
          <div className="container pt-10 px-6 mx-auto">
            <div className='flex flex-wrap'>
              {Object.keys(albums).length > 0 ? (
                Object.keys(albums).map((key) => (
                  <AlbumListing lang={lang} key={key} slug={key} />
                ))
              ) : (
                <div className="text-center w-full">
                  <p className="text-xl">{dict.common.upcoming}</p>
                </div>
              )}
            </div>
          </div>
        </Container>
  )
}