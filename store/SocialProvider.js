import { createContext, useState } from "react";

export const SocialContext = createContext({
    getTabHeight : () => {},
    setTabHeight : () => {}
})

export default function SocialProvider({children}){
    const [ bottomTabHeight, setBottomTabHeight ] = useState(0)

    const getTabHeight = () => {
        return bottomTabHeight;
    }

    const setTabHeight = (height) => {
        setBottomTabHeight(height);
    }

    const socialHandle = {
        getTabHeight : getTabHeight,
        setTabHeight : setTabHeight
    }

    return (
        <SocialContext.Provider value={socialHandle}>
            {children}
        </SocialContext.Provider>
    );
}