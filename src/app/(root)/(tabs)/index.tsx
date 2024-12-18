import { observer, use$ } from "@legendapp/state/react";
import { Redirect } from "expo-router";
import { View } from "react-native";
import { authState$ } from "~/features/authentication";
import { HistoryWidget } from "~/features/history";

export default observer(function Root() {
  const auth = use$(() => authState$.isAuthenticated);

  if (!auth) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <View className="flex-1">
      <View className="p-2">
        <HistoryWidget />
      </View>
    </View>
  );
});
