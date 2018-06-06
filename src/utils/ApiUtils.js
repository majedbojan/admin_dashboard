import axios from "axios";
import {getAccessToken, removeSession} from './SessionUtils.js'

/**
 * Set the defaults for the APIs Requests
 */
// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL : 'http://localhost:3000/v1'
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_BASE_URL : 'http://api.laan.dev.clicksandbox.com:8080/v1'
axios.defaults.headers['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
if (getAccessToken())
  axios.defaults.headers.common['Authorization'] = getAccessToken();

// Handle Errors
axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  if (error.response && error.response.data && error.response.data.error_code) {
    const error_code = error.response.data.error_code;
    // Handle Expired and invalid Session Errors
    if ((error_code >= 1200 && error_code <= 1299) || error_code === 1001) {
      if (window.location.pathname !== '/login') {
        removeSession();
        window.location.href = "/login";
      }
    }
  }
  return Promise.reject(error);
});
