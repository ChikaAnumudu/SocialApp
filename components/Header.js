import { StyleSheet, View, Image, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";



export default function Header() {
    const navigation = useNavigation();
    return (
      <View style={{ height: 170, alignItems: "center", marginBottom: 60 }}>
        <Image
          source={require("../assets/Images/header-background-unspecified.png")}
          style={{ position: "absolute" }}
        />
        {/* * Headle and Edit icon * */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ position: "absolute", top: 60, left: "-10%" }}>
            <Text style={{ color: "white", fontSize: 20 }}>
              @AnumuduClinton
            </Text>
          </View>

          <View style={{ position: "relative", top: 30, right: -130 }}>
            {/* Icon */}
            <AntDesign 
                name="edit" 
                size={24} 
                color="white" 
                onPress={() => navigation.navigate('Profile')}
            />
          </View>
        </View>

        <View style={styles.profileView}>
          <Image
            source={require("../assets/Images/alex-profile-image.png")}
            style={styles.ProfileImage}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    profileView : {
        width: 110,
        height: 110,
        position: 'absolute',
        top: 115,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 55,
    },
    ProfileImage : {
        width : 100,
        height : 100,
        borderRadius : 50
    }
})