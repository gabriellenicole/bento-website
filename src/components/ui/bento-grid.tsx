import React from 'react'
import locationMap from '@/assets/singapore.png'
import linkedinIcon from '@/assets/linkedin.png'
import githubIcon from '@/assets/github.png'
import spotifyIcon from '@/assets/spotify.png'
import cafeImage from '@/assets/cafe.png'
import sunsetImage from '@/assets/sunset.png'
import spotifyAlbum1 from '@/assets/spotify_beautifulblur.jpeg'
import spotifyAlbum2 from '@/assets/spotify_calum.jpeg'
import spotifyAlbum3 from '@/assets/spotify_mamasboy.jpeg'
import spotifyAlbum4 from '@/assets/spotify_nicole.jpeg'
import { MBTIProfileBox } from './mbti'
import { Globe } from 'lucide-react'
import { SmileyIcon } from './icons'
import { cn } from '@/lib/utils'

interface BentoBoxProps {
  children: React.ReactNode
  className?: string
}

const BentoBox: React.FC<BentoBoxProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'rounded-xl border border-gray-200 transition-all duration-100 hover:scale-[1.02]',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const BentoGrid = () => {
  return (
    <div className="w-full max-w-2xl xl:w-[850px] xl:max-w-none">
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {/* Pink Box */}
        <BentoBox className="row-span-2 flex flex-col items-center justify-between bg-[#F51672] py-8">
          <div className="h-5 w-5 rounded-full bg-white"></div>
          <div className="flex flex-col items-center gap-2 text-white">
            <SmileyIcon className="h-20 w-20 stroke-none" />
            <div className="text-4xl font-bold tracking-wide">GABY</div>
          </div>
        </BentoBox>

        {/* LinkedIn Box */}
        <BentoBox className="flex aspect-square flex-col justify-between sm:p-7 xl:p-5">
          <div className="flex flex-col">
            <img src={linkedinIcon} alt="LinkedIn" className="mb-2 h-8 w-8" />
            <div className="font-semibold text-gray-800">linkedin.com</div>
            <div className="text-sm text-gray-600">gabrielle-nicole</div>
          </div>
          <button className="-mr-1 ml-auto rounded-full border border-sky-600 bg-white px-3 py-1 text-sm font-semibold text-sky-600 transition-colors hover:bg-blue-50">
            Connect
          </button>
        </BentoBox>

        {/* Location */}
        <BentoBox className="relative col-span-2 row-span-2 aspect-square p-0">
          <img src={locationMap} alt="Location" className="h-full w-full rounded-xl object-cover" />
          <span className="absolute left-1/2 top-1/2 h-4 w-4 animate-[ping_1.5s_ease-in-out_infinite] rounded-full bg-blue-400 opacity-75"></span>
          <span className="absolute left-1/2 top-1/2 h-4 w-4 rounded-full border-2 bg-blue-500"></span>
          <div className="absolute bottom-4 left-6 rounded-lg border border-gray-300 bg-white bg-opacity-75 px-2 py-1 text-sm text-neutral-800 xl:bottom-2 xl:left-4">
            📍 Based in Singapore
          </div>
        </BentoBox>

        {/* Github */}
        <BentoBox className="bg-white-200 col-start-2 row-start-2 flex aspect-square flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 sm:p-7 xl:p-5">
          <div className="flex flex-col">
            <img src={githubIcon} alt="Github" className="mb-2 h-8 w-8" />
            <div className="font-semibold text-gray-800">github.com</div>
            <div className="text-sm text-gray-600">gabriellenicole</div>
          </div>
          <button className="-mr-1 ml-auto rounded-full border border-gray-600 bg-white px-3 py-1 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50">
            Follow
          </button>
        </BentoBox>

        <BentoBox className="col-span-2 flex aspect-[2/1] flex-col justify-between rounded-xl bg-[#74F4F3] p-7 xl:aspect-auto">
          <Globe className="ml-auto mr-0 h-10 w-10 text-blue-950" size={24} />
          <p className="text-xl font-bold leading-tight text-blue-950">
            born and raised in
            <br />
            <span className="text-3xl text-blue-950">indonesia 🇮🇩</span>
          </p>
        </BentoBox>

        {/* Cafe */}
        <BentoBox className="aspect-square rounded-xl bg-gray-200">
          <img src={cafeImage} alt="Cafe" className="h-full w-full rounded-xl object-cover" />
        </BentoBox>

        {/* Sunset */}
        <BentoBox className="row-span-2 rounded-xl bg-purple-500">
          <MBTIProfileBox />
        </BentoBox>
        <BentoBox className="aspect-square rounded-xl bg-gray-200">
          <img src={sunsetImage} alt="Sunset" className="h-full w-full rounded-xl object-cover" />
        </BentoBox>

        {/* Spotify */}
        <BentoBox className="col-span-2 flex aspect-[2/1] items-center justify-between rounded-xl border border-gray-200 bg-white p-5 sm:p-8 xl:aspect-auto xl:px-5 xl:py-4">
          <div className="flex h-full flex-col items-start justify-between">
            <div className="flex flex-col items-start">
              <img src={spotifyIcon} alt="Spotify" className="mb-1 h-10 w-10" />
              <h2 className="text-lg font-semibold text-gray-800">spotify</h2>
              <p className="text-sm text-gray-600">gabriellenicole</p>
            </div>
            <button className="rounded-full border border-[#00DB4D] bg-white px-3 py-1 text-sm font-semibold text-[#00DB4D] transition-colors hover:bg-[#00DB4D] hover:bg-opacity-10">
              Follow
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img
              src={spotifyAlbum1}
              alt="Album cover"
              className="h-20 w-20 rounded-xl xl:h-16 xl:w-16"
            />
            <img
              src={spotifyAlbum2}
              alt="Album cover"
              className="h-20 w-20 rounded-xl xl:h-16 xl:w-16"
            />
            <img
              src={spotifyAlbum3}
              alt="Album cover"
              className="h-20 w-20 rounded-xl xl:h-16 xl:w-16"
            />
            <img
              src={spotifyAlbum4}
              alt="Album cover"
              className="h-20 w-20 rounded-xl xl:h-16 xl:w-16"
            />
          </div>
        </BentoBox>
      </div>
    </div>
  )
}
