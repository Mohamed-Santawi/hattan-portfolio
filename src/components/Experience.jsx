import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { experiences } from '../constants';

const Experience = () => {
  const { t, direction, language } = useLanguage();

  return (
    <section className="py-20 px-4 relative" dir={direction}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#004f38] mb-4">
            {language === 'ar' ? 'الخبرات المهنية' : 'Professional Experience'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'رحلة من التطوير المستمر والنجاحات المهنية في مجال تطوير المهارات والقيادة'
              : 'A journey of continuous development and professional achievements in skills and leadership development'
            }
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/3">
                <motion.img
                  src={experience.image}
                  alt={experience.name}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3">
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#004f38]"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-[#004f38] mb-3">
                    {experience.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {experience.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
