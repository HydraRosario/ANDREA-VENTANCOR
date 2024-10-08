import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';


const Contact = () => {
  return (
    <div className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3 )}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>Ponerse en contacto</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Trabajemos <br /> juntos!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3 )}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3 }}
            className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-24 p-6 items-start'
            action="https://formsubmit.co/andreaventancor@gmail.com" method="POST"
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transitio-all'
              type='text'
              name='name'
              placeholder='Tu nombre'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transitio-all'
              type='text'
              name='email'
              placeholder='Tu email'
            />
            <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transitio-all' placeholder="Tu mensaje" name="message" rows="10" required></textarea>
            <button className='btn btn-lg'>Enviar mensaje.</button>
          </motion.form>
        </div>
      </div>
    </div>
  )
};

export default Contact;
