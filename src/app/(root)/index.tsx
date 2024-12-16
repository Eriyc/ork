import { Text } from "react-native";
import { useAuth } from "~/features/authentication";

export default function Root() {
  const auth = useAuth();

  return <Text>Root</Text>;
}
