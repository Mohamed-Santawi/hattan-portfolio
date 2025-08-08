import React from "react";
import Header from "../components/Header";
import { meeting, Chair1, Chair2, Chair3 } from "../assets";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import Footer from "../components/Footer";
import Feedback from "../components/Feedback";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

function InterviewContent() {
  const { t, direction } = useLanguage();
  return (
    <>
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b px-6">
        <div className={`max-w-7xl w-full flex flex-col gap-12 py-12 items-center justify-center ${direction === 'rtl' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
          {/* Left: Text and Buttons */}
          <div className={`flex-1 text-center ${direction === 'rtl' ? 'md:text-right' : 'md:text-left'}`}>
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-[#004f38] mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.5 }}
            >
              <span
                dangerouslySetInnerHTML={{ __html: t("interview.heroTitle") }}
              />
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.8 }}
            >
              {t("interview.heroDesc", {
                defaultValue:
                  "Personalized mock interviews and expert guidance to help you prepare, impress, and land your dream job. Practice with a professional and get detailed feedback tailored to your career goals.",
              })}
            </motion.p>
            <motion.div
              className={`flex flex-col sm:flex-row gap-4 ${direction === 'rtl' ? 'justify-start' : 'justify-center md:justify-start'}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1, delay: 1.1 }}
            >
              <motion.a
                href="https://mediocology.com/mock-interview/p149740837"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#004f38] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#003d2e] transition inline-block text-center"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
              >
                {t("interview.bookTraining", {
                  defaultValue: "Book Your Interview Training",
                })}
              </motion.a>
              <motion.button
                onClick={() => (window.location.href = "#mock-interview")}
                className="bg-white border border-[#004f38] text-[#004f38] px-6 py-3 rounded-xl font-semibold hover:bg-[#e6f2ef] transition"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
              >
                {t("interview.startMock", {
                  defaultValue: "Start Mock Interview",
                })}
              </motion.button>
            </motion.div>
          </div>
          {/* Right: Image */}
          <motion.img
            src={meeting}
            alt={t("interview.meetingAlt", { defaultValue: "Meeting" })}
            className="mx-auto md:mx-0 w-64 h-64 md:w-96 md:h-96 object-contain flex-1"
            initial={{ opacity: 0, scale: 0.7, y: -40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
          />
        </div>
      </section>

      {/* Mock Interview Section */}
      <section
        id="mock-interview"
        className="w-full min-h-screen flex items-center justify-center px-6 py-16"
      >
        <div className="max-w-7xl w-full">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#004f38] mb-6">
              <span
                dangerouslySetInnerHTML={{ __html: t("interview.mockTitle") }}
              />
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t("interview.mockDesc", {
                defaultValue:
                  "Practice in realistic interview environments with our professional setup. Get comfortable with different interview scenarios and receive instant feedback.",
              })}
            </p>
          </motion.div>

          {/* Three Images with Animations */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            {/* Chair 1 */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, x: -60, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="relative">
                <motion.img
                  src={Chair1}
                  alt={t("interview.chair1Alt", {
                    defaultValue: "Professional Interview Setup",
                  })}
                  whileHover={{ rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <h3 className="text-2xl font-bold text-[#004f38] mt-6 mb-3">
                {t("interview.chair1Title", {
                  defaultValue: "Break Interview Fear",
                })}
              </h3>
              <p className="text-gray-600 max-w-xs">
                {t("interview.chair1Desc", {
                  defaultValue:
                    "Practice in a safe environment where mistakes become learning opportunities, not career setbacks.",
                })}
              </p>
            </motion.div>

            {/* Chair 2 - Center with special animation */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, x: -60, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="relative">
                <motion.img
                  src={Chair2}
                  alt={t("interview.chair2Alt", {
                    defaultValue: "Professional Interview Setup",
                  })}
                  whileHover={{ rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <h3 className="text-2xl font-bold text-[#004f38] mt-6 mb-3">
                {t("interview.chair2Title", {
                  defaultValue: "Assess your performance",
                })}
              </h3>
              <p className="text-gray-600 max-w-xs">
                {t("interview.chair2Desc", {
                  defaultValue:
                    "Get detailed analytics on your responses, body language, and communication skills with scoring breakdowns.",
                })}
              </p>
            </motion.div>

            {/* Chair 3 */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, x: -60, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="relative">
                <motion.img
                  src={Chair3}
                  alt={t("interview.chair3Alt", {
                    defaultValue: "Professional Interview Setup",
                  })}
                  whileHover={{ rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <h3 className="text-2xl font-bold text-[#004f38] mt-6 mb-3">
                {t("interview.chair3Title", { defaultValue: "Get Feedback" })}
              </h3>
              <p className="text-gray-600 max-w-xs">
                {t("interview.chair3Desc", {
                  defaultValue:
                    "Receive personalized insights and actionable tips from AI coaches to improve your interview technique.",
                })}
              </p>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1, delay: 1 }}
          >
            <motion.a
              href="https://mediocology.com/mock-interview/p149740837"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#004f38] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#003d2e] transition-all duration-300 shadow-lg inline-block"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 79, 56, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {t("interview.tryNow", {
                defaultValue: "Try Mock Interview Now",
              })}
            </motion.a>
          </motion.div>
        </div>
      </section>
      <Feedback />
    </>
  );
}

// Header is outside the SectionWrapper
export default function Interview() {
  const { language } = useLanguage();
  
  return (
    <>
      <SEO 
        title={language === 'ar' ? 'مدرب مهارات المقابلات' : 'Interview Skills Trainer'}
        description={language === 'ar' 
          ? 'تدريب احترافي لمهارات المقابلات الشخصية - تحليل الأسئلة الصعبة، إتقان لغة الجسد، بناء الإجابات المقنعة، والتحضير النفسي. برنامج شامل لضمان تميزك في أي مقابلة عمل.'
          : 'Professional interview skills training - Analyze tough questions, master body language, craft compelling answers, and psychological preparation. Comprehensive program to ensure you excel in any job interview.'
        }
        url={`${window.location.origin}/services/interview`}
        pageType="interview"
        keywords={language === 'ar' 
          ? ['تدريب المقابلات', 'مهارات المقابلة الشخصية', 'الأسئلة الصعبة', 'لغة الجسد', 'تحضير المقابلة', 'استراتيجيات المقابلة']
          : ['interview training', 'job interview skills', 'difficult questions', 'body language', 'interview preparation', 'interview strategies']
        }
      />
      <Header />
      {SectionWrapper(InterviewContent, "interview")()}

      <Footer />
    </>
  );
}
