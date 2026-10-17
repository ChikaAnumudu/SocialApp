import { View, Text } from "react-native";

export default function HomeScreen() {
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
        <View /* Followers and Following */ style={{ 
            flexDirection: "row", 
            width: '95%', 
            backgroundColor: '#f6f7f9', 
            justifyContent: 'space-evenly', 
            height: 50, 
            borderRadius: 5,
            // marginBottom: 5
        }}>
          <View /* Followers */ style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 22, fontWeight: 400, color: "#242424" }}>
              {"600 "}
            </Text>
            <Text style={{ fontSize: 22, fontWeight: 400, color: '#bdbdbd' }}>Followers</Text>
          </View>
          <View /* Following */ style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 22, fontWeight: 400, color: "#242424" }}>
              {"400 "}
            </Text>
            <Text style={{ fontSize: 22, fontWeight: 400, color: '#bdbdbd' }}>Following</Text>
          </View>
        </View>
      </View>
    );
}