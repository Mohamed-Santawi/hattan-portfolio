// import React from 'react';
// import { useLanguage } from '../context/LanguageContext';

// const LanguageSwitcher = () => {
//   const { language, toggleLanguage } = useLanguage();

//   return (
//     <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
//       <button
//         onClick={() => language !== 'en' && toggleLanguage()}
//         style={{
//           fontWeight: language === 'en' ? 'bold' : 'normal',
//           textDecoration: language === 'en' ? 'underline' : 'none',
//         }}
//       >
//         English
//       </button>
//       <button
//         onClick={() => language !== 'ar' && toggleLanguage()}
//         style={{
//           fontWeight: language === 'ar' ? 'bold' : 'normal',
//           textDecoration: language === 'ar' ? 'underline' : 'none',
//         }}
//       >
//         العربية
//       </button>
//     </div>
//   );
// };

// export default LanguageSwitcher;

import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div className="relative inline-block">
      <input
        type="checkbox"
        id="language-toggle"
        className="sr-only"
        checked={isArabic}
        onChange={toggleLanguage}
      />
      <label
        htmlFor="language-toggle"
        className={
          "relative flex items-center w-[140px] h-[30px] rounded-full cursor-pointer transition-all duration-300 bg-gray-200 overflow-hidden"
        }
      >
        <div
          className={`absolute w-[70px] h-[26px] bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center transform ${
            isArabic
              ? "translate-x-[68px] bg-gray-200 text-gray-700"
              : "translate-x-[2px] text-gray-700"
          }`}
          style={{ left: 0, top: 2 }}
        >
          <span className="text-xs font-medium">
            {isArabic ? "العربية" : "English"}
          </span>
        </div>
        <span
          className={`absolute text-xs font-medium transition-all duration-300 ${
            isArabic ? "left-5 text-gray-600" : "right-5 text-gray-600"
          }`}
        >
          {isArabic ? "English" : "العربية"}
        </span>
      </label>
    </div>
  );
};

export default LanguageSwitcher;
