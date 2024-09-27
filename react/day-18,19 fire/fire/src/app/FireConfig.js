
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBMir1u5S6GILZb7ZpJNI03F4H0dlLWgwk",
  authDomain: "wsb-117.firebaseapp.com",
  projectId: "wsb-117",
  storageBucket: "wsb-117.appspot.com",
  messagingSenderId: "967012274315",
  appId: "1:967012274315:web:2dadcc9858008e268e848e",
  measurementId: "G-Y4M6VGLVFN"
};


 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);