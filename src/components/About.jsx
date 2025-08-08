import React from 'react'
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import Tilt from "react-parallax-tilt";
import { services } from '../constants';
import { Cerif } from '../assets';
import { Link } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';

const ServiceCard = ({ index, titleKey, icon, link }) => {
  const { t } = useLanguage();
  return (
    <Link to={link} className="block">
      <Tilt className="xs:w-[250px] w-[300px] h-[300px] ">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="bg-gradient-to-br from-[#004f38] to-[#004f38] p-1 rounded-2xl shadow-xl border ring-2 ring-[#004f38]/20 hover:ring-[#004f38] transition duration-300 hover:scale-105"
        >
          <div className="bg-white bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={t(titleKey)} className="w-20 h-20 object-contain" />
            <h3 className="text-black text-[20px] font-bold text-center">{t(titleKey)}</h3>
          </div>
        </motion.div>
      </Tilt>
    </Link>
  );
};

const About = () => {
  const { t, direction } = useLanguage();
  return (
    <div dir={direction}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('about.introduction')}</p>
        <h2 className={`${styles.sectionHeadText} !text-[#004f38]`}>{t('about.overview')}</h2>
      </motion.div>

      {/* Overview Text Section with proper RTL alignment */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4"
      >
        <p className={`text-secondary text-[17px] leading-[30px] ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
          {t('about.overviewText')}
        </p>
      </motion.div>

      <motion.div variants={textVariant()} className="mt-16">
        <h2 className={`${styles.sectionHeadText} !text-[#004f38]`}>{t('about.services')}</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.titleKey} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

const AboutSection = SectionWrapper(About, "about");
export default AboutSection;