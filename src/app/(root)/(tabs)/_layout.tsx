import { observer } from "@legendapp/state/react";
import { Tabs } from "expo-router";

export default observer(function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
});
