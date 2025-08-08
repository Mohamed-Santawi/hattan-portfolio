import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Certificates from './Certificates'
import Footer from './Footer'
import Contact from './Contact'
import SEO from './SEO'
import { useLanguage } from '../context/LanguageContext'


export const Home = () => {
    const { language } = useLanguage();
    
    return (
        <>
            <SEO 
                title={language === 'ar' ? 'الصفحة الرئيسية' : 'Home'}
                description={language === 'ar' 
                    ? 'اكتشف خدمات حطان عارف الشبرا في تطوير المهارات والمواهب. خبير معتمد في تقييم بيركمان، التدريب على القيادة، وتطوير المهارات الشخصية والمهنية.'
                    : 'Discover Hattan Arif Alshabra\'s skills and talent development services. Certified expert in Birkman Assessment, leadership training, and personal & professional skills development.'
                }
                pageType="home"
                keywords={language === 'ar' 
                    ? ['حطان عارف الشبرا', 'تطوير المهارات', 'تدريب القيادة', 'تقييم بيركمان', 'استشارات مهنية']
                    : ['Hattan Arif Alshabra', 'skills development', 'leadership training', 'Birkman Assessment', 'career consulting']
                }
            />
            <Header />
            <Hero />
            <About />
            <Contact />
            <Footer />
        </>
    )
}
