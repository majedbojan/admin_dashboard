// import { setLocale } from 'react-redux-i18n'
// import store from '../store'
// import moment from 'moment'
// import {ar} from './momentAr'
// import axios from 'axios'
//
// class Locale {
//   static setLocale = (locale) => {
//     const currentLocale = Locale.getLocale()
//     localStorage.setItem('locale', locale)
//     axios.defaults.headers['locale'] = locale;
//
//     // Force reload the page to fix the impoer files that have i18n
//     if (currentLocale !== locale) {
//       window.location.reload(true);
//     }
//   }
//
//   static getLocale = () => {
//     const locale = localStorage.getItem('locale')
//     return locale ? locale : 'en'
//   }
//
//   static loadLocale = () => {
//     const locale = Locale.getLocale()
//
//     if (locale === 'ar') {
//       moment.locale('ar-x', ar)
//       document.documentElement.setAttribute('dir', 'rtl')
//     } else {
//       moment.locale('en')
//       document.documentElement.setAttribute('dir', 'ltr')
//     }
//
//     axios.defaults.headers['locale'] = locale;
//     store.dispatch(setLocale(locale))
//     Locale.setLocale(locale);
//   }
// }
//
// export default Locale
