import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Get All Posts
 * @param {Object} params - Query parameters for filtering, searching, and pagination
 * @returns {Promise} Promise with posts data and pagination info
 */
export const getPosts = async (params = {}) => {
  try {
    const response = await api.get('/posts', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

/**
 * Get Single Post
 * @param {string} id - Post ID
 * @returns {Promise} Promise with post data
 */
export const getPost = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
};

/**
 * Create New Post
 * @param {Object} postData - Post data to create
 * @returns {Promise} Promise with created post data
 */
export const createPost = async (postData) => {
  try {
    const response = await api.post('/posts', postData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

/**
 * Update Post
 * @param {string} id - Post ID to update
 * @param {Object} postData - Updated post data
 * @returns {Promise} Promise with updated post data
 */
export const updatePost = async (id, postData) => {
  try {
    const response = await api.put(`/posts/${id}`, postData);
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};

/**
 * Delete Post
 * @param {string} id - Post ID to delete
 * @returns {Promise} Promise with deletion confirmation
 */
export const removePost = async (id) => {
  try {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};

/**
 * Toggle Post Publish Status
 * @param {string} id - Post ID to toggle
 * @returns {Promise} Promise with updated post data
 */
export const togglePublishPost = async (id) => {
  try {
    const response = await api.patch(`/posts/${id}/toggle-publish`);
    return response.data;
  } catch (error) {
    console.error('Error toggling publish status:', error);
    throw error;
  }
};

/**
 * Toggle Post Featured Status
 * @param {string} id - Post ID to toggle
 * @returns {Promise} Promise with updated post data
 */
export const toggleFeaturedPost = async (id) => {
  try {
    const response = await api.patch(`/posts/${id}/toggle-featured`);
    return response.data;
  } catch (error) {
    console.error('Error toggling featured status:', error);
    throw error;
  }
};

/**
 * Get All Categories
 * @returns {Promise} Promise with list of categories
 */
export const getCategories = async () => {
  try {
    const response = await api.get('/posts/categories/list');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Export the axios instance for custom requests
export default api;