import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AboutImg from '../public/assets/tanish-about.jpg'

//comment so i can deploy
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#cc5500]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-400'>// not your typical software engineer</p>
          <p className='py-2 text-gray-300'>
            I am a Biomedical Engineering student at UT Austin (not the typical track for a SWE). However, I've been coding since I was a child, doing silly little HTML projects in my freetime. During my time in college, I realized my passion for software development and how much of an impact I could really have with code. Over the past year and a half, I have worked with multiple startups, developing code and polishing my skills. I believe as an engineer I am able to offer unique and efficient perspectives on how to approach problems.
          </p>
          <p className='py-2 text-gray-300'>
            My interests are pretty widespread. I am always looking for ways to learn about new technologies. For now, I am refining my skillset in mobile and web app development using frameworks like React, Next, Node, etc. I am also continuing to develop skills in machine learning with Python. I am a quick study and pick up new technologies really fast. If you don't believe me, just hire me and find out :)
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-[#c57b46] w-fit cursor-pointer hover:underline ease-in duration-300'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 '>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;