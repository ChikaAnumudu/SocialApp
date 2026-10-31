import { createContext, useState } from "react";

export const SocialContext = createContext({
  getTabHeight: () => {},
  setTabHeight: () => {},
  toggleCamera: () => {},
  getCameraState: () => {}
});

export default function SocialProvider({children}){
    const [ bottomTabHeight, setBottomTabHeight ] = useState(0)
    const [ isCameraVisible, setCameraVisible ] = useState(false);

    const toggleCamera = () => {
        setCameraVisible(!isCameraVisible);
    }

    const getCameraState = () => {
        return isCameraVisible;
    }

    const getTabHeight = () => {
        return bottomTabHeight;
    }

    const setTabHeight = (height) => {
        setBottomTabHeight(height);
    }

    const socialHandle = {
      getTabHeight: getTabHeight,
      setTabHeight: setTabHeight,
      toggleCamera: toggleCamera,
      getCameraState: getCameraState,
    };

    return (
        <SocialContext.Provider value={socialHandle}>
            {children}
        </SocialContext.Provider>
    );
}