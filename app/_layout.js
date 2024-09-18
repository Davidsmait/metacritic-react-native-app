import { Pressable, Text, View } from "react-native";
import { Link, Slot, Stack } from "expo-router";
import { Logo } from "../components/Logo";
import { InfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1 ">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <InfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
