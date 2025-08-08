import React from 'react';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, direction } = useLanguage();
  return (
    <footer className="bg-gradient-to-r from-[#004f38] to-[#004f38]/90 text-white py-5 px-4 mt-10 shadow-inner" dir={direction}>
      <div className={`max-w-7xl mx-auto flex flex-row justify-between items-center ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
        {/* Copyright - Left Side */}
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-200">
            &copy; {new Date().getFullYear()} Hattan. {t('footer.copyright')}
          </div>
          <a
            href="/admin/login"
            className="text-xs text-gray-400 hover:text-gray-200 transition-colors opacity-50 hover:opacity-100"
            title="Admin Access"
          >
            Admin
          </a>
        </div>
        {/* Social Links Container - Right Side */}
        <div className="flex items-center justify-center gap-2">
          {/* X (Twitter) Button */}
          <a
            href="https://x.com/hattanhtn?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-[50px] w-[50px] bg-white rounded-xl shadow-lg hover:w-[150px] transition-all duration-300 overflow-hidden cursor-pointer group"
          >
            <div className="flex items-center justify-center min-w-[50px]">
              {/* X Icon SVG */}
              <svg
                className="h-6 w-6 text-black flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <span className="text-gray-800 whitespace-nowrap w-0 group-hover:w-20 overflow-hidden transition-all duration-300">
              @hattanhtn
            </span>
          </a>
          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/hattan-arif-7410ab25a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-[50px] w-[50px] bg-white rounded-xl shadow-lg hover:w-[150px] transition-all duration-300 overflow-hidden cursor-pointer group"
          >
            <div className="flex items-center justify-center min-w-[50px]">
              <svg
                className="h-6 w-6 text-[#0e76a8] flex-shrink-0"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                />
              </svg>
            </div>
            <span className="text-gray-800 whitespace-nowrap w-0 group-hover:w-20 overflow-hidden transition-all duration-300">
              Hattan Arif
            </span>
          </a>
          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/hattan.arif?igsh=N3hpd3BpZ2V4cGg1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-[50px] w-[50px] bg-white rounded-xl shadow-lg hover:w-[150px] transition-all duration-300 overflow-hidden cursor-pointer group"
          >
            <div className="flex items-center justify-center min-w-[50px]">
              <FaInstagram className="h-6 w-6 text-[#E4405F] flex-shrink-0" />
            </div>
            <span className="text-gray-800 whitespace-nowrap w-0 group-hover:w-20 overflow-hidden transition-all duration-300">
              {t('footer.instagram')}
            </span>
          </a>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/966551626317"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-[50px] w-[50px] bg-white rounded-xl shadow-lg hover:w-[150px] transition-all duration-300 overflow-hidden cursor-pointer group"
          >
            <div className="flex items-center justify-center min-w-[50px]">
              <FaWhatsapp className="h-6 w-6 text-[#25D366] flex-shrink-0" />
            </div>
            <span className="text-gray-800 whitespace-nowrap w-0 group-hover:w-20 overflow-hidden transition-all duration-300">
              {t('footer.whatsapp')}
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;