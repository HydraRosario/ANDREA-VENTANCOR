import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
          variants={fadeIn('right', 0.3 )}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Mis últimos <br />
                Trabajos
              </h2>
              <p className='max-w-sm mb-16'>
              El resto de mi trabajo puede ser visto en mis redes.
              </p>
              <a href='https://www.facebook.com/andrea.ventancor' target='_blank' rel='noopener noreferrer'><button className='btn btn-sm'>Mira mis proyectos</button></a>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Algun trabajo realizado</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>con una pequeña descripción de la experiencia</span>
              </div>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.2 )}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-10'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Algunos comentarios dejados por clientes satisfechos</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>con experiencias y opiniones positivas</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>contenido extra</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>que sea llamativo para la gente</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Work;
