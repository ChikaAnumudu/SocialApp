import { useWindowDimensions, View } from "react-native";

export default function ActionButton() {
    const screenWidth = useWindowDimensions().width;
    return (
        <View style={[styles.actionView, {right: (screenWidth - 80)/2 }]}>
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
        bottom: 10,
    }
})