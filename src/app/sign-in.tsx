import { router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BannerLogo } from "~/components/banner-logo";
import { Button, Text } from "~/components/ui";
import { LocalLoginCommand, useAuth } from "~/features/authentication";

export default function SignInPage() {
  const auth = useAuth();

  const handleLocalSignIn = async () => {
    await auth.login(new LocalLoginCommand(), undefined);
    router.replace("/(root)/(tabs)", {});
  };

  return (
    <SafeAreaView>
      <View className="flex-1">
        <View className="p-4 h-24">
          <BannerLogo />
        </View>
        <View>
          <Button variant="outline" onPress={handleLocalSignIn}>
            <Text>Sign In with Local</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
