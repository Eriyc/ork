import { View } from "react-native";
import { BannerLogo } from "~/components/banner-logo";

export default function Root() {
  return (
    <View className="flex-1">
      <View className="h-24">
        <View className="p-4">
          <BannerLogo />
        </View>
      </View>
    </View>
  );
}
