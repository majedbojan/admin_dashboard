// import jwt_decode from "jwt-decode";
// import axios from "axios";
// // import store from '../store'
// /**
//  * Get the access token from localStorage and validate the token
//  *
//  * @return String token if token is valid
//  * @return Null   if token is not valid
//  */
// export const getAccessToken = () => {
//   try {
//     if (sessionStorage.getItem('accessToken') && jwt_decode(sessionStorage.getItem('accessToken')))
//       return "Bearer " + sessionStorage.getItem('accessToken');
//     }
//   catch (err) {
//     if (window.location.pathname !== '/login')
//       window.location.href = "/login";
//     console.log('EXPIRED');
//     console.log(err);
//     return null;
//   }
// }
//
// /**
//  * Save Save user session (Token, Role and User Objecy) in browser storage
//  *
//  * @param data is the `data` object from login api response
//  */
// export const saveSession = (data) => {
//   removeSession();
//   sessionStorage.setItem('accessToken', data.token);
//   if (window.location.pathname === '/login')
//   window.location.href = "/";
//   // set the token in the headers
//   axios.defaults.headers.common['Authorization'] = getAccessToken();
// }
//
// /**
//  * Check if users is logged in and the session token still valid
//  */
// export const isLoggedIn = () => {
//   if (sessionStorage.getItem('accessToken')) {
//     try {
//       return jwt_decode(sessionStorage.getItem('accessToken'))
//         ? true
//         : false
//     } catch (err) {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }
//
// export const isAuthorized = (roles) => {
//   if (isLoggedIn()) {
//     const role = getRole()
//
//     if (getAccess() !== 'admin')
//       return false
//
//     return (roles.indexOf(role) > -1) ? true : false
//   } else {
//     return false
//   }
// }
//
// /**
//  * Load the user object from localStorage
//  */
// export const getCurrentUser = () => {
//   if (sessionStorage.getItem('accessToken'))
//     return jwt_decode(sessionStorage.getItem('accessToken'))
//   else
//     return false
// }
//
// /**
//  * Get Current User Role
//  */
// export const getRole = () => {
//   if (sessionStorage.getItem('accessToken')) {
//     const token = jwt_decode(sessionStorage.getItem('accessToken'))
//     return token ? token.role : false
//   } else {
//     return false
//   }
// }
//
// /**
//  * Check if cuurent user is amdin
//  */
// export const isAdmin = () => {
//   const role = getRole()
//   if( role === 1 )
//     return true
//   else return false
// }
//
// /**
//  * Get Current Access Type
//  */
// export const getAccess = () => {
//   if (sessionStorage.getItem('accessToken')) {
//     const token = jwt_decode(sessionStorage.getItem('accessToken'))
//     return token ? token.access : false
//   } else {
//     return false
//   }
// }
//
// /**
//  * Remove User session data from browser storage
//  */
// export const removeSession = () => {
//   // store.dispatch({type: 'LOG_OUT'})
//   if (window.location.pathname !== '/login')
//     window.location.href = "/login";
//   sessionStorage.clear();
//   axios.defaults.headers.common['Authorization'] = null;
// }
