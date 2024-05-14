// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAyR2tNQdmczfqimksM1ZZuzhUj92InSgs",
//   authDomain: "espresso-emporium-78946.firebaseapp.com",
//   projectId: "espresso-emporium-78946",
//   storageBucket: "espresso-emporium-78946.appspot.com",
//   messagingSenderId: "77091989210",
//   appId: "1:77091989210:web:70c4fb07a78778972c67e3",
// };
console.log(import.meta.env.VITE_APIKEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
