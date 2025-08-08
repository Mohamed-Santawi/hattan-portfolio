import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const SEO = ({ 
  title, 
  description, 
  image, 
  url, 
  type = 'website',
  article = null,
  keywords = [],
  pageType = 'default'
}) => {
  const { language } = useLanguage();
  
  // Default values
  const defaultTitle = language === 'ar' 
    ? 'هتان عارف - مستشار تطوير المهارات والمواهب'
    : 'Hattan Arif - Skills & Talent Development Consultant';
    
  const defaultDescription = language === 'ar'
    ? 'خبير معتمد في تطوير المهارات القيادية والشخصية، تقييم بيركمان، التدريب على مهارات المقابلات، والاستشارات المهنية. اكتشف إمكاناتك مع هتان عارف.'
    : 'Certified expert in leadership and personal skills development, Birkman Assessment, interview skills training, and career consulting. Discover your potential with Hattan Arif.';
    
  // Get current URL
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  // Set up meta values
  const siteTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const siteDescription = description || defaultDescription;
  const siteUrl = url || currentUrl;
  
  // Improved image URL handling for better link previews
  const getImageUrl = () => {
    if (image && image.trim() !== '' && image !== '/api/placeholder/600/400') {
      // If it's a full URL, use as is
      if (image.startsWith('http://') || image.startsWith('https://')) {
        return image;
      }
      // If it's a relative path, make it absolute
      if (typeof window !== 'undefined') {
        const origin = window.location.origin;
        // Remove leading slash if present to avoid double slashes
        const cleanImage = image.startsWith('/') ? image : `/${image}`;
        return `${origin}${cleanImage}`;
      }
      return image;
    }
    
    // Default fallback image (should be a high-quality image)
    const defaultImage = '/favicon.ico'; // Replace with a better default image
    return typeof window !== 'undefined' ? `${window.location.origin}${defaultImage}` : defaultImage;
  };
  
  const siteImage = getImageUrl();
  
  // Keywords
  const defaultKeywords = language === 'ar' 
    ? ['حطان عارف', 'تطوير المهارات', 'تقييم بيركمان', 'قيادة', 'تدريب', 'استشارات مهنية', 'مقابلات العمل', 'تطوير شخصي']
    : ['Hattan Arif', 'skills development', 'Birkman assessment', 'leadership', 'training', 'career consulting', 'interview skills', 'personal development'];
    
  const allKeywords = [...defaultKeywords, ...keywords].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="Hattan Arif" />
      <link rel="canonical" href={siteUrl} />
      
      {/* Open Graph Meta Tags (Used by Facebook, WhatsApp, LinkedIn, Discord, Slack) */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Hattan Arif" />
      <meta property="og:locale" content={language === 'ar' ? 'ar_SA' : 'en_US'} />
      
      {/* Enhanced image meta tags for better social media previews */}
      <meta property="og:image:secure_url" content={siteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={title || (language === 'ar' 
        ? 'هتان عارف - مستشار تطوير المهارات والمواهب'
        : 'Hattan Arif - Skills & Talent Development Consultant'
      )} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="twitter:image:alt" content={title || (language === 'ar' 
        ? 'هتان عارف - مستشار تطوير المهارات والمواهب'
        : 'Hattan Arif - Skills & Talent Development Consultant'
      )} />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:creator" content="@HattanArif" />
      <meta name="twitter:site" content="@HattanArif" />
      
      {/* WhatsApp and Telegram specific optimizations */}
      <meta property="og:image:secure_url" content={siteImage} />
      <meta name="telegram:channel" content="@HattanArif" />
      
      {/* LinkedIn optimization */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      
      {/* Additional meta tags for better mobile sharing */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content="Hattan Arif" />
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
          <meta property="article:section" content={article.section} />
        </>
      )}
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content={language === 'ar' ? 'Arabic' : 'English'} />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      
      {/* Schema.org structured data for rich snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'BlogPosting' : 'WebSite',
          "headline": title || siteTitle,
          "name": siteTitle,
          "description": siteDescription,
          "url": siteUrl,
          "image": {
            "@type": "ImageObject",
            "url": siteImage,
            "width": 1200,
            "height": 630
          },
          "author": {
            "@type": "Person",
            "name": "Hattan Arif",
            "jobTitle": language === 'ar' 
              ? "مستشار تطوير المهارات والمواهب" 
              : "Skills & Talent Development Consultant",
            "url": typeof window !== 'undefined' ? window.location.origin : ''
          },
          "publisher": {
            "@type": "Organization",
            "name": "Hattan Arif",
            "logo": {
              "@type": "ImageObject",
              "url": typeof window !== 'undefined' ? `${window.location.origin}/favicon.ico` : ''
            }
          },
          ...(type === 'article' && article && {
            "datePublished": article.publishedTime,
            "dateModified": article.modifiedTime || article.publishedTime,
            "articleSection": article.section,
            "keywords": allKeywords,
            "wordCount": article.wordCount || undefined,
            "timeRequired": article.readTime ? `PT${article.readTime}M` : undefined
          })
        })}
      </script>
    </Helmet>
  );
};

export default SEO;