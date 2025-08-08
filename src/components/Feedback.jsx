import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InterviewFeedback } from "../constants";
import { useLanguage } from "../context/LanguageContext";

// Sample testimonials data - replace with your own
const testimonials = InterviewFeedback;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { t, direction } = useLanguage();
  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const getColorStyles = (color) => {
    const colorMap = {
      red: {
        gradient: "from-red-500 to-red-600",
        border: "border-red-500",
        text: "text-red-600",
        bg: "bg-red-50",
        shadow: "shadow-red-200",
      },
      green: {
        gradient: "from-[#004f38] to-[#003d2e]",
        border: "border-[#004f38]",
        text: "text-[#004f38]",
        bg: "bg-[#e6f2ef]",
        shadow: "shadow-[#004f38]/20",
      },
      blue: {
        gradient: "from-blue-500 to-blue-600",
        border: "border-blue-500",
        text: "text-blue-600",
        bg: "bg-blue-50",
        shadow: "shadow-blue-200",
      },
      yellow: {
        gradient: "from-yellow-500 to-yellow-600",
        border: "border-yellow-500",
        text: "text-yellow-600",
        bg: "bg-yellow-50",
        shadow: "shadow-yellow-200",
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];
  const colorStyles = getColorStyles(currentTestimonial.color);

  return (
    <section className="py-20 px-4 relative overflow-visible">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#004f38] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#003d2e] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold text-[#004f38] mb-4"
            dangerouslySetInnerHTML={{
              __html: t("feedback.testimonialsTitle"),
            }}
          />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("feedback.testimonialsDesc")}
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`${colorStyles.bg} rounded-3xl p-8 md:p-12 ${colorStyles.border} border-2 ${colorStyles.shadow} shadow-xl relative`}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Quote Icon */}
              <div
                className={`absolute top-6 left-6 w-12 h-12 bg-gradient-to-r ${colorStyles.gradient} rounded-full flex items-center justify-center`}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <div className="mt-8">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6 font-medium">
                  "{currentTestimonial.text}"
                </p>

                {/* Client Name and Rating */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className={`text-xl font-bold ${colorStyles.text}`}>
                      {currentTestimonial.name}
                    </h4>
                  </div>

                  {/* Star Rating */}
                  <div className="flex space-x-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${colorStyles.text}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className={`flex justify-center mt-8 ${direction === 'rtl' ? 'space-x-2 space-x-reverse' : 'space-x-2'}`}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? `bg-gradient-to-r ${getColorStyles(testimonials[index].color).gradient
                  } scale-125`
                  : "bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>

        {/* Mini Testimonials Grid (Hidden on mobile) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${getColorStyles(testimonial.color).bg
                } p-6 rounded-2xl border ${getColorStyles(testimonial.color).border
                } cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105`}
              onClick={() => goToTestimonial(index)}
            >
              <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                "{testimonial.text.substring(0, 100)}..."
              </p>
              <div className="flex justify-between items-center">
                <span
                  className={`font-semibold ${getColorStyles(testimonial.color).text
                    }`}
                >
                  {testimonial.name}
                </span>
                <div className={`flex ${direction === 'rtl' ? 'space-x-1 space-x-reverse' : 'space-x-1'}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${getColorStyles(testimonial.color).text
                        }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t("feedback.readyTitle")}
          </h3>
          <motion.a
            href="https://wa.me/966551626317"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative mt-10 inline-flex items-center px-8 py-4 font-bold text-white bg-[#004f38] border-4 border-[#004f38] overflow-hidden no-underline group rounded-lg hover:bg-[#003d2e] transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            {t("feedback.contactUs")}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
