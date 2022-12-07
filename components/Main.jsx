import React from 'react'
import Link from 'next/link'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Main = () => {
  const [text, count] = useTypewriter({
    words: [
      `Biomedical Engineer`,
      `Software Developer`,
      `University of Texas at Austin`,
      `Class of 2024`
      
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div id='/' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>

          <div className='z-20'>
            <p className='z-20 uppercase text-md tracking-widest text-gray-300'>LET'S GET TO WORK</p>
            <h1 className='z-20 py-4'>Hi, I'm <span className='text-[#cc5500]'>Tanish</span></h1>
            <h3>
              <span className='uppercase tracking-widest'>{text}</span>
              <Cursor cursorColor='#cc5500'  />
            </h3>
            <p className='z-20 py-4 text-sm text-gray-500 max-w-[70%] m-auto'>I'm a student at UT Austin studying Biomedical Engineering with a minor in Computational Science and Engineering. I have experience with full-stack development, machine learning, data science, 3D modeling, and circuit design.</p>
            <div className='z-20 flex items-center justify-between max-w-[280px] m-auto py-4'>
              <Link target="_blank" href='https://www.linkedin.com/in/tanish-bhowmick'>
                <div className='z-20 rounded-full bg-[#cc5500] shadow-md shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                  <FaLinkedinIn />
                </div>
              </Link>

              <Link target="_blank" href='https://www.github.com/tannyb28'>
                <div className='z-20 rounded-full bg-[#cc5500] shadow-md shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                  <FaGithub />
                </div>
              </Link>

              <Link href='/#contact'>
                <div className='rounded-full bg-[#cc5500] shadow-md shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                  <AiOutlineMail />
                </div>
              </Link>
              
              <Link target="_blank" href='https://drive.google.com/file/d/1qRAbOz51C-NTlfPpHeFj48yVqJg4AjjR/view?usp=sharing'>
                <div className='rounded-full bg-[#cc5500] shadow-md shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                  <BsFillPersonLinesFill />
                </div>
              </Link>

            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Main
