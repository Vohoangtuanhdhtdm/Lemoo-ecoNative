import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authorizedAxiosInstance from "@/services/axiosInstance";
import { API_ROOT } from "@/utils/constants";
import { useNavigation } from "expo-router";

interface LoginData {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation(); // Khai báo navigation
  // Xử lý Login
  const submitLogIn = async (data: LoginData) => {
    try {
      const res = await authorizedAxiosInstance.post(
        `${API_ROOT}/v1/users/login`,
        data
      );

      const userInfo = {
        id: res.data.id,
        email: res.data.email,
      };

      await AsyncStorage.setItem("accessToken", res.data.accessToken);
      await AsyncStorage.setItem("refreshToken", res.data.refreshToken);
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));

      // Điều hướng tới dashboard
      Alert.alert("Đăng nhập thành công!", "Bạn đã vào Dashboard.", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Dashboard" as never), // Dùng as never giúp TypeScript hiểu điều hướng
        },
      ] as Array<{ text: string; onPress: () => void }>);
    } catch (error) {
      Alert.alert("Đăng nhập thất bại", "Kiểm tra lại thông tin.");
    }
  };

  const handleLogin = () => {
    const loginData = { email, password };
    submitLogIn(loginData);
  };

  return (
    <View className="p-5 bg-slate-500">
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        className="mb-3"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Mật khẩu"
        secureTextEntry
        className="mb-3"
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
