import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

export default function CareerAdvising() {
  const navigate = useNavigate();
  const { t, direction, language } = useLanguage();

  return (
    <>
      <SEO 
        title={language === 'ar' ? 'الاستشارات المهنية' : 'Career Advising'}
        description={language === 'ar' 
          ? 'خدمات الاستشارات المهنية المتخصصة لتخطيط وتطوير مسارك الوظيفي. احصل على توجيه شخصي من خبير معتمد لتحديد أهدافك المهنية، استكشاف الفرص الوظيفية، والتخطيط الاستراتيجي لنجاحك المهني طويل المدى.'
          : 'Professional career consulting services to plan and develop your career path. Get personalized guidance from a certified expert to define your career goals, explore job opportunities, and create strategic plans for your long-term professional success.'
        }
        url={`${window.location.origin}/services/career-advising`}
        pageType="career"
        keywords={language === 'ar' 
          ? ['استشارات مهنية', 'تخطيط المسار الوظيفي', 'توجيه مهني شخصي', 'تطوير المهنة', 'أهداف مهنية', 'فرص وظيفية', 'نجاح مهني']
          : ['career consulting', 'career path planning', 'personal career guidance', 'career development', 'professional goals', 'job opportunities', 'career success']
        }
      />
      {/* Hanging Bulb Light */}
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-950" dir={direction}>
        {/* Wire/Cord */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "24rem", opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="absolute top-0 w-1 bg-gray-600 h-96 shadow-sm"
        ></motion.div>

        {/* Bulb Container */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          className="relative mt-64"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
            className="absolute inset-0 rounded-full bg-[#004f38] opacity-30 blur-xl scale-150 animate-pulse"
          ></motion.div>
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
            className="absolute inset-0 rounded-full bg-[#004f38] opacity-40 blur-lg scale-125 animate-pulse"
          ></motion.div>

          {/* Main Bulb */}
          <div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1, type: "spring" }}
            className="relative w-24 h-32 bg-gradient-to-b from-[#b3d4cc] to-[#004f38] rounded-full shadow-2xl"
          >
            {/* Bulb Base/Screw */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute -top-5 left-1/3 transform -translate-x-1/2 w-8 h-6 bg-gray-700 rounded-t-lg"
            >
              <div className="w-full h-1 bg-gray-600 mt-1"></div>
              <div className="w-full h-1 bg-gray-600 mt-1"></div>
              <div className="w-full h-1 bg-gray-600 mt-1"></div>
            </motion.div>

            {/* Bulb Highlight */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="absolute top-4 left-4 w-6 h-8 bg-white opacity-40 rounded-full transform rotate-12"
            ></motion.div>

            {/* Inner Filament Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-12 opacity-60">
              <div className="w-0.5 h-full bg-yellow-600 mx-auto"></div>
              <div className="absolute top-2 left-1 w-6 h-0.5 bg-yellow-600 rounded-full"></div>
              <div className="absolute top-4 left-1 w-6 h-0.5 bg-yellow-600 rounded-full"></div>
              <div className="absolute top-6 left-1 w-6 h-0.5 bg-yellow-600 rounded-full"></div>
            </div>
          </div>

          {/* Ground Light Projection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="absolute top-32 left-1/2 transform -translate-x-1/2 w-48 h-12 bg-gradient-radial from-[#004f38] via-[#b3d4cc] to-transparent opacity-20 rounded-full blur-sm"
          ></motion.div>
        </motion.div>

        {/* Coming Soon Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7, type: "spring" }}
          className="mt-16 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.8 }}
            className="text-4xl font-bold text-[#004f38] mb-4 animate-pulse"
          >
            {t("comingSoon.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2 }}
            className="text-lg text-gray-300 mb-6"
          >
            {t("comingSoon.careerAdvisingDesc")}
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 24px #004f38" }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.2 }}
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-3 bg-[#004f38] hover:bg-[#003d2e] text-white font-semibold rounded-lg shadow-lg shadow-[#004f38]/60 transition-all duration-300 relative
            before:content-[''] before:absolute before:inset-0 before:rounded-lg before:blur before:bg-[#004f38] before:opacity-40 before:-z-10 hover:before:opacity-70"
          >
            {t("comingSoon.returnToMain")}
          </motion.button>
        </motion.div>

        {/* Ambient Light Effect on Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="fixed inset-0 bg-gradient-radial from-[#002a1f] via-transparent to-transparent pointer-events-none"
        ></motion.div>
      </div>
    </>
  );
}
