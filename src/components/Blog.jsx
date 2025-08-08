import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiSearch,
  FiCalendar,
  FiClock,
  FiArrowLeft,
  FiHome,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import SEO from "./SEO";
import { HattanLogoWhite } from "../assets";
import { getPosts } from "../Services/api";
import toast from "react-hot-toast";

// Blog-specific styles to override global font inheritance
const blogStyles = `
  .blog-container,
  .blog-container *,
  .blog-container p,
  .blog-container span,
  .blog-container div,
  .blog-container h1,
  .blog-container h2,
  .blog-container h3,
  .blog-container h4,
  .blog-container h5,
  .blog-container h6,
  .blog-container button,
  .blog-container label,
  .blog-container input,
  .blog-container textarea {
    font-family: "Emad-Arabic", sans-serif !important;
    direction: rtl !important;
  }

  .blog-container input::placeholder,
  .blog-container textarea::placeholder {
    font-family: "Emad-Arabic", sans-serif !important;
    direction: rtl !important;
  }
`;

const Blog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Inject blog-specific styles
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = blogStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Load blog posts from localStorage or use defaults
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await getPosts();
        if (posts.success) {
          const allPosts = posts.data;
          setBlogPosts(allPosts.filter((post) => post.published));
        } else {
          // Fallback to sample data if API fails
          setBlogPosts(sampleBlogPosts);
        }
      } catch (error) {
        console.log("API failed, using sample data:", error);
        // Fallback to sample data if API fails
        setBlogPosts(sampleBlogPosts);
      }
    };

    loadPosts();
  }, []);

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
      image:
        "https://hattan-portfolio.vercel.app/og-birkman.png",
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
      image:
        "https://hattan-portfolio.vercel.app/og-image.png",
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

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-SA");
  };

  const BlogCard = ({ post, featured = false }) => (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100 cursor-pointer ${
        featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      dir="rtl"
      onClick={() => navigate(`/blog/${post.id}`)}
    >
      <div className="relative overflow-hidden">
        {post.image && post.image.trim() !== "" ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              console.log("Image failed to load:", post.image);
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
            onLoad={() => {
              console.log("Image loaded successfully:", post.image);
            }}
          />
        ) : null}
        <div
          className={`w-full h-48 bg-gradient-to-br from-[#004f38] to-[#006b4f] flex items-center justify-center ${
            post.image && post.image.trim() !== "" ? "hidden" : ""
          }`}
          style={{
            display: post.image && post.image.trim() !== "" ? "none" : "flex",
          }}
        >
          <div className="text-white text-center p-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto">
              <span className="text-2xl font-bold">{post.title.charAt(0)}</span>
            </div>
            <p className="text-sm opacity-90">صورة المقال</p>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-[#004f38] px-3 py-1 rounded-full text-sm font-medium shadow-sm">
            {categories.find((cat) => cat.key === post.category)?.label}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              مميز
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div
          className="flex items-center gap-4 text-sm text-gray-500 mb-4"
          dir="rtl"
        >
          <div className="flex items-center gap-1">
            <FiCalendar className="w-4 h-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiClock className="w-4 h-4" />
            <span>{post.readTime} دقيقة قراءة</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#004f38] transition-colors leading-relaxed">
          {post.title}
        </h2>

        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#004f38] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">
                {post.author.split(" ")[0].charAt(0)}
              </span>
            </div>
            <span className="text-sm text-gray-600 font-medium">
              {post.author}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/blog/${post.id}`);
            }}
            className="flex items-center gap-2 text-[#004f38] font-medium hover:gap-3 transition-all duration-200 hover:bg-[#004f38] hover:text-white px-4 py-2 rounded-lg"
          >
            اقرأ المزيد
            <FiArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );

  return (
    <div
      className="min-h-screen bg-gray-50 blog-container"
      dir="rtl"
      style={{ fontFamily: '"Emad-Arabic", sans-serif' }}
    >
      <SEO
        title="مدونة مساحة تطوير"
        description="رؤى حول التطوير الذاتي والقيادة والنمو الشخصي"
        pageType="blog"
      />

      {/* Simple Logo Header with Return Button */}
      <header className="absolute w-full z-50 transition-all duration-300 bg-gradient-to-b from-black/20 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative z-10 py-4 sm:py-6">
          {/* Return to Main Page Button - Positioned absolutely */}
          <motion.button
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05, x: -3 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-4 sm:left-6 lg:left-8 flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-3 sm:px-4 py-2 rounded-full hover:bg-white/25 transition-all duration-300 border border-white/30 hover:border-white/50 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.2,
              duration: 1.0,
            }}
            dir="ltr"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:block">
              العودة للصفحة الرئيسية
            </span>
            <FiHome className="w-4 h-4 sm:hidden" />
          </motion.button>

          {/* Centered Logo with Enhanced Styling */}
          <motion.div
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer group"
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              delay: 0.3,
              duration: 1.0,
            }}
          >
            <div className="relative p-3 sm:p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={HattanLogoWhite}
                alt="Hattan Logo"
                className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain drop-shadow-xl transition-all duration-300 group-hover:drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#004f38] to-[#006b4f] text-white py-20 pt-36 sm:pt-40 md:pt-44 lg:pt-48">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                مدونة مساحة تطوير
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                رؤى حول التطوير الذاتي والقيادة والنمو الشخصي
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="البحث في المقالات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                  dir="rtl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.key
                      ? "bg-[#004f38] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-center mb-10"
              >
                المقالات المميزة
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} featured />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-center mb-10"
            >
              {selectedCategory === "all"
                ? "جميع المقالات"
                : categories.find((cat) => cat.key === selectedCategory)?.label}
            </motion.h2>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  لم يتم العثور على مقالات. جرب تعديل البحث.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
