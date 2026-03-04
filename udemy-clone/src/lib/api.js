const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

function getAuthToken() {
  return localStorage.getItem('token');
}

async function apiRequest(path, { method = 'GET', body, headers = {} } = {}) {
  const token = getAuthToken();
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data && data.error ? data.error : 'Request failed';
    throw new Error(message);
  }
  return data;
}

export const api = {
  login: (payload) => apiRequest('/api/login', { method: 'POST', body: payload }),
  register: (payload) => apiRequest('/api/register', { method: 'POST', body: payload }),
  me: () => apiRequest('/api/me'),
  getCart: () => apiRequest('/api/cart'),
  addToCart: (item) => apiRequest('/api/cart', { method: 'POST', body: item }),
  removeFromCart: (courseId) => apiRequest(`/api/cart/${courseId}`, { method: 'DELETE' }),
  API_BASE_URL,
};

export default api;