import React, { useEffect, useState } from "react";

import {
  BrickmanLogo,
  PaperLeft,
  PaperRight,
  Red,
  Blue,
  Green,
  Yellow,
  CompanyLogo,
  Vailid,
  ActionableData,
  BetterInsight,
  SelfAwareness,
  EmotionalIntellegent,
  LeadershipDevelopment,
  TeamBuilding,
  CareerPlanning,
  HiringRecruitment,
  Conflict_Resolution,
  Communication_Skills,
  PerformanceManagement,
  OrganizationalCulture,
  CoachingMentoring,
  StressManagement,
  SalesTraining,
  ChangeManagement,
  CareerFields,
  Hobbies,
  Strengths,
  People,
  StressManagmentBehvior,
  LearningStyle,
  TimeManagement,
  WorkEnvironment,
  CausesofStress,
  Interests,
  BirkmanRed,
  BirkmanGreen,
  BirkmanYellow,
  BirkmanBlue,
  Tap,
} from "../assets";
import Header from "../components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { birkmanFeedback } from "../constants";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

function AnimatedNumber() {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    let start = 1;
    const end = 65;
    const duration = 1200; // ms
    const stepTime = Math.max(Math.floor(duration / (end - start)), 15);
    let current = start;
    const timer = setInterval(() => {
      current += 1;
      setNumber(current);
      if (current >= end) {
        clearInterval(timer);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.span
      className="text-[#004f38]"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
    >
      {number}+
    </motion.span>
  );
}

function RotatingCards() {
  const { t } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // Define the cards array with translated content
  const cards = [
    {
      title: t("birkman.cardDoerTitle"),
      color: t("birkman.cardDoerColor"),
      description: t("birkman.cardDoerDesc"),
    },
    {
      title: t("birkman.cardCommunicatorTitle"),
      color: t("birkman.cardCommunicatorColor"),
      description: t("birkman.cardCommunicatorDesc"),
    },
    {
      title: t("birkman.cardAnalyzerTitle"),
      color: t("birkman.cardAnalyzerColor"),
      description: t("birkman.cardAnalyzerDesc"),
    },
    {
      title: t("birkman.cardThinkerTitle"),
      color: t("birkman.cardThinkerColor"),
      description: t("birkman.cardThinkerDesc"),
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".card") &&
        !event.target.closest(".modal-card")
      ) {
        setIsPaused(false);
        setSelectedCard(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleCardClick = (event, cardIndex) => {
    event.stopPropagation();
    setIsPaused(true);
    setSelectedCard(cardIndex);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsPaused(false);
  };

  return (
    <>
      <div className="mt-16 w-full flex justify-center">
        <div className="wrapper">
          <div
            className={`inner ${isPaused ? "paused" : ""}`}
            style={{ "--quantity": 4 }}
          >
            <div
              className="card"
              style={{ "--index": 0, "--color-card": "185, 28, 28" }}
              onClick={(e) => handleCardClick(e, 0)}
            >
              <div className="card-content">
                <div className="card-title">{t("birkman.cardDoerTitle")}</div>
                <div className="card-color-label">
                  {t("birkman.cardDoerColor")}
                </div>
                <div className="card-text">{t("birkman.cardDoerDesc")}</div>
              </div>
            </div>
            <div
              className="card"
              style={{ "--index": 1, "--color-card": "0, 79, 56" }}
              onClick={(e) => handleCardClick(e, 1)}
            >
              <div className="card-content">
                <div className="card-title">
                  {t("birkman.cardCommunicatorTitle")}
                </div>
                <div className="card-color-label">
                  {t("birkman.cardCommunicatorColor")}
                </div>
                <div className="card-text">
                  {t("birkman.cardCommunicatorDesc")}
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{ "--index": 2, "--color-card": "234, 179, 8" }}
              onClick={(e) => handleCardClick(e, 2)}
            >
              <div className="card-content">
                <div className="card-title">
                  {t("birkman.cardAnalyzerTitle")}
                </div>
                <div className="card-color-label">
                  {t("birkman.cardAnalyzerColor")}
                </div>
                <div className="card-text">{t("birkman.cardAnalyzerDesc")}</div>
              </div>
            </div>
            <div
              className="card"
              style={{ "--index": 3, "--color-card": "37, 99, 235" }}
              onClick={(e) => handleCardClick(e, 3)}
            >
              <div className="card-content">
                <div className="card-title">
                  {t("birkman.cardThinkerTitle")}
                </div>
                <div className="card-color-label">
                  {t("birkman.cardThinkerColor")}
                </div>
                <div className="card-text">{t("birkman.cardThinkerDesc")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for selected card */}
      {selectedCard !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="modal-card max-w-2xl w-full max-h-[90vh] rounded-2xl p-8 shadow-2xl overflow-y-auto bg-white"
            style={{
              border: `4px solid ${selectedCard === 0
                ? "rgb(185, 28, 28)"
                : selectedCard === 1
                  ? "rgb(0, 79, 56)"
                  : selectedCard === 2
                    ? "rgb(234, 179, 8)"
                    : "rgb(37, 99, 235)"
                }`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2
                  className="text-4xl font-bold mb-2"
                  style={{
                    color:
                      selectedCard === 0
                        ? "rgb(185, 28, 28)"
                        : selectedCard === 1
                          ? "rgb(0, 79, 56)"
                          : selectedCard === 2
                            ? "rgb(234, 179, 8)"
                            : "rgb(37, 99, 235)",
                  }}
                >
                  {cards[selectedCard].title}
                </h2>
                <div
                  className="text-xl font-semibold px-4 py-2 border-2 rounded-full inline-block"
                  style={{
                    color:
                      selectedCard === 0
                        ? "rgb(185, 28, 28)"
                        : selectedCard === 1
                          ? "rgb(0, 79, 56)"
                          : selectedCard === 2
                            ? "rgb(234, 179, 8)"
                            : "rgb(37, 99, 235)",
                    borderColor:
                      selectedCard === 0
                        ? "rgb(185, 28, 28)"
                        : selectedCard === 1
                          ? "rgb(0, 79, 56)"
                          : selectedCard === 2
                            ? "rgb(234, 179, 8)"
                            : "rgb(37, 99, 235)",
                    backgroundColor:
                      selectedCard === 0
                        ? "rgba(185, 28, 28, 0.1)"
                        : selectedCard === 1
                          ? "rgba(0, 79, 56, 0.1)"
                          : selectedCard === 2
                            ? "rgba(234, 179, 8, 0.1)"
                            : "rgba(37, 99, 235, 0.1)",
                  }}
                >
                  {cards[selectedCard].color}
                </div>
              </div>
              <button
                onClick={closeModal}
                className="rounded-full p-2 transition-colors duration-200 hover:bg-gray-200"
                style={{
                  color:
                    selectedCard === 0
                      ? "rgb(185, 28, 28)"
                      : selectedCard === 1
                        ? "rgb(0, 79, 56)"
                        : selectedCard === 2
                          ? "rgb(234, 179, 8)"
                          : "rgb(37, 99, 235)",
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              {cards[selectedCard].description}
            </p>
          </motion.div>
        </div>
      )}

      <style jsx>{`
        .wrapper {
          width: 100%;
          height: 700px;
          position: relative;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .inner {
          --w: 280px;
          --h: 400px;
          --translateZ: calc((var(--w) + var(--h)) / 2 + 100px);
          --rotateX: -5deg;
          --perspective: 1500px;
          position: absolute;
          width: var(--w);
          height: var(--h);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          transform-style: preserve-3d;
          animation: rotating 25s linear infinite;
        }

        .inner.paused {
          animation-play-state: paused;
        }

        @keyframes rotating {
          from {
            transform: translate(-50%, -50%) perspective(var(--perspective))
              rotateX(var(--rotateX)) rotateY(0);
          }
          to {
            transform: translate(-50%, -50%) perspective(var(--perspective))
              rotateX(var(--rotateX)) rotateY(1turn);
          }
        }

        .card {
          position: absolute;
          border: 3px solid rgba(var(--color-card), 0.8);
          border-radius: 16px;
          overflow: hidden;
          inset: 0;
          transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
            translateZ(var(--translateZ));
          background: rgba(var(--color-card), 0.1);
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
            translateZ(calc(var(--translateZ) + 20px));
          border-color: rgba(var(--color-card), 1);
        }

        .card-content {
          width: 100%;
          height: 100%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: linear-gradient(
            135deg,
            rgba(var(--color-card), 0.2) 0%,
            rgba(var(--color-card), 0.05) 100%
          );
        }

        .card-title {
          font-size: 24px;
          font-weight: bold;
          color: rgba(var(--color-card), 1);
          margin-bottom: 8px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .card-color-label {
          font-size: 18px;
          font-weight: 600;
          color: rgba(var(--color-card), 0.9);
          margin-bottom: 16px;
          padding: 4px 12px;
          border: 2px solid rgba(var(--color-card), 0.6);
          border-radius: 20px;
          background: rgba(var(--color-card), 0.1);
        }

        .card-text {
          font-size: 13px;
          line-height: 1.4;
          color: #333;
          text-align: justify;
          overflow-y: auto;
          max-height: 280px;
        }

        .card-text::-webkit-scrollbar {
          width: 4px;
        }

        .card-text::-webkit-scrollbar-track {
          background: rgba(var(--color-card), 0.1);
          border-radius: 2px;
        }

        .card-text::-webkit-scrollbar-thumb {
          background: rgba(var(--color-card), 0.5);
          border-radius: 2px;
        }
      `}</style>
    </>
  );
}

// Add this component after RotatingCards function and before the main Birkman function
function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { t } = useLanguage();
  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === birkmanFeedback.length - 1 ? 0 : prevIndex + 1
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
    return colorMap[color] || colorMap.green;
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === birkmanFeedback.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? birkmanFeedback.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = birkmanFeedback[currentIndex];
  const colorStyles = getColorStyles(currentTestimonial.color);

  return (
    <section className="py-20 px-4 relative overflow-visible mt-24">
      {" "}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#004f38] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
            dangerouslySetInnerHTML={{ __html: t("birkman.testimonialsTitle") }}
          />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("birkman.testimonialsDesc")}
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
              className={`${colorStyles.bg} rounded-3xl p-4 md:p-8 lg:p-12 ${colorStyles.border} border-2 ${colorStyles.shadow} shadow-xl relative mx-2 md:mx-0`}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Quote Icon */}
              <div
                className={`absolute top-4 left-4 md:top-6 md:left-6 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r ${colorStyles.gradient} rounded-full flex items-center justify-center`}
              >
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <div className="mt-6 md:mt-8">
                <p
                  className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 mb-4 md:mb-6 font-medium"
                  style={{
                    textAlign: currentTestimonial.text.match(/[\u0600-\u06FF]/)
                      ? "right"
                      : "left",
                  }}
                >
                  "{currentTestimonial.text}"
                </p>

                {/* Client Name and Rating */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h4
                      className={`text-lg md:text-xl font-bold ${colorStyles.text}`}
                    >
                      {currentTestimonial.name}
                    </h4>
                  </div>

                  {/* Star Rating */}
                  <div className="flex space-x-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 md:w-5 md:h-5 ${colorStyles.text}`}
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

          {/* Navigation Arrows - Mobile Optimized */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 z-20 touch-manipulation"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-gray-600"
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
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 z-20 touch-manipulation"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-gray-600"
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
        <div className="flex justify-center mt-8 space-x-2">
          {birkmanFeedback.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? `bg-gradient-to-r ${getColorStyles(birkmanFeedback[index].color).gradient
                } scale-125`
                : "bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>

        {/* Mini Testimonials Grid (Hidden on mobile) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-16">
          {birkmanFeedback.slice(0, 3).map((testimonial, index) => (
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
              <p
                className="text-sm text-gray-600 mb-3 line-clamp-3"
                style={{
                  textAlign: testimonial.text.match(/[\u0600-\u06FF]/)
                    ? "right"
                    : "left",
                }}
              >
                "{testimonial.text.substring(0, 100)}..."
              </p>
              <div className="flex justify-between items-center">
                <span
                  className={`font-semibold ${getColorStyles(testimonial.color).text
                    }`}
                >
                  {testimonial.name}
                </span>
                <div className="flex space-x-1">
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
      </div>
    </section>
  );
}

// Add this new component after TestimonialsSection and before BirkmanComponent

function FinalCTASection() {
  const { t, direction, language } = useLanguage();
  return (
    <section
      className="py-16 md:py-20 lg:py-32 px-4 relative overflow-hidden"
      dir={direction}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 md:top-20 left-10 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-32 h-32 md:w-80 md:h-80 bg-gradient-to-r from-[#004f38] to-[#003d2e] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-72 md:h-72 bg-gradient-to-r from-red-600 to-red-700 rounded-full blur-3xl"></div>
        <div className="absolute top-5 md:top-10 right-5 md:right-10 w-36 h-36 md:w-64 md:h-64 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 px-2">
          <h2
            dir={language === "ar" ? "rtl" : undefined}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: t("birkman.feelingTitle") }}
          />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t("birkman.feelingDesc")}
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl border border-white/20">
          {/* Birkman Assessment Benefits */}
          <div className="text-center mb-8 md:mb-12">
            <h3
              dir={language === "ar" ? "rtl" : undefined}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4 leading-tight"
              dangerouslySetInnerHTML={{
                __html: t("birkman.personalMapTitle"),
              }}
            />
            <p
              className="text-base md:text-lg text-gray-600 mb-6 md:mb-8"
              dangerouslySetInnerHTML={{ __html: t("birkman.personalMapDesc") }}
            />
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              {
                icon: CareerFields,
                title: t("birkman.gridCareer"),
                color: "blue",
                border: "border-blue-500",
                text: "text-blue-700",
              },
              {
                icon: Hobbies,
                title: t("birkman.gridHobbies"),
                color: "green",
                border: "border-[#004f38]",
                text: "text-[#004f38]",
              },
              {
                icon: Strengths,
                title: t("birkman.gridStrengths"),
                color: "red",
                border: "border-red-500",
                text: "text-red-700",
              },
              {
                icon: People,
                title: t("birkman.gridNeeds"),
                color: "yellow",
                border: "border-yellow-500",
                text: "text-yellow-700",
              },
              {
                icon: StressManagmentBehvior,
                title: t("birkman.gridStress"),
                color: "green",
                border: "border-[#004f38]",
                text: "text-[#004f38]",
              },
              {
                icon: LearningStyle,
                title: t("birkman.gridLearning"),
                color: "blue",
                border: "border-blue-500",
                text: "text-blue-700",
              },
              {
                icon: TimeManagement,
                title: t("birkman.gridTime"),
                color: "yellow",
                border: "border-yellow-500",
                text: "text-yellow-700",
              },
              {
                icon: WorkEnvironment,
                title: t("birkman.gridWork"),
                color: "red",
                border: "border-red-500",
                text: "text-red-700",
              },
              {
                icon: CausesofStress,
                title: t("birkman.gridCauses"),
                color: "yellow",
                border: "border-yellow-500",
                text: "text-yellow-700",
              },
              {
                icon: Interests,
                title: t("birkman.gridInterests"),
                color: "green",
                border: "border-[#004f38]",
                text: "text-[#004f38]",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-${item.color}-50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 ${item.border}`}
              >
                <div
                  className={`w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto shadow-md border-2 ${item.border}`}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 object-contain"
                  />
                </div>
                <h4
                  className={`${item.text} font-semibold text-center text-xs sm:text-sm leading-tight`}
                >
                  {item.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#004f38] to-[#003d2e] rounded-xl md:rounded-2xl p-6 md:p-8 text-white">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                {t("birkman.readyTitle")}
              </h4>
              <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90">
                {t("birkman.readyDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                <a
                  href="https://mediocology.com/birkman-assessment/p524639417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-white text-[#004f38] font-bold rounded-lg md:rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg text-sm md:text-base w-full sm:w-auto justify-center touch-manipulation"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  {t("birkman.startAssessment")}
                </a>
                <a
                  href="https://wa.me/966551626317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white font-bold rounded-lg md:rounded-xl hover:bg-white hover:text-[#004f38] transition-all duration-300 text-sm md:text-base w-full sm:w-auto justify-center touch-manipulation"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 mr-2"
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
                  {t("birkman.contactUs")}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-12 md:mt-16">
          {[
            {
              number: "60+",
              label: t("birkman.statsReports"),
              color: "from-blue-600 to-blue-700",
            },
            {
              number: "70+",
              label: t("birkman.statsYears"),
              color: "from-[#004f38] to-[#003d2e]",
            },
            {
              number: "1000+",
              label: t("birkman.statsOrgs"),
              color: "from-red-600 to-red-700",
            },
            {
              number: "85%",
              label: t("birkman.statsAccuracy"),
              color: "from-yellow-500 to-yellow-600",
            },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1 md:mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileBirkmanMap() {
  const { t } = useLanguage();
  const [selectedColor, setSelectedColor] = useState(null);

  const colorData = [
    {
      id: 0,
      title: t("birkman.cardDoerTitle"),
      color: t("birkman.cardDoerColor"),
      image: BirkmanRed,
      description: t("birkman.cardDoerDesc"),

      bgColor: "rgb(185, 28, 28)",
      position: "top-0 left-0",
      textPosition: "items-center justify-center pt-4 pl-3",
    },
    {
      id: 1,
      title: t("birkman.cardCommunicatorTitle"),
      color: t("birkman.cardCommunicatorColor"),
      image: BirkmanGreen,
      description: t("birkman.cardCommunicatorDesc"),
      bgColor: "rgb(0, 79, 56)",
      position: "top-0 right-0",
      textPosition: "items-center justify-center pr-3 pt-4",
    },
    {
      id: 2,
      title: t("birkman.cardAnalyzerTitle"),
      color: t("birkman.cardAnalyzerColor"),
      image: BirkmanYellow,
      description: t("birkman.cardAnalyzerDesc"),
      bgColor: "rgb(234, 179, 8)",
      position: "bottom-0 left-0",
      textPosition: "items-center justify-center pb-4 pl-3",
    },
    {
      id: 3,
      title: t("birkman.cardThinkerTitle"),
      color: t("birkman.cardThinkerColor"),
      image: BirkmanBlue,
      description: t("birkman.cardThinkerDesc"),
      bgColor: "rgb(37, 99, 235)",
      position: "bottom-0 right-0",
      textPosition: "items-center justify-center pb-4 pr-3",
    },
  ];

  const handleColorClick = (colorId) => {
    setSelectedColor(colorId);
  };

  const closeModal = () => {
    setSelectedColor(null);
  };

  return (
    <>
      {/* Mobile Interactive Map */}
      <div className="w-full max-w-md mx-auto relative aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
        {colorData.map((color) => (
          <motion.div
            key={color.id}
            className={`absolute w-1/2 h-1/2 ${color.position} cursor-pointer overflow-hidden group`}
            whileHover={{
              scale: 1.03,
              zIndex: 10,
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleColorClick(color.id)}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <img
              src={color.image}
              alt={`${color.color} Quadrant`}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-125"
            />

            {/* Beautiful bright overlay with color info */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/15 to-white/5 flex items-center justify-center transition-all duration-500 group-hover:from-white/40 group-hover:via-white/25 group-hover:to-white/10">
              <div
                className={`text-center text-white transform transition-all duration-300 group-hover:scale-110 flex flex-col h-full w-full absolute inset-0 ${color.textPosition}`}
              >
                <h3 className="font-bold text-xs sm:text-sm md:text-base drop-shadow-lg mb-1 mx-2 tracking-wide text-center">
                  {color.title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm drop-shadow-lg font-medium opacity-95 group-hover:opacity-100 tracking-wider text-center">
                  {color.color}
                </p>
              </div>
            </div>

            {/* Elegant border effect with color */}
            <div
              className="absolute inset-0 border-2 transition-all duration-300 group-hover:shadow-2xl rounded-lg"
              style={{
                borderColor: "transparent",
              }}
            />

            {/* Beautiful colored glow effect on hover */}
            <div
              className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-30 rounded-lg"
              style={{
                background: `radial-gradient(circle at center, ${color.bgColor}50, ${color.bgColor}20, transparent)`,
                filter: "blur(2px)",
              }}
            />

            {/* Bright rim light effect */}
            <div
              className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-60 rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${color.bgColor}30, transparent 30%, transparent 70%, ${color.bgColor}30)`,
                mixBlendMode: "overlay",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal for selected color */}
      {selectedColor !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="modal-card max-w-2xl w-full max-h-[90vh] rounded-2xl p-6 md:p-8 shadow-2xl overflow-y-auto bg-white"
            style={{
              border: `4px solid ${colorData[selectedColor].bgColor}`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2
                  className="text-2xl md:text-4xl font-bold mb-2"
                  style={{ color: colorData[selectedColor].bgColor }}
                >
                  {colorData[selectedColor].title}
                </h2>
                <div
                  className="text-lg md:text-xl font-semibold px-4 py-2 border-2 rounded-full inline-block"
                  style={{
                    color: colorData[selectedColor].bgColor,
                    borderColor: colorData[selectedColor].bgColor,
                    backgroundColor: `${colorData[selectedColor].bgColor}1A`,
                  }}
                >
                  {colorData[selectedColor].color}
                </div>
              </div>
              <button
                onClick={closeModal}
                className="rounded-full p-2 transition-colors duration-200 hover:bg-gray-200"
                style={{ color: colorData[selectedColor].bgColor }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              {colorData[selectedColor].description}
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
}

function BirkmanComponent() {
  const { t, direction } = useLanguage();
  return (
    <>
      {/* BrickmanLogo as a fixed background, always visible */}
      <img
        src={BrickmanLogo}
        alt="Birkman Logo"
        className="fixed right-0 top-1/2 -translate-y-1/2 w-[70vw] max-w-none opacity-10 pointer-events-none select-none z-0"
        style={{ objectFit: "contain", objectPosition: "right" }}
      />

      <div className="relative z-10">
        {/* First Section - Mobile Optimized with Minimal Gap - Moved Up */}
        <section
          className={`min-h-[70vh] md:min-h-screen flex flex-col-reverse items-center justify-between px-4 md:px-8 lg:px-24 pt-2 md:pt-8 lg:pt-16 pb-6 md:pb-10 gap-0 md:gap-6 -mt-4 md:-mt-8 ${direction === 'rtl' ? 'md:flex-row' : 'md:flex-row'}`}
          dir={direction}
        >
          {/* Left section */}
          <div className={`z-40 max-w-3xl w-full text-center ${direction === 'rtl' ? 'md:text-right' : 'md:text-left'}`}>
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                delay: 1.3,
                damping: 25,
                duration: 1.5,
              }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 md:mb-6 text-[#004f38] leading-tight"
            >
              {t("birkman.whatIsTitle")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                delay: 1.8,
                damping: 25,
                duration: 1.5,
              }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-3 md:mb-6 leading-relaxed px-2 md:px-0"
            >
              {t("birkman.whatIsDesc")}
            </motion.p>

            <motion.a
              href="https://mediocology.com/birkman-assessment/p524639417"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                delay: 2.2,
                damping: 25,
                duration: 1.5,
              }}
              className={`relative inline-block px-6 py-3 md:px-8 md:py-4 font-bold text-sm md:text-base text-[#004f38] border-3 md:border-4 border-[#004f38] bg-transparent overflow-hidden no-underline group rounded-lg touch-manipulation ${direction === 'rtl' ? 'ml-auto' : 'mr-auto'}`}
            >
              <span className="absolute left-0 top-0 w-full h-full bg-[#004f38] -z-10 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 rounded-lg"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {t("birkman.bookSession")}
              </span>
            </motion.a>
          </div>

          {/* Right section - Mobile and Desktop optimized with minimal gap */}
          <div className="relative flex-1 flex items-center justify-center min-h-[120px] md:min-h-[300px] h-full w-full">
            {/* Mobile version - showing paper images with minimal gap */}
            <div className="md:hidden relative w-full h-24 sm:h-32 flex items-center justify-center -mt-2">
              <motion.img
                src={PaperLeft}
                alt="Left Paper"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
                className="absolute left-12 top-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 object-contain pointer-events-none z-10 opacity-70"
              />
              <motion.img
                src={PaperRight}
                alt="Right Paper"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", duration: 1.5, delay: 0.7 }}
                className="absolute right-12 top-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 object-contain pointer-events-none z-20 opacity-70"
              />
            </div>

            {/* Desktop version - original papers */}
            <motion.img
              src={PaperLeft}
              alt="Left Paper"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
              className="hidden md:block absolute left-0 top-1/4 -translate-y-1/2 max-w-[55%] w-full md:w-[18rem] lg:w-[40rem] xl:w-[28rem] pointer-events-none z-10"
              style={{ right: "55%" }}
            />
            <motion.img
              src={PaperRight}
              alt="Right Paper"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
              className="hidden md:block absolute right-0 top-1/4 -translate-y-1/2 max-w-[55%] w-full md:w-[18rem] lg:w-[40rem] xl:w-[28rem] pointer-events-none z-20"
              style={{ left: "55%" }}
            />
          </div>
        </section>

        {/* Final CTA Section - Add this */}
        <FinalCTASection />

        {/* Why Birkman is Better Section */}
        <section className="py-24 md:py-32 px-4" dir={direction}>
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-700 mb-4">
                {t("birkman.whyTitle")}
              </h2>
              <div className="w-32 h-1 bg-red-600 mx-auto rounded-full"></div>
            </div>
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-12">
              {/* Better Insight */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-red-600">
                <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <img
                    src={BetterInsight}
                    alt="Better Insight"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-4 text-center">
                  {t("birkman.betterInsightTitle")}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {t("birkman.betterInsightDesc")}
                </p>
              </div>
              {/* Self Awareness */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-red-600">
                <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <img
                    src={SelfAwareness}
                    alt="Self Awareness"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-4 text-center">
                  {t("birkman.selfAwarenessTitle")}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {t("birkman.selfAwarenessDesc")}
                </p>
              </div>
              {/* Actionable Data */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-red-600">
                <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <img
                    src={ActionableData}
                    alt="Actionable Data"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-4 text-center">
                  {t("birkman.actionableDataTitle")}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {t("birkman.actionableDataDesc")}
                </p>
              </div>
              {/* Tools for Emotional Intelligence */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-red-600">
                <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <img
                    src={EmotionalIntellegent}
                    alt="Emotional Intelligence"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-4 text-center">
                  {t("birkman.emotionalIntelligenceTitle")}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {t("birkman.emotionalIntelligenceDesc")}
                </p>
              </div>
              {/* Validated by Science */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-red-600">
                <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <img
                    src={Vailid}
                    alt="Validated by Science"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-4 text-center">
                  {t("birkman.validatedTitle")}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {t("birkman.validatedDesc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Birkman Uses Mind Map Section */}
        <section
          className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden"
          dir={direction}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 md:left-20 w-48 h-48 md:w-64 md:h-64 bg-blue-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-indigo-600 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Title */}
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-blue-800 mb-4">
                {t("birkman.usesTitle")}
              </h2>
              <p className="text-lg md:text-xl text-blue-700 max-w-2xl mx-auto px-4">
                {t("birkman.usesDesc")}
              </p>
              <div className="w-24 md:w-32 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
            </div>

            {/* Mobile Grid Layout with Pagination (visible on small screens) */}
            <MobileMindMapPagination />

            {/* Desktop Mind Map Layout (hidden on small screens) */}
            <div className="hidden md:block">
              {/* Mind Map Container */}
              <div className="relative flex items-center justify-center min-h-[600px] lg:min-h-[800px]">
                {/* Central Hub */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    delay: 0.5,
                    damping: 20,
                    duration: 1.5,
                  }}
                  className="absolute z-20 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
                >
                  <div className="text-center">
                    {/* Add Birkman Logo */}
                    <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2">
                      <img
                        src={BrickmanLogo}
                        alt="Birkman Logo"
                        className="w-full h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                    <div className="text-white font-bold text-sm md:text-lg">
                      {t("birkman.logoBirkman")}
                    </div>
                    <div className="text-white font-bold text-xs md:text-sm">
                      {t("birkman.logoUses")}
                    </div>
                  </div>
                </motion.div>

                {/* Mind Map Nodes */}
                {[
                  {
                    title: t("birkman.leadership"),
                    icon: LeadershipDevelopment,
                    angle: 0,
                    distance: 200,
                    delay: 0.7,
                  },
                  {
                    title: t("birkman.team"),
                    icon: TeamBuilding,
                    angle: 30,
                    distance: 220,
                    delay: 0.8,
                  },
                  {
                    title: t("birkman.career"),
                    icon: CareerPlanning,
                    angle: 60,
                    distance: 200,
                    delay: 0.9,
                  },
                  {
                    title: t("birkman.hiring"),
                    icon: HiringRecruitment,
                    angle: 90,
                    distance: 220,
                    delay: 1.0,
                  },
                  {
                    title: t("birkman.conflict"),
                    icon: Conflict_Resolution,
                    angle: 120,
                    distance: 200,
                    delay: 1.1,
                  },
                  {
                    title: t("birkman.communication"),
                    icon: Communication_Skills,
                    angle: 150,
                    distance: 220,
                    delay: 1.2,
                  },
                  {
                    title: t("birkman.performance"),
                    icon: PerformanceManagement,
                    angle: 180,
                    distance: 200,
                    delay: 1.3,
                  },
                  {
                    title: t("birkman.culture"),
                    icon: OrganizationalCulture,
                    angle: 210,
                    distance: 220,
                    delay: 1.4,
                  },
                  {
                    title: t("birkman.coaching"),
                    icon: CoachingMentoring,
                    angle: 240,
                    distance: 200,
                    delay: 1.5,
                  },
                  {
                    title: t("birkman.stress"),
                    icon: StressManagement,
                    angle: 270,
                    distance: 220,
                    delay: 1.6,
                  },
                  {
                    title: t("birkman.sales"),
                    icon: SalesTraining,
                    angle: 300,
                    distance: 200,
                    delay: 1.7,
                  },
                  {
                    title: t("birkman.change"),
                    icon: ChangeManagement,
                    angle: 330,
                    distance: 220,
                    delay: 1.8,
                  },
                ].map((node, index) => {
                  const radian = (node.angle * Math.PI) / 180;
                  // Responsive distance based on screen size - use a safe approach
                  const responsiveDistance =
                    node.distance +
                    (typeof window !== "undefined" && window.innerWidth >= 1024
                      ? 80
                      : 0);
                  const x = Math.cos(radian) * responsiveDistance;
                  const y = Math.sin(radian) * responsiveDistance;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        x: x,
                        y: y,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 50,
                        delay: node.delay,
                        damping: 20,
                        duration: 1.2,
                      }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                      }}
                      className="absolute z-10 group cursor-pointer"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      {/* Node */}
                      <div className="relative bg-white rounded-2xl p-3 md:p-4 shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 w-28 h-20 md:w-36 md:h-28 flex flex-col items-center justify-center text-center group-hover:shadow-xl">
                        <div className="w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2 flex items-center justify-center">
                          <img
                            src={node.icon}
                            alt={node.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-blue-800 font-semibold text-xs md:text-sm leading-tight">
                          {node.title}
                        </div>

                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  );
                })}

                {/* Animated Particles - Hidden on smaller screens */}
                <div className="hidden lg:block">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
                      animate={{
                        x: [0, Math.random() * 150 - 75, 0],
                        y: [0, Math.random() * 150 - 75, 0],
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 0.3, 0.6],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "linear",
                      }}
                      style={{
                        left: `${50 + (Math.random() - 0.5) * 40}%`,
                        top: `${50 + (Math.random() - 0.5) * 40}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Centered "What Color are you?" text */}
        <div className="w-full flex justify-center items-end gap-4 md:gap-8 mt-12 px-4"></div>

        {/* Centered "What Color are you?" text - Mobile Optimized */}
        <div
          className="w-full flex flex-wrap justify-center items-end gap-2 sm:gap-4 md:gap-8 mt-8 md:mt-12 px-4"
          dir={direction}
        >
          {/* Which + Red */}
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-red-800 mb-1 md:mb-2">
              {t("birkman.whichColor1")}
            </span>
            <img
              alt="Red"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-60 xl:h-60 2xl:w-80 2xl:h-80 object-contain"
              src={Red}
            />
          </div>
          {/* Color + Green */}
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-[#004f38] mb-1 md:mb-2">
              {t("birkman.whichColor2")}
            </span>
            <img
              alt="Green"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-60 xl:h-60 2xl:w-80 2xl:h-80 object-contain"
              src={Green}
            />
          </div>
          {/* Are + Yellow */}
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-yellow-800 mb-1 md:mb-2">
              {t("birkman.whichColor3")}
            </span>
            <img
              alt="Yellow"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-60 xl:h-60 2xl:w-80 2xl:h-80 object-contain"
              src={Yellow}
            />
          </div>
          {/* You? + Blue */}
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-blue-800 mb-1 md:mb-2">
              {t("birkman.whichColor4")}
            </span>
            <img
              alt="Blue"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-60 xl:h-60 2xl:w-80 2xl:h-80 object-contain"
              src={Blue}
            />
          </div>
        </div>

        {/* Interactive Cards/Map Section */}

        {/* Mobile Version - Interactive Birkman Map */}
        <section className="block md:hidden py-16 px-4">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("birkman.discoverYourColor"),
                }}
              />
              <p className="text-gray-600 font-bold flex items-center justify-center gap-2">
                <span>{t("birkman.tapToLearn")}</span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-flex"
                >
                  <img
                    src={Tap}
                    alt="Tap icon"
                    className="w-5 h-5 object-contain"
                  />
                </motion.div>
              </p>
            </motion.div>
            <MobileBirkmanMap />
          </div>
        </section>

        {/* Desktop Version - 3D Rotating Cards */}
        <div className="hidden md:block">
          <RotatingCards />
        </div>

        {/* Ready to Discover Your Color CTA - For both Mobile and Desktop */}

        <section className="py-16 px-4" dir={direction}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-50 via-[#e6f2ef] to-yellow-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6"
                dangerouslySetInnerHTML={{
                  __html: t("birkman.readyToDiscoverColor"),
                }}
              />
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed">
                {t("birkman.assessmentDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="https://mediocology.com/birkman-assessment/p524639417"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#004f38] to-[#003d2e] text-white font-bold rounded-xl hover:from-[#003d2e] hover:to-[#002a1f] transition-all duration-300 shadow-lg text-base w-full sm:w-auto justify-center touch-manipulation"
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  {t("birkman.startYourAssessment")}
                </motion.a>
                <motion.a
                  href="https://wa.me/966551626317"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 border-2 border-[#004f38] text-[#004f38] font-bold rounded-xl hover:bg-[#004f38] hover:text-white transition-all duration-300 text-base w-full sm:w-auto justify-center touch-manipulation"
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
                  {t("birkman.askQuestions")}
                </motion.a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 md:mt-10">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-blue-600">
                    60+
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("birkman.reports")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-[#004f38]">
                    70+
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("birkman.years")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-red-600">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("birkman.organizations")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-yellow-600">
                    85%
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("birkman.accuracy")}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />
      </div>
    </>
  );
}

// Mobile Mind Map Pagination Component
function MobileMindMapPagination() {
  const { t, direction, language } = useLanguage();
  const [visibleItems, setVisibleItems] = useState(4);

  const allItems = [
    { title: t("birkman.leadership"), icon: LeadershipDevelopment },
    { title: t("birkman.team"), icon: TeamBuilding },
    { title: t("birkman.career"), icon: CareerPlanning },
    { title: t("birkman.hiring"), icon: HiringRecruitment },
    { title: t("birkman.conflict"), icon: Conflict_Resolution },
    { title: t("birkman.communication"), icon: Communication_Skills },
    { title: t("birkman.performance"), icon: PerformanceManagement },
    { title: t("birkman.culture"), icon: OrganizationalCulture },
    { title: t("birkman.coaching"), icon: CoachingMentoring },
    { title: t("birkman.stress"), icon: StressManagement },
    { title: t("birkman.sales"), icon: SalesTraining },
    { title: t("birkman.change"), icon: ChangeManagement },
  ];

  const itemsPerPage = 4;
  const displayedItems = allItems.slice(0, visibleItems);
  const hasMoreItems = visibleItems < allItems.length;

  const showMoreItems = () => {
    if (hasMoreItems) {
      setVisibleItems((prev) => Math.min(prev + itemsPerPage, allItems.length));
    }
  };

  return (
    <div className="block md:hidden px-4">
      {/* Central Hub for Mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 60,
          delay: 0.3,
          damping: 20,
          duration: 1.5,
        }}
        className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-xl border-4 border-white mx-auto mb-8"
      >
        <div className="text-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1">
            <img
              src={BrickmanLogo}
              alt="Birkman Logo"
              className="w-full h-full object-contain filter brightness-0 invert"
            />
          </div>
          <div className="text-white font-bold text-xs sm:text-sm">
            {" "}
            {t("birkman.logoBirkman")}
          </div>
          <div className="text-white font-bold text-[10px] sm:text-xs">
            {t("birkman.logoUses")}
          </div>
        </div>
      </motion.div>

      {/* Grid of Mind Map Items */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto mb-6">
        {displayedItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 50,
              delay: 0.1 * (index % itemsPerPage),
              damping: 20,
              duration: 1.0,
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-xl p-4 shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 cursor-pointer hover:shadow-xl touch-manipulation"
          >
            <div className="text-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-blue-800 font-semibold text-xs sm:text-sm leading-tight">
                {item.title}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Arrow Button */}
      {hasMoreItems && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mb-6"
        >
          <motion.button
            onClick={showMoreItems}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-full p-4 shadow-lg transition-all duration-300 touch-manipulation flex items-center space-x-2"
          >
            <span className="text-sm font-medium">{t("birkman.showMore")}</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.button>
        </motion.div>
      )}

      {/* Progress Indicator */}
      <div className="flex justify-center mb-8 space-x-2">
        {Array.from(
          { length: Math.ceil(allItems.length / itemsPerPage) },
          (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${visibleItems > i * itemsPerPage ? "bg-blue-600" : "bg-gray-300"
                }`}
            />
          )
        )}
      </div>

      {/* Assessment Summary Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-4 border-blue-300 text-center shadow-xl"
      >
        <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
        <h3 className="text-blue-800 font-bold text-lg mb-2">
          {t("birkman.assessmentTitle")}
        </h3>
        <p className="text-blue-600 text-sm leading-relaxed mb-4">
          {t("birkman.assessmentDesc")}
        </p>

        {/* CTA Button */}
        <motion.a
          href="https://mediocology.com/birkman-assessment/p524639417"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg text-sm touch-manipulation"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          {t("birkman.startAssessment")}
        </motion.a>
      </motion.div>
    </div>
  );
}

const Birkman = SectionWrapper(BirkmanComponent, "birkman");

function BirkmanPage() {
  const { language } = useLanguage();
  
  return (
    <>
      <SEO 
        title={language === 'ar' ? 'تقييم بيركمان' : 'Birkman Assessment'}
        description={language === 'ar' 
          ? 'تقييم بيركمان العلمي لفهم سلوكك، دوافعك، واحتياجاتك الشخصية. يقدم أكثر من 60 تقريراً مفصلاً لتطوير القيادة، بناء الفرق، التوظيف، وحل النزاعات. أداة معتمدة عالمياً منذ 70 عاماً.'
          : 'Scientific Birkman Assessment to understand your behavior, motivations, and personal needs. Provides 60+ detailed reports for leadership development, team building, recruitment, and conflict resolution. Globally certified tool for 70+ years.'
        }
        url={`${window.location.origin}/services/birkman`}
        pageType="birkman"
        keywords={language === 'ar' 
          ? ['تقييم بيركمان', 'تحليل السلوك', 'تطوير القيادة', 'بناء الفرق', 'التوظيف', 'علم النفس الصناعي']
          : ['Birkman Assessment', 'behavioral analysis', 'leadership development', 'team building', 'recruitment', 'industrial psychology']
        }
      />
      <Header />
      <Birkman />
      <Footer /> {/* Footer is outside the SectionWrapper */}
    </>
  );
}

export default BirkmanPage;
