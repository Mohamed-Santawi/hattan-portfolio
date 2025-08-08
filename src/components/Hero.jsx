import React from 'react'
import { motion } from 'framer-motion';
import { BottomLeft, TopRight } from "../assets";
import Spline from '@splinetool/react-spline';
import { styles } from '../styles';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t, direction } = useLanguage();
  return (
    <section className="relative min-h-screen bg-center mx-auto bg-gradient-to-b from-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-24 overflow-hidden pt-32 pb-10" dir={direction}>

      {/* Decorative Top-Right Image - Mobile Optimized */}
      <motion.img
        src={TopRight}
        alt="Top right decoration"
        initial={{ opacity: 0, x: 100, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ type: 'spring', duration: 1.5, delay: 0.5 }}
        className="absolute top-16 sm:top-20 right-0 w-32 sm:w-48 md:w-72 lg:w-[400px] pointer-events-none z-0 opacity-60 sm:opacity-100"
      />

      {/* Decorative Bottom-Left Image - Mobile Optimized */}
      <motion.img
        src={BottomLeft}
        alt="Bottom left decoration"
        initial={{ opacity: 0, x: -100, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ type: 'spring', duration: 1.5, delay: 0.8 }}
        className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-72 lg:w-[400px] pointer-events-none z-0 opacity-60 sm:opacity-100"
      />

      {/* Main Content Container */}
      <div className={`z-40 max-w-4xl w-full text-center lg:text-left ${direction === 'rtl' ? 'lg:text-right' : ''}`}>

        {/* Main Heading - Mobile Responsive */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            delay: 1.3,
            damping: 25,
            duration: 1.5,
          }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-[#004f38] leading-tight"
        >
          {t('hero.mainHeading')}
        </motion.h1>

        {/* Subtitle - Mobile Responsive */}
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            delay: 1.8,
            damping: 25,
            duration: 1.5,
          }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed max-w-4xl mx-auto lg:mx-0"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Call to Action Button - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            delay: 2.2,
            damping: 25,
            duration: 1.5,
          }}
          className={`mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center ${direction === 'rtl' ? 'lg:justify-start' : 'lg:justify-start'}`}
        >
          <motion.button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-[#004f38] text-white font-bold text-sm sm:text-base rounded-lg hover:bg-[#004f38]/90 transition-colors duration-300 shadow-lg hover:shadow-xl inline-block text-center"
          >
            {t('hero.getStarted')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;