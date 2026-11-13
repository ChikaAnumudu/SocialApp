import { createContext, useState } from "react";

export const SocialContext = createContext({
  getTabHeight: () => {},
  setTabHeight: () => {},
  toggleCamera: () => {},
  getCameraState: () => {},
  addPhoto : () => {},
  getAlbum : () => {},
  addVideo : () => {}
});

export default function SocialProvider({children}){
    const [ bottomTabHeight, setBottomTabHeight ] = useState(0)
    const [ isCameraVisible, setCameraVisible ] = useState(false);
    const [ photoAlbum, setPhotoAlbum ] = useState([]);
    const [videoAblum, setVideoAblum] = useState([]);

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
    const getAlbum = (type) => {
        return type === 'photos' ? photoAlbum : videoAblum;
    }

    const  addVideo = (asset) => {
        const id = new Date().valueOf();
        const newAlbum = [
            {
                id : id,
                uri : asset.uri,
                duration : asset.duration
            },
            ...videoAblum
        ];
        setVideoAblum(newAlbum);
    }

    const socialHandle = {
      getTabHeight: getTabHeight,
      setTabHeight: setTabHeight,
      toggleCamera: toggleCamera,
      getCameraState: getCameraState,
      addPhoto: addPhoto,
      getAlbum: getAlbum,
      addVideo: addVideo,
    };

    return (
        <SocialContext.Provider value={socialHandle}>
            {children}
        </SocialContext.Provider>
    );
}