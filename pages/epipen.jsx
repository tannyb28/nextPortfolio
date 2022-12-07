import Image from 'next/image';
import React from 'react';
import epipenImg from '../public/assets/projects/epipen.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const epipen = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={epipenImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Epipen Redesign</h2>
          <h3>Fusion360</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='pb-3'>Overview</h2>
          <p>
            Used Fusion360 to 3D model and redesign an epipen autoinjector. Considered ease of access, bulk, safety, and other design constraints when creating redesign.
          </p>
          <Link target='_blank' href='https://drive.google.com/file/d/1Reyltk5LGQVU14nSI7UYWJtYON2bBIAX/view?usp=sharing'>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          
        </div>
        <div className='col-span-4 md:col-span-1 shadow-md shadow-black rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Fusion360
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default epipen;