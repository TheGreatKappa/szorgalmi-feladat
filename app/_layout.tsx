import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "1. feladat",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="leftcircleo" size={size} color={color} /> // Icon for the first tab
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "2. feladat",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="rightcircleo" size={size} color={color} /> // Icon for the second tab
          ),
        }}
      />
    </Tabs>
  );
}
