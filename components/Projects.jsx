import React from 'react'
import afib from '../public/assets/projects/afib.png'
import cartooner from '../public/assets/projects/cartooner.png'
import epipen from '../public/assets/projects/epipen.png'

import ProjectItem from './ProjectItem'


const Projects = () => {
  return (
    <div id='projects' className='w-full h-auto m-35 p-6'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#cc5500]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem title='Atrial Fibrillation Detector' backgroundImg={afib} tech='Python, TensorFlow, Keras API' projectUrl='/afib' />
          <ProjectItem title='Image to Cartoon Converter' backgroundImg={cartooner} tech='Python, OpenCV' projectUrl='/cartooner' />
          <ProjectItem title='Epipen Redesign' backgroundImg={epipen} tech='Fusion360' projectUrl='/epipen' />

        </div>

      </div>
    </div>
  )
}

export default Projects