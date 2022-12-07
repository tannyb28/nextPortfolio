import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full mt-24 lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#cc5500]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          <div className='p-6 shadow-lg shadow-black bg-[#cc5500] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/react.png' width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center md:mt-2'>
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-lg shadow-black bg-[#cc5500] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center md:mt-1'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/mongo.png' width='100' height='100' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Mongo</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-lg shadow-black bg-[#cc5500] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center md:mt-2'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/javascript.png' width='100' height='100' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-lg shadow-black bg-[#cc5500] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/python.png' width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-lg shadow-black bg-[#cc5500] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center md:mt-3'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/aws.png' width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>AWS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-lg shadow-black bg-[#cc5500] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/java.png' width='84' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center md:mt-3'>
                <h3>Java</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-lg shadow-black bg-[#cc5500] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/swift.png' width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Swift</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-lg shadow-black bg-[#cc5500] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/cplus.png' width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>C++</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Skills