import { createContext } from "react";
import clickSound from "../../assets/audio/mouse-click-153941.mp3";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

export const MainContext = createContext(null);

const MainProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const handleSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const mainInfo = { handleSound, googleLogin };
  return (
    <MainContext.Provider value={mainInfo}>{children}</MainContext.Provider>
  );
};

export default MainProvider;
