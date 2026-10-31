import { Overlay } from "@rneui/base";
import { View, Text, Image } from "react-native";
import { useContext, useState } from "react";
import { SocialContext } from "../store/SocialProvider";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Icon } from "@rneui/themed";
import { useWindowDimensions } from "react-native";

export default function CameraOverlay() {
    const [visible, setVisiable] = useState(true);
    const socialHandle = useContext(SocialContext);
    const { width, height } = useWindowDimensions();
    const imageWidth = width - 40;
    const imageHeigth = height / 2;
    return (
      <Overlay
        isVisible={visible}
        overlayStyle={{
          backgroundColor: "white",
          height: "100%",
          width: "100%",
          borderRadius: 10,
        }}
        // onBackdropPress={() => socialHandle.toggleCamera()} //not needed
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "95%",
            marginBottom: 10,
          }}
        >
          <AntDesign
            name="close"
            size={32}
            onPress={() => socialHandle.toggleCamera()}
          />
          <Text style={{ fontSize: 22 }}>New Post</Text>
        </View>
        <View
          style={{
            width: imageWidth,
            height: imageHeigth,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "ligthgrey",
          }}
        >
          {/* Image goes Here ! */}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "95%",
            position: "relative",
            top: -33,
          }}
        >
          <Icon
            type="material-community"
            name="view-gallery-outline"
            color="black"
            size={23}
            onPress={() => console.log("Time to select the image")}
            containerStyle={{
              alignItems: "center",
              justifyContent: "center",
              width: 65,
              height: 65,
              borderColor: "black",
              borderRadius: 33,
              backgroundColor: "#f5cb5c",
            }}
          />
          <Image
            source={require("../assets/Images/camera-image.png")}
            style={{ width: 65, height: 65 }}
            onPress={() => console.log("It is now time to take the picture !")}
            // onPress={() => console.log(" It is now time to take the picture !")}
          />
        </View>
      </Overlay>
    );
}