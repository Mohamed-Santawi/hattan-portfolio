import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import en from '../locales/en.json';
import ar from '../locales/ar.json';

const translations = { en, ar };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Use localStorage to persist language preference
  const [language, setLanguage] = useState(() => {
    // Check if language preference exists in localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    // Return the saved language or default to 'en'
    return savedLanguage || 'en';
  });

  const direction = language === 'ar' ? 'rtl' : 'ltr';

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  // Define all memoized values and functions inside useMemo
  const value = useMemo(() => {
    // Translation function inside useMemo to avoid dependency issues
    const t = (key) => {
      const keys = key.split('.');
      let value = translations[language];
      for (let k of keys) {
        value = value?.[k];
        if (!value) break;
      }
      return value || key;
    };

    // Toggle language function
    const toggleLanguage = () => {
      setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
    };

    // Return the context value
    return { language, direction, t, toggleLanguage, setLanguage };
  }, [language, direction]); // Only stable dependencies

  return (
    <LanguageContext.Provider value={value}>
      <div dir={direction} lang={language} style={{ width: '100%' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);