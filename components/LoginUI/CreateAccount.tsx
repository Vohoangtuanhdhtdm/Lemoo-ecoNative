import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

import { styled } from "nativewind";

const CreateAccount = () => {
  return (
    <View className="flex-1 p-5 justify-between">
      {/* Header */}
      <View className="flex-1 justify-center">
        <Text className="text-4xl font-bold mb-5">Create Account</Text>
        {/* Hình nền hoặc phần trang trí */}
        <View className="absolute top-0 right-[-155px]">
          <View className="w-32 h-32 bg-blue-500 rounded-full" />
        </View>
      </View>

      {/* Form */}
      <View className="flex-2 space-y-6 mb-10">
        {/* Input Name */}
        <TextInput
          className="w-full h-12 bg-gray-200 rounded-full px-5"
          placeholder="What is your name?"
          placeholderTextColor="#ccc"
        />

        {/* Input Email */}
        <TextInput
          className="w-full h-12 bg-gray-200 rounded-full px-5"
          placeholder="Email"
          placeholderTextColor="#ccc"
        />

        {/* Input Password */}
        <TextInput
          className="w-full h-12 bg-gray-200 rounded-full px-5"
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#ccc"
        />

        {/* Input Số điện thoại */}
        <View className="flex-row items-center bg-gray-200 rounded-full px-5">
          <Image
            className="w-12 h-4"
            source={require("../../assets/icons/flag-icon.png")}
          />
          <TextInput
            className="flex-1 h-12 ml-3"
            placeholder="Your number"
            placeholderTextColor="#ccc"
          />
        </View>
      </View>

      {/* Nút bấm */}
      <View className="space-y-4">
        <TouchableOpacity className="bg-blue-600 py-4 rounded-full items-center">
          <Text className="text-white text-lg font-medium">Done</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <Text className="text-gray-500">Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateAccount;
