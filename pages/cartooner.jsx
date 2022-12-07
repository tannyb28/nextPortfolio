import Image from 'next/image';
import React from 'react';
import cartoonerImg from '../public/assets/projects/cartooner.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const cartooner = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={cartoonerImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Image to Cartoon Converter</h2>
          <h3>Python <span className='text-[#cc5500] text-xl'>|</span> OpenCV</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='pb-3'>Overview</h2>
          <p>
          Created a python script that will take in an image from the user and convert it into a cartoonified picture. Uses OpenCV to process images and apply the necessary alterations.
          </p>
          <Link target='_blank' href='https://github.com/tannyb28/Cartooner'>
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
                <RiRadioButtonFill className='pr-1' /> OpenCV
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

export default cartooner;
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import cartoonerImg from '../public/assets/projects/cartooner.png'
// import {RiRadioButtonFill} from 'react-icons/ri'

// const cartooner = () => {
//   return (
//     <div className='w-full'>

//       {/* main background */}
//       <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
//         <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10' />
//         <Image className='absolute z-1' layout='fill' objectFit='cover' src={cartoonerImg} alt='/' />
//         <div className='absolute text-white top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-6'>
//           <h2 className='py-2'>Image to Cartoon Converter</h2>
//           <h3>Python <span className='text-[#cc5500] text-xl'>|</span> OpenCV</h3>
//         </div>
//       </div>

//       {/* project description */}
//       <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-3 gap-8 pt-8'>
//         <div className='col-span-4 ml-4'>
//           <p>Project</p>
//           <h2 className='pb-3'>Overview</h2>
//           <p>Created a python script that will take in an image from the user and convert it into a cartoonified picture. Uses OpenCV to process images and apply the necessary alterations.</p>
//           <Link target='_blank' href='https://github.com/tannyb28/Cartooner'>
//             <button className='px-8 py-2 mt-4'>Code</button>
//           </Link>
//         </div>

//         {/* technologies listed */}
//         <div className='col-span-4 md:col-span-1 shadow-lg shadow-black rounded-xl p-4'>
//           <div className='p-2'>
//             <p className='text-center font-bold pb-2'>Technologies</p>
//             <div className='grid grid-cols-3 md:grid-cols-1'>
//               <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Python</p>
//               <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />OpenCV</p>
//             </div>
//           </div>
//         </div>
//         <Link href='/#projects'>
//           <p className='underline cursor-pointer'>Back</p>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default cartooner
