import { useContext } from "react";
import { StyleSheet, useWindowDimensions, View, Image } from "react-native";
import { SocialContext } from "../store/SocialProvider";

export default function ActionButton() {
    const screenWidth = useWindowDimensions().width;
    const socialHandle = useContext(SocialContext);
    const bottomTabHeight = socialHandle.getTabHeight()

    return (
        <View style={[styles.actionView, {right: (screenWidth - 80)/2, bottom : bottomTabHeight - 40 }]}>
            <Image source={require('../assets/Images/action-image.png')} 
                style={{width: 70, heigth: 70}}
            />
        </View>
    )
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