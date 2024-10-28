// RootLayout.tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="CreateAccount"
        options={{ title: "Create Account" }}
      />
      <Stack.Screen name="Login" options={{ title: "Login" }} />
      <Stack.Screen name="Dashboard" options={{ title: "Dashboard" }} />
      {/* Bạn có thể thêm các màn hình khác ở đây */}
    </Stack>
  );
}
