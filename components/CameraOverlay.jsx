import { color, Overlay } from "@rneui/base";
import { View, Text, Image, useWindowDimensions, Button } from "react-native";
import { useContext, useState } from "react";
import { SocialContext } from "../store/SocialProvider";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Icon } from "@rneui/themed";
// import { useWindowDimensions } from "react-native";
// import * as ImagePicker from 'expo-camera';
import * as ImagePicker from "expo-image-picker";

export default function CameraOverlay() {
    const [visible, setVisiable] = useState(true);
    const socialHandle = useContext(SocialContext);
    const { width, height } = useWindowDimensions();
    const imageWidth = width - 40;
    const imageHeigth = height / 2;
    const [ image, setImage ] = useState(null);

    const pickImage = async () => {
        
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes : ['images'],
            allowsEditing : false,
            aspect : [4,3],
            quality : 0.5
        })

        console.log(result);

        if (!result.canceled) {
        setImage(result.assets[0].uri);
        }
    };

    const displayImage = () => {
        return (
            <Image 
                source={{uri : image}}
                style={{
                    width: imageWidth,
                    height: imageHeigth,
                    borderRadius: 10,
                }} 
            />
        )
    };

    const insertSaveButton = () => {
        if(!image) return null;
        return (
            <Button 
                title="Save Image"
                titleStyle={{color : 'black'}}
                buttonStyle={{backgroundColor: '#f5cb5c', borderRadius: 5}}
                onPress={() => {
                    console.log('Add image to album')
                    socialHandle.toggleCamera();
                }}
            />
        )
    }

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
          {displayImage()}
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
            onPress={pickImage}
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

        {insertSaveButton()}
      </Overlay>
    );
}