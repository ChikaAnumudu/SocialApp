import { createContext, useState } from "react";

export const SocialContext = createContext({
  getTabHeight: () => {},
  setTabHeight: () => {},
  toggleCamera: () => {},
  getCameraState: () => {},
  addPhoto : () => {},
  getAlbum : () => {}
});

export default function SocialProvider({children}){
    const [ bottomTabHeight, setBottomTabHeight ] = useState(0)
    const [ isCameraVisible, setCameraVisible ] = useState(false);
    const [ photoAlbum, setPhotoAlbum ] = useState([]);

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

    const addPhoto = (uri) => {
        const id = new Date().valueOf();
        const newAlbum = [
            {
                id: id,
                uri: uri,
            },
            ...photoAlbum,
        ]
        setPhotoAlbum(newAlbum);
    };
    const getAlbum = () => {
        return photoAlbum;
    }

    const socialHandle = {
      getTabHeight: getTabHeight,
      setTabHeight: setTabHeight,
      toggleCamera: toggleCamera,
      getCameraState: getCameraState,
      addPhoto: addPhoto,
      getAlbum: getAlbum,
    };

    return (
        <SocialContext.Provider value={socialHandle}>
            {children}
        </SocialContext.Provider>
    );
}