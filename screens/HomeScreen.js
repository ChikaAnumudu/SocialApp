import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ButtonGroup } from "@rneui/themed";
import MediaAlbum from "../components/MediaAlbum";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { SocialContext } from "../store/SocialProvider";
// import { ButtonGroup } from "@rneui/base";


export default function HomeScreen() {
    const [ selectedIndex, setSelectedIndex ] = useState(0);
    const buttonList = ['Photos', 'Videos'];
    const tabHeigth = useBottomTabBarHeight();
    console.log('Tab Heigth :', tabHeigth);

    const socialHandle = useContext(SocialContext);

    useEffect(() => {
        socialHandle.setTabHeight(tabHeigth)
    },[])

    const FolFriendBlock = ({text1, text2}) => {
        return (<View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: 400, color: "#242424" }}>
            {text1}
          </Text>
          <Text style={{ fontSize: 22, fontWeight: 400, color: "#bdbdbd" }}>
            {text2}
          </Text>
        </View>
        )
    }
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View /* Profile name and tagline*/
          style={{ alignItems: "center", height: 50, marginBottom: 10 }}
        >
          <Text style={{ fontSize: 22, fontWeight: 600, color: "#333533" }}>
            Anumudu Clinton
          </Text>
          <Text style={{ fontSize: 14, fontWeight: 400, color: "#8f90a7" }}>
            Always Online !
          </Text>
        </View>
        <View
          /* Followers and Following */ style={{
            flexDirection: "row",
            width: "95%",
            backgroundColor: "#f6f7f9",
            justifyContent: "space-evenly",
            height: 50,
            borderRadius: 5,
            marginBottom: 10,
          }}
        >
          <FolFriendBlock text1={`400 `} text2={`followers `} />
          <FolFriendBlock text1={"604 "} text2={`following `} />
        </View>
        <ButtonGroup
          buttons={buttonList}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            (setSelectedIndex(value),
              console.log("Action Data For: ", buttonList[value]));
          }}
          buttonStyle={{
            backgroundColor: "lightgrey",
            borderRadius: 5,
          }}
          selectedButtonStyle={{
            backgroundColor: "#f6c5",
          }}
          innerBorderStyle={{
            width: 5,
            color: "white",
          }}
          containerStyle={{ borderWidth: 0 }}
          textStyle={{ color: "darkgrey", fontSize: 16 }}
          selectedTextStyle={{ color: "black", fontSize: 16 }}
        />
        <MediaAlbum
          albumType={buttonList[selectedIndex] === "Photos" ? "photos" : "videos"}
        />
      </View>
    );
}