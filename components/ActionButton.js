import { useContext } from "react";
import { StyleSheet, useWindowDimensions, View,  } from "react-native";
import { SocialContext } from "../store/SocialProvider";
import { Image } from "@rneui/base";


export default function ActionButton({currentRoute}) {
    const screenWidth = useWindowDimensions().width;
    const socialHandle = useContext(SocialContext);
    const bottomTabHeight = socialHandle.getTabHeight();

    console.log('The CurrentRoute is : ', currentRoute);

    const insertContextImage = () => {
        let imageSrc = null;

        switch (currentRoute) {
          case "Home":
            imageSrc = require("../assets/Images/action-image.png");
            break;
          case "Profile":
            imageSrc = require("../assets/Images/action-image.png");
            break;

          default:
            break;
        }
        return (
            imageSrc !==  null ?
            <View 
                style={[styles.actionView, {right: (screenWidth - 80)/2, bottom : bottomTabHeight - 40 }]}>
                <Image 
                    source={imageSrc} 
                    // style={{width: 70, heigth: 70}}
                    containerStyle={{ width: 70, height: 70 }}
                    onPress={() => console.log('Context Button Pressed !')}
                />
            </View>
            :
            null
        )
    }

    return <View>{insertContextImage()}</View>;
}

const styles = StyleSheet.create({
    actionView: {
        width : 80,
        heigth : 80,
        position: "absolute",
        // bottom: 10,
        backgroundColor: 'white',
        borderWidth: 5,
        borderRadius: 50,
        borderColor: 'white'
    }
})