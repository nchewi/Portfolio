"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'


const HeroSection = () => {
  
  return (
    <section className="max-container padding-container w-full lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-purple-300 to-white">Hello, I'm{" "}</span>
            <TypeAnimation
      sequence={[
        'Vincent',
        1000,
        'a Web Developer',
        1000,
        'a Data Analyst',
        1000,
        'a Graphic Designer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">A dedicated tech enthusiast with a passion for crafting innovative solutions and pushing the boundaries of possibility</p>
          <div>
            <a href="#contact" className="inline-block px-6 py-3 bg-gradient-to-br from-purple-500 via-purple-300 to-white hover:bg-slate-800 text-black font-bold rounded-full transition duration-300 mr-3">
              Hire Me
            </a>
            <a href="https://docs.google.com/document/d/e/2PACX-1vTipd_WKjqnXp2nKcOYqfZEGWB8Bg501wDfiy3_3MyaS2KruLUM-YErz2MFV5tqS9h8pfbPX_gwyN1v/pub" className="inline-block px-1 py-1 sm:px-5 sm:py-2 bg-gradient-to-br from-purple-500 via-purple-300 to-white hover:bg-slate-800 text-white rounded-full mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                View CV
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <Image
            src="/Hero-image.png"
            alt="Hero image"
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  )
  }
export default HeroSection