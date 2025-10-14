import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import Logo from "../../components/Logo";
import {
  FaBlog,
  FaEye,
  FaHeart,
  FaPlus,
  FaList,
  FaSignOutAlt,
  FaHome,
  FaUser,
} from "react-icons/fa";

const AdminDashboard = () => {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
    totalViews: 0,
    totalLikes: 0,
  });
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    fetchRecentBlogs();
  }, []);

  const fetchStats = async () => {
    try {
      const { data } = await axios.get("/blogs/admin/stats");
      setStats(data);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const fetchRecentBlogs = async () => {
    try {
      const { data } = await axios.get("/blogs/admin/all?limit=5");
      setRecentBlogs(data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const StatCard = ({ icon: Icon, title, value, color }) => (
    <div
      className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 ${color}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {value}
          </p>
        </div>
        <Icon className="text-4xl text-gray-400" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md dark:bg-gray-800">
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Logo size="md" iconColor="text-green-600 dark:text-green-400" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Admin Dashboard
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Welcome back, {admin?.username}!
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center px-4 py-2 text-gray-700 transition-colors duration-200 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <FaHome className="mr-2" />
                Home
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-white transition-colors duration-200 bg-red-600 rounded-lg hover:bg-red-700"
              >
                <FaSignOutAlt className="mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={FaBlog}
            title="Total Blogs"
            value={stats.totalBlogs}
            color="border-blue-500"
          />
          <StatCard
            icon={FaHeart}
            title="Published"
            value={stats.publishedBlogs}
            color="border-green-500"
          />
          <StatCard
            icon={FaEye}
            title="Total Views"
            value={stats.totalViews}
            color="border-purple-500"
          />
          <StatCard
            icon={FaHeart}
            title="Total Likes"
            value={stats.totalLikes}
            color="border-pink-500"
          />
        </div>

        {/* Quick Actions */}
        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <Link
            to="/admin/posts/create"
            className="flex items-center justify-center p-8 transition-all duration-200 transform bg-green-600 rounded-lg shadow-lg hover:bg-green-700 hover:scale-105"
          >
            <FaPlus className="mr-3 text-3xl text-white" />
            <span className="text-xl font-bold text-white">
              Create New Post
            </span>
          </Link>
          <Link
            to="/admin/posts/manage"
            className="flex items-center justify-center p-8 transition-all duration-200 transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105"
          >
            <FaList className="mr-3 text-3xl text-white" />
            <span className="text-xl font-bold text-white">Manage Posts</span>
          </Link>
        </div>

        {/* Recent Posts */}
        <div className="bg-white shadow-lg dark:bg-gray-800 rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Recent Posts
            </h2>
          </div>
          <div className="p-6">
            {loading ? (
              <p className="text-center text-gray-500">Loading...</p>
            ) : recentBlogs.length === 0 ? (
              <p className="text-center text-gray-500">
                No posts yet. Create your first post!
              </p>
            ) : (
              <div className="space-y-4">
                {recentBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="flex items-center justify-between p-4 transition-colors duration-200 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {blog.category} • {blog.status} •{" "}
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <FaEye className="mr-1" /> {blog.views}
                      </span>
                      <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <FaHeart className="mr-1" /> {blog.likes}
                      </span>
                      <Link
                        to={`/admin/posts/edit/${blog._id}`}
                        className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
