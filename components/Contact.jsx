import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.png';

const Contact = () => {
  return (
    <div id='contact' className='w-full h-auto p-6'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#cc5500]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-black rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Tanish Bhowmick</h2>
                <p className='text-gray-400'>Student at UT Austin</p>
                <p className='py-2 text-gray-400'>
                  I am available for freelance or internship positions. Contact
                  me and let&apos;s talk!
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-around py-4'>
                  <a
                    href='https://www.linkedin.com/in/tanish-bhowmick/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full bg-[#cc5500] shadow-md shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/tannyb28'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full bg-[#cc5500] shadow-md shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>

                  <Link target="_blank" href='https://drive.google.com/file/d/1qRAbOz51C-NTlfPpHeFj48yVqJg4AjjR/view?usp=sharing'>
                      <div className='rounded-full bg-[#cc5500] shadow-md shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                      </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-lg shadow-black rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/61e60c36-0436-443d-a912-017a027b5917'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='contactInput'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='contactInput'
                    type='email'
                    name='email'
                  />
                </div>
                </div>
                
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='contactInput'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='contactInput'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className='rounded-full shadow-md shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#cc5500]'
                  size={30}
                />
              </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;