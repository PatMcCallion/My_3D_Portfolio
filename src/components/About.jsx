import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-15 h-15 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Introduction</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        <p>Welcome to my portfolio! As a Junior Software Developer,
          I have extensive experience working with various programming languages,
          including Python, JavaScript, and Java. Additionally,
          I am proficient in the MERN stack and have expertise
          in working with databases such as MongoDB and MySQL.
          I hold a BS in Civil Engineering from
          The United States Military Academy at West Point,
          which instilled in me responsibility, discipline,
          and attention to detail.</p>

        <p>As a former Army officer and recent graduate of The Coding Dojo,
          I understand the importance of collaboration and communication
          in a team environment. I am confident that my experience in
          leadership and teamwork, combined with my technical skills,
          make me a valuable asset to any software development team.</p>

        <p>I am excited about the possibility of
          joining your organization and contributing
          my skills to your projects. Thank you for reviewing
          my portfolio, and I look forward to discussing
          how we can work together to achieve success.</p>
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")