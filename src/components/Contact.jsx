import React from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
// KcWwNpKTD3y3UqlJv
// service_npm001m
// template_5y1syjr

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);

    emailjs.send('service_npm001m', 'template_5y1syjr',
      {
        from_name: form.name,
        to_name: 'Patrick',
        from_email: form.email,
        to_email: 'mccallion.patrick@gmail.com',
        message: form.message,
      },
      'KcWwNpKTD3y3UqlJv'
    )
      .then(() => {
        setLoading(false);
        alert("Thanks for reaching out! I will get back to you very soon.");

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong, please reach out directly to my email at mccallion.patrick@gmail.com')
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch with me</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
          </label>
          <input type='text' name='name' value={form.name} onChange={handleChange}
            placeholder='Please enter your name here' className='bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
          </label>
          <input type='email' name='email' value={form.email} onChange={handleChange}
            placeholder='Please enter your email here' className='bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
          </label>
          <textarea rows='7' name='message' value={form.message} onChange={handleChange}
            placeholder='Please enter your message for me here' className='bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >{loading ? "Sending!" : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')