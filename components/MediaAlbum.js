import { useContext } from "react";
import { FlatList, Image, View, Text } from "react-native";
import { SocialContext } from "../store/SocialProvider";

export default function MediaAlbum({ albumType }) {

  const staticImage = [
    { id: 1, uri: require("../assets/Images/pexels-collis-3031397 2.png") },
    { id: 2, uri: require("../assets/Images/pexels-collis-3031397 3.png") },
    { id: 3, uri: require("../assets/Images/pexels-collis-3031397 4.png") },
    { id: 4, uri: require("../assets/Images/pexels-collis-3031397 5.png") },
    { id: 5, uri: require("../assets/Images/pexels-collis-3031397 6.png") },
    { id: 6, uri: require("../assets/Images/pexels-collis-3031397 4.png") },
  ];

  const socialHandle = useContext(SocialContext);

  const RenderImage = ({ item }) => {
    return (
      <Image

        source={typeof item.uri === "number" ? item.uri : { uri: item.uri }}
        style={{ width: 115, height: 107, margin: 5, borderRadius: 5 }}
      />
    );
  };

  const RenderVideoImage = ({ item }) => {
 
    return (
      <View>
        <Image
          source={typeof item.uri === "number" ? item.uri : { uri: item.uri }}
          style={{ width: 115, height: 107, margin: 5, borderRadius: 5 }}
        />
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            bottom: "10%",
            left: "10%",
            width: 50,
            alignItems: "center", 
            borderRadius: 3,
          }}
        >
          <Text style={{ color: "white", fontWeight: "800", fontSize: 10 }}>
            {item.duration}
          </Text>
        </View>
      </View>
    );
  };

  
  return (
    <FlatList
      data={socialHandle.getAlbum(albumType)}
      renderItem={({ item }) =>
        albumType === "photos" ? (
          <RenderImage item={item} />
        ) : (
          <RenderVideoImage item={item} />
        )
      }

      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
    />
  );
}
