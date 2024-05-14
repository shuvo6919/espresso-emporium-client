import { createContext, useState } from "react";
import clickSound from "../../assets/audio/mouse-click-153941.mp3";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import Swal from "sweetalert2";

export const MainContext = createContext(null);

const MainProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const handleSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signupWithEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const successAlert = (msg) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: msg,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const errorAlert = (msg) => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: msg,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const mainInfo = {
    user,
    handleSound,
    googleLogin,
    signupWithEmailPass,
    successAlert,
    errorAlert,
    signInWithEmailPass,
    logOut,
  };
  return (
    <MainContext.Provider value={mainInfo}>{children}</MainContext.Provider>
  );
};

export default MainProvider;
