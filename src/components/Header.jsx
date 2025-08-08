import { HattanLogo } from "../assets";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiLinkedin } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import emailjs from "@emailjs/browser";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Language context
  const { t } = useLanguage();

  // Form handlers
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
        () => {
          setLoading(false);
          alert(t('contact.success'));
          setForm({
            name: "",
            email: "",
            message: "",
          });
          closeContactForm();
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert(t('contact.error'));
        }
      );
  };

  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path);
    if (isOpen) toggleMenu();
  };

  return (
    <header className="absolute w-full z-50 transition-all duration-300  text-black">
      {/* Header backdrop blur effect when mobile menu is open */}
      {isOpen && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-md md:hidden" />
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-7 flex items-center justify-between h-16 md:h-20 relative z-10">
        {/* Logo */}
        <motion.div
          className="flex items-center w-[20%]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
        >
          {/* Hattan Logo */}
          <motion.button
            onClick={() => {
              handleNavigation("/");
              window.location.reload(); // Force page reload
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="transition-transform duration-300"
          >
            <img
              src={HattanLogo}
              alt="Logo Name"
              className="w-16 h-16 md:w-20 md:h-20 object-contain cursor-pointer"
            />
          </motion.button>
        </motion.div>

        {/* Navigation Bar */}
        <nav className="md:flex hidden justify-between w-[650px] mx-auto">
          {["about", "birkman", "careerAdvising", "interview", "blog"].map(
            (item, index) => (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2 + index * 0.1,
                }}
                onClick={() => {
                  if (item === "about") handleNavigation("/");
                  else if (item === "birkman")
                    handleNavigation("/Services/Birkman");
                  else if (item === "interview")
                    handleNavigation("/Services/Interview");
                  else if (item === "blog")
                    handleNavigation("/blog");
                  else if (item === "careerAdvising")
                    handleNavigation("/Services/CareerAdvising");
                }}
                className="group relative text-black font-medium py-2 cursor-pointer hover:text-gray-600 transition-colors duration-300"
                key={item}
              >
                {t(`header.${item}`)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-black group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            )
          )}
        </nav>

        {/* Language Button - Request Button */}
        <div className="md:flex hidden items-center space-x-8 rtl:space-x-reverse w-[20%] justify-end">
          {/* Language Switcher for Desktop */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 1.5,
              duration: 0.8,
            }}
          >
            <LanguageSwitcher />
          </motion.div>

          {/* Request Button */}
          <div className="flex items-center">
            <motion.button
              onClick={openContactForm}
              initial={{ opacity: 0, y: 0.8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 1.6,
                duration: 0.8,
              }}
              className="relative w-[8em] h-[3em] bg-gray-900 text-white font-bold text-[13px] rounded-[0.625em] border-none overflow-hidden z-0 group"
            >
              <span className="relative z-10 transition-all duration-500 group-hover:text-[#004f38] group-hover:scale-90">
                {t("header.contactMe")}
              </span>
              <span className="absolute inset-0 -left-[20%] -right-[20%] bg-white transform skew-x-[-45deg] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-0"></span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className={`relative p-2 transition-all duration-300 rounded-lg ${isOpen
              ? "text-white bg-red-500 hover:bg-red-600"
              : "text-black hover:text-gray-600 hover:bg-gray-100"
              }`}
            onClick={toggleMenu}
          >
            <motion.div
              animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.div>

            {/* Animated background circle for closed state */}
            {!isOpen && (
              <motion.div
                className="absolute inset-0 bg-[#e6f2ef] rounded-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Navigation Items */}
              <nav className="space-y-1">
                {[
                  "about",
                  "birkman",
                  "careerAdvising",
                  "interview",
                  "blog",
                ].map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    onClick={() => {
                      if (item === "about") handleNavigation("/");
                      else if (item === "birkman")
                        handleNavigation("/Services/Birkman");
                      else if (item === "careerAdvising")
                        handleNavigation("/Services/CareerAdvising");
                      else if (item === "interview")
                        handleNavigation("/Services/Interview");
                      else if (item === "blog")
                        handleNavigation("/blog");
                    }}
                    className="group w-full text-left text-gray-700 font-medium py-3 px-4 cursor-pointer hover:text-[#004f38] hover:bg-gradient-to-r hover:from-[#e6f2ef] hover:to-[#e6f2ef] rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-sm border border-transparent hover:border-[#b3d4cc]"
                  >
                    <span className="flex items-center justify-between">
                      {t(`header.${item}`)}
                      <motion.span
                        className="text-[#004f38] opacity-0 group-hover:opacity-100"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* Language Toggle for Mobile */}
              <div className="flex justify-center py-2">
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.3,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                >
                  <LanguageSwitcher />
                </motion.div>
              </div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
              />

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                dir="ltr"
                className="flex justify-center gap-8 py-2"
              >
                {[
                  {
                    icon: FiLinkedin,
                    href: "https://www.linkedin.com/in/hattan-arif-7410ab25a/",
                    color: "hover:text-blue-600",
                  },
                  {
                    icon: RiTwitterXFill,
                    href: "https://x.com/hattanhtn?s=21",
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/hattan.arif?igsh=N3hpd3BpZ2V4cGg1",
                    color: "hover:text-pink-500",
                  },
                  {
                    icon: FaWhatsapp,
                    href: "https://wa.me/966551626317",
                    color: "hover:text-[#004f38]",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-gray-50 text-gray-600 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                className="pt-2"
              >
                <motion.button
                  onClick={() => {
                    toggleMenu();
                    openContactForm();
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-[#004f38] to-[#004f38] text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="relative z-10">{t("header.contactMe")}</span>

                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#003d2e] to-[#003d2e]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 background-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
                duration: 0.8,
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-md"
            >
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-700 text-center w-full  ">
                  {t("header.getInTouch")}
                </h1>
                <button onClick={closeContactForm}>
                  <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
                </button>
              </div>
              {/* Contact Form Input */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    {t("header.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("header.name")}
                    className="w-full px-4 py-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-[#004f38] focus:border-[#004f38] bg bg-gray-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    {t("header.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t("header.email")}
                    className="w-full px-4 py-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-[#004f38] focus:border-[#004f38] bg bg-gray-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    {t("header.message")}
                  </label>
                  <textarea
                    rows="4"
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t("header.message")}
                    className="w-full px-4 py-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-[#004f38] focus:border-[#004f38] bg bg-gray-200"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-[#004f38] to-[#004f38] hover:from-[#003d2e] hover:to-[#003d2e] text-white font-bold rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg  hover:shadow-[#004f38]/50 disabled:opacity-50"
                >
                  {loading ? t('contact.sending') : t("header.sendMessage")}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
