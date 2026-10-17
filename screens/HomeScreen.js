import { View, Text } from "react-native";

export default function HomeScreen() {
    return(
        <View style={{flex : 1,  alignItems: "center"}}>
            <View style={{ alignItems: 'center', height: 50}}>
                <Text style={{ fontSize: 22, fontWeight: 600, color:'#333533'}}>
                    Anumudu Clinton
                </Text>
                <Text style={{fontSize: 14, fontWeight: 400, color: '#8f90a7'}}>
                    Always Online !
                </Text>
            </View>
        </View>
    )
}