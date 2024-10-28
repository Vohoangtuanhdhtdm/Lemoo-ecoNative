import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const StartUI = () => {
  return (
    <View className="flex-1 justify-between bg-white p-5">
      {/* Phần trên */}
      <View className="flex-2 items-center justify-center">
        {/* Logo */}
        <View className="p-5 rounded-full bg-gray-100 shadow-lg">
          <Image
            className="w-18 h-18"
            source={require("../../assets/images/logo-lemoo.png")}
          />
        </View>

        {/* Tên ứng dụng */}
        <Text className="text-4xl font-semibold mt-5">Lemoo</Text>

        {/* Mô tả */}
        <Text className="text-base text-gray-500 text-center mt-2 px-10">
          Beautiful eCommerce UI Kit for your online store
        </Text>
      </View>

      {/* Phần dưới */}
      <View className="flex-1 justify-center">
        {/* Nút bắt đầu */}
        <TouchableOpacity className="bg-blue-600 py-4 rounded-full mb-5 items-center">
          <Text className="text-white text-lg font-medium">
            Let's get started
          </Text>
        </TouchableOpacity>

        {/* Liên kết đăng nhập */}
        <TouchableOpacity className="items-center">
          <Text className="text-blue-600 text-base">
            I already have an account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartUI;
