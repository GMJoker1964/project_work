import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0M_coAyy5Xw_s9mA8zwVWXvBPuQWgPCU",
  authDomain: "verify-24d2d.firebaseapp.com",
  projectId: "verify-24d2d",
  storageBucket: "verify-24d2d.appspot.com",
  messagingSenderId: "197747411940",
  appId: "1:197747411940:web:b0ca7b98c11d1998c455f1",
  measurementId: "G-9RRGE6EPP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
