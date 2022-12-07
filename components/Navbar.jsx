import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {useRouter} from 'next/router'
import TBLogo from '../public/assets/navLogo.png'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('rgb(36,36,36)')
  const router = useRouter()

  useEffect(() => {
    if (
      router.asPath === '/afib' ||
      router.asPath === '/cartooner'
    ) {
      setNavBg('transparent')
    } else {
      setNavBg('rgb(36,36,36)')
    }
  }, [router])

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if(window.scrollY >= 90) {
        setShadow(true)
        setNavBg('rgb(36,36,36')
      } else {
        setShadow(false)
        setNavBg('transparent')
      }
    }
    window.addEventListener('scroll', handleShadow)
  },[])

  return (
    <div style={{backgroundColor:`${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image src={TBLogo} alt="/" width='125' height='50'/>
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-5'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-5'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-5'>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-5'>Projects</li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-5'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden cursor-pointer'>
            <AiOutlineMenu size={25} /> 
          </div>
        </div>
      </div>
      
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[rgb(36,36,36)] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between -ml-4'>
              <Link href='/'>
                <Image src={TBLogo} alt='/' width='87' height='35'/>
              </Link>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-black p-3 cursor-pointer -mr-4'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-[rgb(90,90,90)] my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link onClick={()=>setNav(false)} href='/'>
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link onClick={()=>setNav(false)} href='/#about'>
                <li className='py-4 text-sm'>About</li>
              </Link>
              <Link onClick={()=>setNav(false)} href='/#skills'>
                <li className='py-4 text-sm'>Skills</li>
              </Link>
              <Link onClick={()=>setNav(false)} href='/#projects'>
                <li className='py-4 text-sm'>Projects</li>
              </Link>
              <Link onClick={()=>setNav(false)} href='/#contact'>
                <li className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#cc5500]'>Let's connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <Link target="_blank" href='https://www.linkedin.com/in/tanish-bhowmick'>
                  <div className='rounded-full bg-[#cc5500] shadow-md shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <FaLinkedinIn />
                  </div>
                </Link>

                <Link target="_blank" href='https://www.github.com/tannyb28'>
                  <div className='rounded-full bg-[#cc5500] shadow-md shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
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
    </div>
  )
}

export default Navbar
