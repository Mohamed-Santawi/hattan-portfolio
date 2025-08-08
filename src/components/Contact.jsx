import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Spline from "@splinetool/react-spline";
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, direction } = useLanguage();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Log the data being sent
    console.log('Sending email with data:', {
      name: form.name,
      email: form.email,
      message: form.message,
      title: "Contact Form Submission"
    });

    emailjs
      .send(
        "service_qwkszu9",
        "template_nty7q72",
        {
          name: form.name,
          email: form.email,
          message: form.message,
          title: "Contact Form Submission"
        },
        "92_wtus-Vrr7Ph0hQ"
      )
      .then(
        (response) => {
          setLoading(false);
          console.log('Email sent successfully:', response);
          alert(t('contact.success'));
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error('Email sending failed:', error);
          alert(t('contact.error') + ': ' + error.text);
        }
      );
  };
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-6 md:gap-10 overflow-hidden`} dir={direction}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-white p-6 md:p-8 rounded-2xl shadow-2xl shadow-black/40'
      >
        <p className="text-gray-500 font-medium text-sm md:text-base">{t('contact.getInTouch')}</p>
        <h3 className="text-2xl md:text-3xl font-bold text-[#004f38] mb-4">{t('contact.contact')}</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 md:mt-12 flex flex-col gap-6 md:gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-gray-900 font-medium mb-3 md:mb-4 text-sm md:text-base'>{t('contact.yourName')}</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={t('contact.placeholderName')}
              className='bg-gray-100 py-3 md:py-4 px-4 md:px-6 placeholder:text-gray-400 text-gray-900 rounded-lg focus:ring-2 focus:ring-[#004f38] focus:border-[#004f38] outline-none border border-gray-300 font-medium text-sm md:text-base'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-900 font-medium mb-3 md:mb-4 text-sm md:text-base'>{t('contact.yourEmail')}</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={t('contact.placeholderEmail')}
              className='bg-gray-100 py-3 md:py-4 px-4 md:px-6 placeholder:text-gray-400 text-gray-900 rounded-lg focus:ring-2 focus:ring-[#004f38] focus:border-[#004f38] outline-none border border-gray-300 font-medium text-sm md:text-base'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-900 font-medium mb-3 md:mb-4 text-sm md:text-base'>{t('contact.yourMessage')}</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={t('contact.placeholderMessage')}
              className='bg-gray-100 py-3 md:py-4 px-4 md:px-6 placeholder:text-gray-400 text-gray-900 rounded-lg focus:ring-2 focus:ring-[#004f38] focus:border-[#004f38] outline-none border border-gray-300 font-medium text-sm md:text-base resize-none md:resize-y'
            />
          </label>
          <button
            type='submit'
            className='bg-[#004f38] hover:bg-[#004f38]/90 focus:bg-[#004f38] focus:ring-4 focus:ring-[#004f38]/30 transition-colors duration-200 py-3 px-6 md:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-sm md:text-base'
          >
            {loading ? t('contact.sending') : t('contact.send')}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] sm:h-[280px] h-[220px] w-full overflow-hidden rounded-xl z-30 md:rounded-2xl'
      >
        {!isMobile ? (
          // Desktop: Show Spline 3D Scene
          <Spline
            scene="https://prod.spline.design/zqbIMzIX2pwLmguk/scene.splinecode"
            className="w-full h-full"
          />
        ) : (
          // Mobile: Show lightweight alternative
          <div className="w-full h-full bg-gradient-to-br from-[#004f38]/10 via-blue-50 to-purple-100 relative flex items-center justify-center">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-[#004f38] opacity-20"
                  style={{
                    width: `${30 + i * 20}px`,
                    height: `${30 + i * 20}px`,
                    left: `${20 + i * 25}%`,
                    top: `${30 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
            {/* Central content */}
            <div className="relative z-10 text-center p-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-[#004f38] rounded-full flex items-center justify-center mx-auto mb-3"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </motion.div>
              <motion.h4
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg sm:text-xl font-bold text-gray-800 mb-2"
              >
                {t('contact.letsConnect')}
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-600 text-sm sm:text-base"
              >
                {t('contact.readyToStart')}
              </motion.p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");