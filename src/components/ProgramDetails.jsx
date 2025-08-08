import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import Header from './Header';
import Footer from './Footer';

// Sample program data - this would typically come from a database or API
const programsData = {
  'project-management': {
    id: 'project-management',
    nameEn: 'Project Management Professional (PMP)',
    nameAr: 'إدارة المشاريع الاحترافية',
    descriptionEn: 'Comprehensive project management certification program covering all aspects of modern project management methodologies, tools, and best practices.',
    descriptionAr: 'برنامج شهادة إدارة المشاريع الشامل الذي يغطي جميع جوانب منهجيات إدارة المشاريع الحديثة والأدوات وأفضل الممارسات.',
    posterImage: '/src/assets/ProjectManagement.png',
    duration: '3 months',
    durationAr: '3 أشهر',
    level: 'Professional',
    levelAr: 'مهني',
    participants: '25',
    participantsAr: '25',
    price: '$1,200',
    priceAr: '1,200 دولار',
    featuresEn: [
      'PMP Certification Preparation',
      'Real-world Project Scenarios',
      'Agile and Waterfall Methodologies',
      'Risk Management Strategies',
      'Team Leadership Skills',
      'Project Portfolio Management'
    ],
    featuresAr: [
      'إعداد شهادة PMP',
      'سيناريوهات مشاريع واقعية',
      'منهجيات Agile و Waterfall',
      'استراتيجيات إدارة المخاطر',
      'مهارات قيادة الفريق',
      'إدارة محفظة المشاريع'
    ],
    scheduleEn: [
      'Week 1-2: Project Management Fundamentals',
      'Week 3-4: Project Planning and Scheduling',
      'Week 5-6: Risk Management and Quality Control',
      'Week 7-8: Team Management and Communication',
      'Week 9-10: Agile Project Management',
      'Week 11-12: PMP Exam Preparation and Final Project'
    ],
    scheduleAr: [
      'الأسبوع 1-2: أساسيات إدارة المشاريع',
      'الأسبوع 3-4: تخطيط المشاريع والجدولة',
      'الأسبوع 5-6: إدارة المخاطر ومراقبة الجودة',
      'الأسبوع 7-8: إدارة الفريق والتواصل',
      'الأسبوع 9-10: إدارة المشاريع الرشيقة',
      'الأسبوع 11-12: إعداد امتحان PMP والمشروع النهائي'
    ]
  },
  'green-six-sigma': {
    id: 'green-six-sigma',
    nameEn: 'Six Sigma Green Belt Certification',
    nameAr: 'شهادة الحزام الأخضر في ستة سيجما',
    descriptionEn: 'Advanced Six Sigma methodology training focusing on process improvement, data analysis, and quality management for organizational excellence.',
    descriptionAr: 'تدريب متقدم في منهجية ستة سيجما يركز على تحسين العمليات وتحليل البيانات وإدارة الجودة للتميز التنظيمي.',
    posterImage: '/src/assets/GreenSix.png',
    duration: '2 months',
    durationAr: 'شهرين',
    level: 'Advanced',
    levelAr: 'متقدم',
    participants: '20',
    participantsAr: '20',
    price: '$950',
    priceAr: '950 دولار',
    featuresEn: [
      'DMAIC Methodology',
      'Statistical Process Control',
      'Lean Manufacturing Principles',
      'Data Analysis Tools',
      'Process Mapping',
      'Quality Management Systems'
    ],
    featuresAr: [
      'منهجية DMAIC',
      'التحكم الإحصائي في العمليات',
      'مبادئ التصنيع الرشيق',
      'أدوات تحليل البيانات',
      'رسم خرائط العمليات',
      'أنظمة إدارة الجودة'
    ],
    scheduleEn: [
      'Week 1-2: Six Sigma Fundamentals and DMAIC',
      'Week 3-4: Define and Measure Phases',
      'Week 5-6: Analyze and Improve Phases',
      'Week 7-8: Control Phase and Project Completion'
    ],
    scheduleAr: [
      'الأسبوع 1-2: أساسيات ستة سيجما و DMAIC',
      'الأسبوع 3-4: مراحل التعريف والقياس',
      'الأسبوع 5-6: مراحل التحليل والتحسين',
      'الأسبوع 7-8: مرحلة التحكم وإنجاز المشروع'
    ]
  },
  'linkedin-learning': {
    id: 'linkedin-learning',
    nameEn: 'Digital Marketing & Social Media Strategy',
    nameAr: 'التسويق الرقمي واستراتيجية وسائل التواصل الاجتماعي',
    descriptionEn: 'Comprehensive digital marketing program covering social media strategy, content marketing, analytics, and modern marketing techniques.',
    descriptionAr: 'برنامج تسويق رقمي شامل يغطي استراتيجية وسائل التواصل الاجتماعي والتسويق بالمحتوى والتحليلات وتقنيات التسويق الحديثة.',
    posterImage: '/src/assets/LinkedInLearningCertificate.png',
    duration: '6 weeks',
    durationAr: '6 أسابيع',
    level: 'Intermediate',
    levelAr: 'متوسط',
    participants: '30',
    participantsAr: '30',
    price: '$750',
    priceAr: '750 دولار',
    featuresEn: [
      'Social Media Strategy Development',
      'Content Creation and Curation',
      'Digital Analytics and Metrics',
      'Paid Advertising Campaigns',
      'Brand Management',
      'Influencer Marketing'
    ],
    featuresAr: [
      'تطوير استراتيجية وسائل التواصل الاجتماعي',
      'إنشاء وتنسيق المحتوى',
      'التحليلات الرقمية والمقاييس',
      'حملات الإعلانات المدفوعة',
      'إدارة العلامة التجارية',
      'التسويق عبر المؤثرين'
    ],
    scheduleEn: [
      'Week 1: Digital Marketing Fundamentals',
      'Week 2: Social Media Platform Strategies',
      'Week 3: Content Marketing and Creation',
      'Week 4: Digital Advertising and PPC',
      'Week 5: Analytics and Performance Measurement',
      'Week 6: Campaign Development and Portfolio'
    ],
    scheduleAr: [
      'الأسبوع 1: أساسيات التسويق الرقمي',
      'الأسبوع 2: استراتيجيات منصات التواصل الاجتماعي',
      'الأسبوع 3: التسويق بالمحتوى والإنشاء',
      'الأسبوع 4: الإعلان الرقمي و PPC',
      'الأسبوع 5: التحليلات وقياس الأداء',
      'الأسبوع 6: تطوير الحملات والمحفظة'
    ]
  }
};

