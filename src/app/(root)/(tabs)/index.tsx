import { observer, use$ } from "@legendapp/state/react";
import { Redirect, Tabs } from "expo-router";
import { View } from "react-native";

import { authState$ } from "~/features/authentication";
import { HistoryWidget } from "~/features/history";
import { Plus } from "~/components/icons";
import { Button, Text } from "~/components/ui";

export default observer(function Root() {
  const auth = use$(() => authState$.isAuthenticated);

  if (!auth) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <View className="flex-1">
      <Tabs.Screen options={{ title: "Dashboard" }} />

      <View className="p-2">
        <HistoryWidget />
      </View>
      <View className="px-2">
        {/* <Button variant="outline" className="gap-2">
          <Plus size={16} />
          <Text className="leading-none text-sm">Add widget</Text>
        </Button> */}
      </View>
    </View>
  );
});
