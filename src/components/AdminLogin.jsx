import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiLock, FiEye, FiEyeOff, FiArrowLeft } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { HattanLogoWhite } from '../assets';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await login(username, password);
    
    if (result.success) {
      toast.success('تم تسجيل الدخول بنجاح');
      navigate('/admin/dashboard');
    } else {
      toast.error('بيانات الدخول غير صحيحة');
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#004f38] to-[#006b4f] flex items-center justify-center p-4">
      <div className="absolute top-4 left-4">
        <motion.button
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span className="text-sm">العودة للرئيسية</span>
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <img
            src={HattanLogoWhite}
            alt="Hattan Logo"
            className="w-16 h-16 mx-auto mb-4 bg-[#004f38] p-2 rounded-full"
          />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            تسجيل دخول الإدارة
          </h1>
          <p className="text-gray-600">
            ادخل بيانات الوصول للوحة التحكم
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" dir="rtl">
              اسم المستخدم
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004f38] focus:border-transparent transition-colors"
                placeholder="ادخل اسم المستخدم"
                required
                dir="rtl"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" dir="rtl">
              كلمة المرور
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
              </button>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004f38] focus:border-transparent transition-colors"
                placeholder="ادخل كلمة المرور"
                required
                dir="rtl"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#004f38] text-white py-3 rounded-lg font-medium hover:bg-[#003d2c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
          </motion.button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>للمطورين فقط - وصول محدود</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;