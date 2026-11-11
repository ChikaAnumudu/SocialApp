import { color, Overlay } from "@rneui/base";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { SocialContext } from "../store/SocialProvider";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Icon } from "@rneui/themed";
// import * as ImagePicker from 'expo-camera';
import * as ImagePicker from "expo-image-picker";

export default function CameraOverlay({assetType}) {
  const [visible, setVisible] = useState(true);
  const socialHandle = useContext(SocialContext);
  const { width, height } = useWindowDimensions();
  const imageWidth = width - 40;
  const imageHeight = height / 2;
  const [image, setImage] = useState(null);
  const [ video, setVideoImage ] = useState(null);

 

  const pickImage = async (mode) => {
    const cameraOptions = {
      mediaTypes: ["images"],
      allowsEditing: false,
      aspect: [4, 3],
      quality: 0.5,
    };
    let result =
      mode === "upload"
        ? await ImagePicker.launchImageLibraryAsync(cameraOptions)
        : await ImagePicker.launchCameraAsync({...cameraOptions, cameraType : ImagePicker.CameraType.back});

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickVideos = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["videos"],
      allowsEditing: false,
      aspect: [4, 3],
      quality: 0.5,
    });
    console.log(result);

    if (!result.canceled) {
      setVideoImage(result.assets[0].uri);
    }
  };

  const displayImage = () => {
    return (
      <Image
        source={{ uri: assetType === 'photos' ? image : video }}
        style={{
          width: imageWidth,
          height: imageHeight,
          borderRadius: 10,
        }}
      />
    );
  };

  const insertSaveButton = () => {
    if (!image && !video) return null;
    return (
      <Button
        title={assetType === "photos" ? "Save Image" : "Save Video" }
        titleStyle={{ color: "black" }}
        buttonStyle={{ backgroundColor: "#f5cb5c", borderRadius: 5 }}
        onPress={() => {
          assetType === "photos"
            ? socialHandle.addPhoto(image)
            : socialHandle.addVideo(video);
          socialHandle.toggleCamera();
        }}
      />
    );
  };

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
          height: imageHeight,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "lightgrey",
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
          type="material-design"
          name="view-gallery-outline"
          color="black"
          size={23}
          onPress={() => assetType === 'photos' ? pickImage('upload') : pickVideos()}
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

        <TouchableOpacity onPress={() => pickImage('take')}>
          <Image
            source={require("../assets/Images/camera-image.png")}
            style={{ width: 65, height: 65 }}
          />
        </TouchableOpacity>
      </View>

      {insertSaveButton()}
    </Overlay>
  );
}
