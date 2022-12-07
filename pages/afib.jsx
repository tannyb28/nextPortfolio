import Image from 'next/image';
import React from 'react';
import afibImg from '../public/assets/projects/afib.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const afib = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={afibImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Atrial Fibrillation Detector</h2>
          <h3>Python <span className='text-[#cc5500] text-xl'>|</span> TensorFlow <span className='text-[#cc5500] text-xl'>|</span> KerasAPI</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='pb-3'>Overview</h2>
          <p>
            Generated a deep learning model to detect atrial fibrillation of the heart from ECG data. Designed model to classify given data as normal, atrial fibrillation, abnormal, and noisy.
          </p>
          <Link target='_blank' href='https://colab.research.google.com/drive/1FSKCHPXrCgbHTkN5XJq9VbQF0m7OmQGv?usp=sharing'>
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </Link>
          
        </div>
        <div className='col-span-4 md:col-span-1 shadow-md shadow-black rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TensorFlow
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Keras API
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

export default afib;