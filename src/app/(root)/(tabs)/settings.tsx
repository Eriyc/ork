import { Tabs, useRouter } from "expo-router";
import { View } from "react-native";
import { Button, Text } from "~/components/ui";

export default function SettingsPage() {
  const router = useRouter();

  return (
    <View className="flex-1">
      <Tabs.Screen options={{ title: "Settings" }} />

      <Text>Settings</Text>
      <Button onPress={() => router.push("/(root)/settings/account")}>
        <Text>Account</Text>
      </Button>
    </View>
  );
}