const ProgramDetails = () => {
  const { programId } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  const program = programsData[programId];

  if (!program) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            {isArabic ? 'البرنامج غير موجود' : 'Program Not Found'}
          </h1>
          <Link 
            to="/" 
            className="text-secondary hover:text-white transition-colors"
          >
            {isArabic ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
        </div>
      </div>
    );
  }

  const programName = isArabic ? program.nameAr : program.nameEn;
  const programDescription = isArabic ? program.descriptionAr : program.descriptionEn;
  const features = isArabic ? program.featuresAr : program.featuresEn;
  const schedule = isArabic ? program.scheduleAr : program.scheduleEn;
  const duration = isArabic ? program.durationAr : program.duration;
  const level = isArabic ? program.levelAr : program.level;
  const participants = isArabic ? program.participantsAr : program.participants;
  const price = isArabic ? program.priceAr : program.price;

  return (
    <div className="min-h-screen bg-primary">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-secondary hover:text-white transition-colors mb-8 group"
          whileHover={{ x: isArabic ? 5 : -5 }}
        >
          <ArrowLeftIcon className={`w-5 h-5 ${isArabic ? 'rotate-180' : ''}`} />
          <span className="font-medium">
            {isArabic ? 'العودة' : 'Back'}
          </span>
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Program Info */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${isArabic ? 'lg:order-2' : ''}`}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {programName}
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {programDescription}
            </p>

            {/* Program Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    {isArabic ? 'المدة' : 'Duration'}
                  </p>
                  <p className="text-white font-semibold">{duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <AcademicCapIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    {isArabic ? 'المستوى' : 'Level'}
                  </p>
                  <p className="text-white font-semibold">{level}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <UserGroupIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    {isArabic ? 'المشاركون' : 'Participants'}
                  </p>
                  <p className="text-white font-semibold">{participants}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <CalendarIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    {isArabic ? 'السعر' : 'Price'}
                  </p>
                  <p className="text-white font-semibold">{price}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-secondary to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isArabic ? 'احجز مكانك الآن' : 'Enroll Now'}
            </motion.button>
          </motion.div>

          {/* Program Image */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`${isArabic ? 'lg:order-1' : ''}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-blue-600/20 rounded-2xl transform rotate-3"></div>
              <img
                src={program.posterImage}
                alt={programName}
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Program Features */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          {isArabic ? 'ما ستتعلمه' : 'What You\'ll Learn'}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <p className="text-white font-medium">{feature}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Program Schedule */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          {isArabic ? 'جدول البرنامج' : 'Program Schedule'}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-6 bg-white/10 backdrop-blur-lg rounded-lg p-6"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <p className="text-white font-medium text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
      >
        <div className="bg-gradient-to-r from-secondary/20 to-blue-600/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isArabic ? 'جاهز للبدء؟' : 'Ready to Get Started?'}
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {isArabic 
              ? 'انضم إلى آلاف الطلاب الذين طوروا مهاراتهم معنا. ابدأ رحلتك التعليمية اليوم!'
              : 'Join thousands of students who have developed their skills with us. Start your learning journey today!'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isArabic ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
            </motion.button>
            <Link
              to="/contact"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              {isArabic ? 'تواصل معنا' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ProgramDetails;