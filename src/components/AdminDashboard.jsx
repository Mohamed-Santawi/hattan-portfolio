import React, { useState, useEffect } from "react";
import {
  FiPlus,
  FiEdit,
  FiTrash2,
  FiEye,
  FiEyeOff,
  FiLogOut,
  FiHome,
  FiSearch,
  FiStar,
  FiCopy,
  FiCheck,
  FiX,
} from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { HattanLogoWhite } from "../assets";
import { CATEGORIES } from "../utils/constants";
import { createPost, getPosts, removePost, togglePublishPost, updatePost } from "../Services/api";

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "selfAwareness",
    published: true,
    featured: false,
    image: "",
  });

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      filterCategory === "all" || post.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const data = await getPosts();
    if (data.success) {
      setPosts(data.data);
      // toast.success("تم تحميل المقالات بنجاح");
    } else {
      toast.error("حدث خطأ أثناء تحميل المقالات");
    }
  };

  // const savePosts = (updatedPosts) => {
  //   setPosts(updatedPosts);
  //   localStorage.setItem("admin_posts", JSON.stringify(updatedPosts));

  //   // Dispatch a custom event to notify other components in the same tab
  //   window.dispatchEvent(
  //     new CustomEvent("postsUpdated", { detail: updatedPosts })
  //   );
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.excerpt.trim() ||
      !formData.content.trim()
    ) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    let updatedPosts;
    if (editingPost) {
      updatedPosts = await updatePost(editingPost.id, formData);
      toast.success("تم تحديث المقال بنجاح");
    } else {
      const newPost = await createPost(formData);
      if (newPost.success) {
        toast.success("تم إنشاء المقال بنجاح");
      } else {
        toast.error("حدث خطأ أثناء إنشاء المقال");
      }
    }

    resetForm();
    loadPosts();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "selfAwareness",
      published: true,
      featured: false,
      image: "",
    });
    setEditingPost(null);
    setShowEditor(false);
  };

  const editPost = (post) => {
    setEditingPost(post);
    setFormData(post);
    setShowEditor(true);
  };

  const deletePost = async (id) => {
    if (window.confirm("هل أنت متأكد من حذف هذا المقال؟")) {
      const deletedPost = await removePost(id);
      if (deletedPost.success) {
        toast.success("تم حذف المقال بنجاح");
        loadPosts();
      } else {
        toast.error("حدث خطأ أثناء حذف المقال");
      }
    }
  };

  const togglePublish = async (id) => {
    const updatedPosts = await togglePublishPost(id);
    if (updatedPosts.success) {
      toast.success("تم تحديث حالة النشر");
      loadPosts();
    } else {
      toast.error("حدث خطأ أثناء تحديث حالة النشر");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success("تم تسجيل الخروج بنجاح");
  };

  if (showEditor) {
    return (
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={resetForm}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                ← العودة للقائمة
              </button>
              <h1 className="text-xl font-bold">
                {editingPost ? "تحرير المقال" : "مقال جديد"}
              </h1>
            </div>
            <img
              src={HattanLogoWhite}
              alt="Logo"
              className="w-10 h-10 bg-[#004f38] p-1 rounded"
            />
          </div>
        </header>

        <main
          className="container mx-auto px-4 py-8"
          style={{ backgroundColor: "#f9fafb" }}
        >
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div
              className="bg-white rounded-lg shadow-sm p-6 space-y-6"
              style={{ backgroundColor: "#ffffff", minHeight: "600px" }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    عنوان المقال *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#004f38] focus:border-transparent"
                    placeholder="ادخل عنوان المقال"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    التصنيف
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#004f38] focus:border-transparent"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.key} value={cat.key}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  رابط الصورة
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#004f38] focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
                {formData.image && (
                  <div className="mt-2">
                    <img
                      src={formData.image}
                      alt="معاينة الصورة"
                      className="w-32 h-20 object-cover rounded border"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  نبذة مختصرة *
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData({ ...formData, excerpt: e.target.value })
                  }
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#004f38] focus:border-transparent"
                  placeholder="نبذة مختصرة عن المقال"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  محتوى المقال *
                </label>
                <div className="bg-white border border-gray-300 rounded-md">
                  <textarea
                    value={formData.content || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                    className="w-full px-3 py-2 border-0 rounded-md focus:ring-2 focus:ring-[#004f38] focus:border-transparent resize-none"
                    style={{
                      minHeight: "300px",
                      fontFamily: "Emad-Arabic, sans-serif",
                      direction: "rtl",
                      textAlign: "right",
                    }}
                    placeholder="اكتب محتوى المقال هنا..."
                    dir="rtl"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  يمكنك كتابة المحتوى هنا. سيتم عرضه كما هو في المدونة.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.published}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          published: e.target.checked,
                        })
                      }
                      className="rounded border-gray-300 text-[#004f38] focus:ring-[#004f38]"
                    />
                    <span className="text-sm text-gray-700">
                      نشر المقال فوراً
                    </span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) =>
                        setFormData({ ...formData, featured: e.target.checked })
                      }
                      className="rounded border-gray-300 text-[#004f38] focus:ring-[#004f38]"
                    />
                    <span className="text-sm text-gray-700">
                      جعل المقال مميز
                    </span>
                  </label>
                </div>

                <div className="flex gap-3 justify-end">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    إلغاء
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#004f38] text-white rounded-md hover:bg-[#003d2c]"
                  >
                    {editingPost ? "تحديث المقال" : "حفظ المقال"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={HattanLogoWhite}
              alt="Logo"
              className="w-10 h-10 bg-[#004f38] p-1 rounded"
            />
            <h1 className="text-xl font-bold">لوحة تحكم الإدارة</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
            >
              <FiHome className="w-4 h-4" />
              الموقع الرئيسي
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
            >
              <FiLogOut className="w-4 h-4" />
              تسجيل الخروج
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl font-bold text-gray-900">إدارة المقالات</h2>
          <button
            onClick={() => setShowEditor(true)}
            className="flex items-center gap-2 bg-[#004f38] text-white px-6 py-3 rounded-lg hover:bg-[#003d2c] transition-colors"
          >
            <FiPlus className="w-5 h-5" />
            مقال جديد
          </button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="البحث في المقالات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004f38] focus:border-transparent"
                  dir="rtl"
                />
              </div>
            </div>
            <div className="md:w-48">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004f38] focus:border-transparent"
              >
                <option value="all">جميع التصنيفات</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.key} value={cat.key}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            عرض {filteredPosts.length} من أصل {posts.length} مقال
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    العنوان
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    التصنيف
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    التاريخ
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    الحالة
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    وقت القراءة
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    الإجراءات
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 line-clamp-2">
                            {post.title}
                          </div>
                          <div className="text-sm text-gray-500 mt-1 line-clamp-1">
                            {post.excerpt}
                          </div>
                        </div>
                        {post.featured && (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                            مميز
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#004f38] text-white">
                        {
                          CATEGORIES.find((cat) => cat.key === post.category)
                            ?.label
                        }
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString("ar-SA")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            post.published
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {post.published ? "منشور" : "مسودة"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {post.readTime} دقيقة
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => editPost(post)}
                          className="text-indigo-600 hover:text-indigo-900 p-1 rounded hover:bg-indigo-50"
                          title="تحرير"
                        >
                          <FiEdit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => togglePublish(post.id)}
                          className={`p-1 rounded ${
                            post.published
                              ? "text-yellow-600 hover:text-yellow-900 hover:bg-yellow-50"
                              : "text-green-600 hover:text-green-900 hover:bg-green-50"
                          }`}
                          title={post.published ? "إخفاء" : "نشر"}
                        >
                          {post.published ? (
                            <FiEyeOff className="w-4 h-4" />
                          ) : (
                            <FiEye className="w-4 h-4" />
                          )}
                        </button>
                        <button
                          onClick={() => deletePost(post._id)}
                          className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                          title="حذف"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredPosts.length === 0 && posts.length > 0 && (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-500 text-lg mb-4">
              لم يتم العثور على مقالات تطابق البحث
            </p>
          </div>
        )}

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">
              لا توجد مقالات حتى الآن
            </p>
            <button
              onClick={() => setShowEditor(true)}
              className="text-[#004f38] hover:text-[#003d2c] font-medium"
            >
              إنشاء أول مقال
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
