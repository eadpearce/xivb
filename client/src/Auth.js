import jwt_decode from 'jwt-decode'

class Auth {
  static setToken(token) {
    localStorage.setItem('token', token);
  }

  static isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  static removeToken() {
    localStorage.removeItem('token');
  }

  static currentUser() {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    return decoded.username;
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static fetch(url, options) {
    return window.fetch(url, {
      ...options,
      body: options.body && JSON.stringify(options.body),
      headers: {
        Authorization: `Bearer ${Auth.getToken()}`,
        'Content-Type': 'application/json',
      }
    }).then(res => res.json());
  }
}
export default Auth;
