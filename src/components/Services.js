import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Asesoría y consultoría de proyectos turísticos',
    description: 'Ponte en contacto conmigo a través de mi página de turismo para recibir Asesoría. Estoy abierta a trabajar. Click en "Ver más".',
    link: 'Ver más'
  },
  {
    name: 'Periodismo',
    description: 'Ponte en contacto conmigo a través de mi Instagram y podremos charlar sobre cualquier proyecto de Periodismo o Locución que quieras llevar adelante. Estoy abierta a trabajar. Click en la flechita.',
    link: 'Ver más'
  },
  {
    name: 'Asesoramiento de proyectos inmobiliarios / turísticos',
    description: 'Pronto.',
    link: 'Ver más'
  }
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3 )}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>A que me dedico.</h2>
            <h3 className='h3 max-w-[455px] mb-6'>Haciendo que las cosas sucedan.</h3>
            <a href='https://www.facebook.com/andreaventancorturismo' target='_blank' rel='noopener noreferrer'><button className='btn btn-lg'>Mira mi trabajo</button></a>
          </motion.div>
          {/* services list*/}
          <motion.div
          variants={fadeIn('left', 0.5 )}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1'>
            {/* services list*/}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='https://www.instagram.com/aventancor' target='_blank' rel='noopener noreferrer' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'> <BsArrowUpRight/> </a>
                      <a href='https://www.facebook.com/andreaventancorturismo' target='_blank' rel='noopener noreferrer' className='text-gradient text-sm'> {link} </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;
