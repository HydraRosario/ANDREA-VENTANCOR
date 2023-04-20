import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-y-0 h-screen'>
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
          <motion.div
          variants={fadeIn('left', 0.5 )}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1'>
            <h2 className='h2 text-accent'>Sobre mí.</h2>
            <h3 className='h3 mb-4'>Ofrezco mis servicios de asesoría y consultoría en proyectos turísticos</h3>
            <p className='mb-6'>
            Como consultora en proyectos turísticos, mis metas laborales incluyen seguir creciendo en mi carrera profesional y expandiendo mi red de contactos en la industria turística. También me gustaría tener un impacto positivo en la industria turística al promover prácticas sostenibles y responsables en el desarrollo de proyectos turísticos.
            Me gusta trabajar de manera colaborativa con mis clientes, escuchando sus necesidades y ofreciendo soluciones personalizadas. Me enfoco en construir relaciones sólidas y de confianza con mis clientes y en trabajar juntos hacia el éxito del proyecto. También creo en la importancia de la comunicación clara y efectiva para asegurarme de que todos estemos en la misma página y avanzando en la misma dirección.
            Además, siempre trato de mantenerme actualizada en las últimas tendencias y novedades en la industria turística para poder brindar el mejor asesoramiento a mis clientes.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    <CountUp start={0} end={10} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Años de <br />
                  Experiencia
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    <CountUp start={0} end={6} duration={3} /> : null}
                    k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Viajes<br />
                  Realizados
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    <CountUp start={650} end={700} duration={1} /> : null}
                    +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Clientes <br />
                  Satisfechos
                </div>
              </div>
              <div className='flex gap-x-8 items-center'>
              <a href='https://wa.me/3434166957' target='_blank' rel='noopener noreferrer'><button className='btn btn-lg'>Contactame</button></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;
