import { FlatList, Image } from "react-native";

export default function MediaAlbum({ albumType }) {
  const staticImage = [
    { id: 1, uri: require("../assets/Images/pexels-collis-3031397 2.png") },
    { id: 2, uri: require("../assets/Images/pexels-collis-3031397 3.png") },
    { id: 3, uri: require("../assets/Images/pexels-collis-3031397 4.png") },
    { id: 4, uri: require("../assets/Images/pexels-collis-3031397 5.png") },
    { id: 5, uri: require("../assets/Images/pexels-collis-3031397 6.png") },
    { id: 6, uri: require("../assets/Images/pexels-collis-3031397 4.png") },
  ];

  return albumType === "photos" ? 
    <FlatList
      data={staticImage}
      renderItem={({ item }) => (
        <Image
          source={item.uri}
          style={{ width: 115, heigth: 107, margin: 5, borderRadius: 5 }}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={3}
    />
  : null;
}