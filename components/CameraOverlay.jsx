import { Overlay } from "@rneui/base";
import { useContext, useState } from "react";
import { SocialContext } from "../store/SocialProvider";

export default function CameraOverlay() {
    const [visible, setVisiable] = useState(true);
    const socialHandle = useContext(SocialContext);
    return (
      <Overlay
        isVisible={visible}
        overlayStyle={{
          backgroundColor: "white",
          height: "50%",
          width: "50%",
          borderRadius: 10,
        }}
        onBackdropPress={() => socialHandle.toggleCamera()}
      >
        <View>
          <Text>This is the overlay!</Text>
        </View>
      </Overlay>
    );
}