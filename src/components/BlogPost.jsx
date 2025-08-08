import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiHome,
  FiCalendar,
  FiClock,
  FiShare2,
  FiX,
} from "react-icons/fi";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import Footer from "./Footer";
import { HattanLogoWhite } from "../assets";
import { getPost } from "../Services/api";
import toast from "react-hot-toast";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showShareModal, setShowShareModal] = useState(false);

  // Check if we're in prerendering mode
  const isPrerendering = typeof window !== "undefined" && window.__REACT_SNAP__;

  useEffect(() => {
    const loadPost = async () => {
      try {
        const response = await getPost(id);
        if (response.success) {
          setPost(response.data);
        } else {
          // Fallback to sample data if API fails
          const samplePost = sampleBlogPosts.find((post) => post.id === id);
          if (samplePost) {
            setPost(samplePost);
          } else {
            if (!isPrerendering) {
              toast.error("حدث خطأ أثناء تحميل المقال");
            }
          }
        }
      } catch (error) {
        console.error("Error loading post:", error);
        // Fallback to sample data if API fails
        const samplePost = sampleBlogPosts.find((post) => post.id === id);
        if (samplePost) {
          setPost(samplePost);
        } else {
          if (!isPrerendering) {
            toast.error("حدث خطأ أثناء تحميل المقال");
          }
        }
      }
      setLoading(false);
    };

    if (id) {
      loadPost();
    }
  }, [id, isPrerendering]);

  // Sample blog posts for testing
  const sampleBlogPosts = [
    {
      id: "1",
      title: "كيفية تطوير الوعي الذاتي",
      excerpt:
        "الوعي الذاتي هو الخطوة الأولى نحو النمو الشخصي والقيادة الفعالة. في هذا المقال، نستكشف الطرق العملية لتطوير الوعي الذاتي.",
      content:
        "<p>الوعي الذاتي هو القدرة على فهم مشاعرنا وأفكارنا وسلوكياتنا بشكل واضح. إنه الأساس الذي نبني عليه النمو الشخصي والقيادة الفعالة.</p><p>في هذا المقال، سنستكشف الطرق العملية لتطوير الوعي الذاتي وكيف يمكن أن يساعدنا في حياتنا المهنية والشخصية.</p>",
      category: "selfAwareness",
      published: true,
      featured: true,
      image: "https://hattan-portfolio.vercel.app/og-image.png",
      author: "هتان عارف",
      publishedAt: "2024-01-15T10:00:00Z",
      updatedAt: "2024-01-15T10:00:00Z",
      readTime: 5,
    },
    {
      id: "2",
      title: "الذكاء العاطفي في مكان العمل",
      excerpt:
        "الذكاء العاطفي أصبح مهارة أساسية في عالم العمل الحديث. اكتشف كيف يمكن تطويره واستخدامه لتحسين الأداء المهني.",
      content:
        "<p>الذكاء العاطفي هو القدرة على فهم وإدارة مشاعرنا ومشاعر الآخرين. في مكان العمل، يمكن أن يكون الفرق بين النجاح والفشل.</p><p>في هذا المقال، نستكشف أهمية الذكاء العاطفي وكيف يمكن تطويره لتحسين الأداء المهني.</p>",
      category: "emotionalIntelligence",
      published: true,
      featured: false,
      image: "https://hattan-portfolio.vercel.app/og-birkman.png",
      author: "هتان عارف",
      publishedAt: "2024-01-10T10:00:00Z",
      updatedAt: "2024-01-10T10:00:00Z",
      readTime: 4,
    },
    {
      id: "3",
      title: "مهارات القيادة الفعالة",
      excerpt:
        "القيادة الفعالة تتطلب أكثر من مجرد سلطة رسمية. اكتشف المهارات الأساسية التي تجعل منك قائداً فعالاً.",
      content:
        "<p>القيادة الفعالة هي فن تحفيز وإلهام الآخرين لتحقيق أهداف مشتركة. إنها تتطلب مجموعة من المهارات والصفات الشخصية.</p><p>في هذا المقال، نستكشف المهارات الأساسية للقيادة الفعالة وكيف يمكن تطويرها.</p>",
      category: "lifeSkills",
      published: true,
      featured: false,
      image: "https://hattan-portfolio.vercel.app/og-image.png",
      author: "هتان عارف",
      publishedAt: "2024-01-05T10:00:00Z",
      updatedAt: "2024-01-05T10:00:00Z",
      readTime: 6,
    },
  ];

  const categories = [
    { key: "all", label: "جميع المقالات" },
    { key: "selfAwareness", label: "الوعي الذاتي" },
    { key: "emotionalIntelligence", label: "الذكاء العاطفي" },
    { key: "lifeSkills", label: "مهارات حياتية" },
    { key: "bookAndIdea", label: "كتاب وفكرة" },
    { key: "personalExperiences", label: "تجارب شخصية" },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-SA");
  };

  // Helper function to get proper image URL
  const getImageUrl = () => {
    if (
      !post?.image ||
      post.image.trim() === "" ||
      post.image === "/api/placeholder/600/400"
    ) {
      console.log("No image found for post:", post?.title);
      return null;
    }

    // If it's already a full URL, return it
    if (post.image.startsWith("http://") || post.image.startsWith("https://")) {
      console.log("Using full URL image:", post.image);
      return post.image;
    }

    // For relative URLs, construct the full URL
    const baseUrl =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://hattan-portfolio.vercel.app";

    // Clean the image path
    let cleanImage = post.image;
    if (!cleanImage.startsWith("/")) {
      cleanImage = `/${cleanImage}`;
    }

    // Remove any double slashes except for protocol
    cleanImage = cleanImage.replace(/\/+/g, "/");

    const finalUrl = `${baseUrl}${cleanImage}`;
    console.log("Generated image URL:", finalUrl);
    return finalUrl;
  };

  // Helper function to get description
  const getDescription = () => {
    if (!post) return "مقال من مدونة هتان عارف";

    if (post.excerpt && post.excerpt.trim() !== "") {
      return post.excerpt;
    }

    if (post.content) {
      const plainText = post.content.replace(/<[^>]*>/g, "");
      return (
        plainText.substring(0, 160) + (plainText.length > 160 ? "..." : "")
      );
    }

    return "مقال من مدونة هتان عارف";
  };

  // SEO Component - This will be prerendered by react-snap
  const renderSEO = () => {
    // Always render SEO, even if post is not loaded yet
    // This ensures meta tags are available for social media crawlers
    if (!post) {
      console.log("No post loaded yet, using default SEO");
      return (
        <Helmet>
          <title>مقال من مدونة هتان عارف | هتان عارف</title>
          <meta name="description" content="مقال من مدونة هتان عارف" />
          <meta property="og:title" content="مقال من مدونة هتان عارف" />
          <meta property="og:description" content="مقال من مدونة هتان عارف" />
          <meta
            property="og:image"
            content="https://hattan-portfolio.vercel.app/og-image.png"
          />
          <meta
            property="og:url"
            content={`https://hattan-portfolio.vercel.app/blog/${id}`}
          />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="مقال من مدونة هتان عارف" />
          <meta name="twitter:description" content="مقال من مدونة هتان عارف" />
          <meta
            name="twitter:image"
            content="https://hattan-portfolio.vercel.app/og-image.png"
          />
        </Helmet>
      );
    }

    const imageUrl = getImageUrl();
    const description = getDescription();
    const currentUrl =
      typeof window !== "undefined"
        ? window.location.href
        : `https://hattan-portfolio.vercel.app/blog/${id}`;

    console.log("SEO Debug - Post:", post.title);
    console.log("SEO Debug - Image URL:", imageUrl);
    console.log("SEO Debug - Description:", description);
    console.log("SEO Debug - Current URL:", currentUrl);

    return (
      <Helmet>
        <title>{post.title} | هتان عارف</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="هتان عارف" />
        <meta property="og:locale" content="ar_SA" />

        {/* WhatsApp and mobile optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Open Graph Image - Use blog post image or fallback to logo */}
        <meta
          property="og:image"
          content={
            imageUrl || "https://hattan-portfolio.vercel.app/og-image.png"
          }
        />
        <meta
          property="og:image:secure_url"
          content={
            imageUrl || "https://hattan-portfolio.vercel.app/og-image.png"
          }
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={post.title} />
        <meta property="og:image:type" content="image/jpeg" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={
            imageUrl || "https://hattan-portfolio.vercel.app/og-image.png"
          }
        />
        <meta name="twitter:url" content={currentUrl} />

        {/* Article Meta Tags */}
        <meta property="article:author" content="Hattan Arif" />
        <meta property="article:published_time" content={post.publishedAt} />
        {post.updatedAt && (
          <meta property="article:modified_time" content={post.updatedAt} />
        )}
        <meta
          property="article:section"
          content={
            categories.find((cat) => cat.key === post.category)?.label ||
            "مقالات عامة"
          }
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: description,
            image:
              imageUrl || "https://hattan-portfolio.vercel.app/og-image.png",
            url: currentUrl,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt || post.publishedAt,
            author: {
              "@type": "Person",
              name: "Hattan Arif",
            },
            publisher: {
              "@type": "Organization",
              name: "هتان عارف",
              logo: {
                "@type": "ImageObject",
                url: "https://hattan-portfolio.vercel.app/favicon.ico",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": currentUrl,
            },
          })}
        </script>
      </Helmet>
    );
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  const shareToSocialMedia = (platform) => {
    if (typeof window === "undefined") return;

    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);

    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${title}%20${url}`;
        break;
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${url}&text=${title}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
    setShowShareModal(false);
  };

  const copyToClipboard = async () => {
    if (typeof window === "undefined") return;

    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("تم نسخ الرابط إلى الحافظة");
      setShowShareModal(false);
    } catch (error) {
      console.log("Error copying to clipboard:", error);
      toast.error("فشل في نسخ الرابط");
    }
  };

  if (loading || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#004f38] mx-auto"></div>
          <p
            className="mt-4 text-gray-600"
            style={{ fontFamily: '"Emad-Arabic", sans-serif' }}
          >
            جاري التحميل...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gray-50"
      dir="rtl"
      style={{ fontFamily: '"Emad-Arabic", sans-serif' }}
    >
      {/* SEO Meta Tags - Will be prerendered */}
      {renderSEO()}

      {/* Temporary Debug Info - Remove this after testing */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed top-4 right-4 bg-black text-white p-4 rounded-lg text-xs max-w-sm z-50">
          <h3 className="font-bold mb-2">Debug Info:</h3>
          <p>
            <strong>Title:</strong> {post?.title}
          </p>
          <p>
            <strong>Image URL:</strong> {getImageUrl() || "No image"}
          </p>
          <p>
            <strong>Fallback Image:</strong> https://hattan-portfolio.vercel.app/og-image.png
          </p>
          <p>
            <strong>Final Image:</strong>{" "}
            {getImageUrl() || "https://hattan-portfolio.vercel.app/og-image.png"}
          </p>
          <p>
            <strong>Description:</strong> {getDescription().substring(0, 50)}...
          </p>
          <button
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="mt-2 bg-blue-500 px-2 py-1 rounded text-xs"
          >
            Copy URL
          </button>
        </div>
      )}

      {/* Header */}
      <header className="absolute w-full z-50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-7 flex items-center justify-between h-16 md:h-20 relative z-10">
          <motion.button
            onClick={() => navigate("/blog")}
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            dir="ltr"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:block">
              العودة إلى المدونة
            </span>
            <FiHome className="w-4 h-4 sm:hidden" />
          </motion.button>

          <motion.button
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="transition-transform duration-300 absolute left-1/2 transform -translate-x-1/2"
          >
            <img
              src={HattanLogoWhite}
              alt="Hattan Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain cursor-pointer drop-shadow-lg"
            />
          </motion.button>

          <div className="w-24 sm:w-32"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004f38] to-[#006b4f] text-white py-16">
        <div className="container mx-auto px-4 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              {categories.find((cat) => cat.key === post.category)?.label}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-relaxed">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-white/80 mb-8">
              <div className="flex items-center gap-2">
                <FiCalendar className="w-5 h-5" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-5 h-5" />
                <span>{post.readTime} دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <span>بقلم: {post.author}</span>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 mx-auto"
            >
              <FiShare2 className="w-4 h-4" />
              <span>مشاركة المقال</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <article className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              {/* Blog post image */}
              {getImageUrl() && (
                <div className="mb-8">
                  <img
                    src={getImageUrl()}
                    alt={post.title}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-md"
                  />
                </div>
              )}

              <div className="prose prose-lg max-w-none" dir="rtl">
                {post.content && post.content.includes("<") ? (
                  <div
                    className="rich-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    style={{
                      fontFamily: '"Emad-Arabic", sans-serif',
                      direction: "rtl",
                      textAlign: "right",
                      lineHeight: "1.8",
                      fontSize: "18px",
                    }}
                  />
                ) : (
                  post.content &&
                  post.content.split("\n").map((paragraph, index) => {
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h2
                          key={index}
                          className="text-2xl font-bold text-gray-900 mt-8 mb-4 leading-relaxed"
                        >
                          {paragraph.replace("## ", "")}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith("### ")) {
                      return (
                        <h3
                          key={index}
                          className="text-xl font-bold text-gray-800 mt-6 mb-3 leading-relaxed"
                        >
                          {paragraph.replace("### ", "")}
                        </h3>
                      );
                    }
                    if (paragraph.trim() === "") {
                      return <br key={index} />;
                    }
                    return (
                      <p
                        key={index}
                        className="text-gray-700 mb-4 leading-loose text-lg"
                      >
                        {paragraph}
                      </p>
                    );
                  })
                )}
              </div>
            </article>

            {/* Navigation */}
            <div className="mt-12 text-center">
              <button
                onClick={() => navigate("/blog")}
                className="bg-[#004f38] text-white px-8 py-3 rounded-lg hover:bg-[#003d2c] transition-colors font-medium"
              >
                العودة إلى جميع المقالات
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />

      {/* Social Media Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl p-6 max-w-md w-full mx-4"
            dir="rtl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">مشاركة المقال</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => shareToSocialMedia("facebook")}
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 group"
              >
                <FaFacebook className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 group-hover:text-blue-600">
                  فيسبوك
                </span>
              </button>

              <button
                onClick={() => shareToSocialMedia("twitter")}
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-400 transition-all duration-200 group"
              >
                <FaTwitter className="w-5 h-5 text-blue-400" />
                <span className="text-gray-700 group-hover:text-blue-400">
                  تويتر
                </span>
              </button>

              <button
                onClick={() => shareToSocialMedia("linkedin")}
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-700 transition-all duration-200 group"
              >
                <FaLinkedin className="w-5 h-5 text-blue-700" />
                <span className="text-gray-700 group-hover:text-blue-700">
                  لينكد إن
                </span>
              </button>

              <button
                onClick={() => shareToSocialMedia("whatsapp")}
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-green-50 hover:border-green-500 transition-all duration-200 group"
              >
                <FaWhatsapp className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 group-hover:text-green-500">
                  واتساب
                </span>
              </button>

              <button
                onClick={() => shareToSocialMedia("telegram")}
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-500 transition-all duration-200 group"
              >
                <FaTelegram className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700 group-hover:text-blue-500">
                  تيليجرام
                </span>
              </button>

              <button
                onClick={copyToClipboard}
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group"
              >
                <FiShare2 className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 group-hover:text-gray-600">
                  نسخ الرابط
                </span>
              </button>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowShareModal(false)}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                إلغاء
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
