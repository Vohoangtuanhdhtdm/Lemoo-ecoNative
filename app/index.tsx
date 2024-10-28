import CreateAccount from "@/components/LoginUI/CreateAccount";
import LoginScreen from "@/components/LoginUI/LoginScreen";
import StartUI from "@/components/LoginUI/StartUI";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
    // style={{
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
    // }}
    >
      <LoginScreen />
    </View>
  );
}
