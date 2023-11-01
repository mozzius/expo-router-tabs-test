import { Link } from "expo-router";
import { Text, View } from "../../../components/Themed";

export default function Two() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Text>Two</Text>
      <Link href="/three">
        <Text>Go to /three</Text>
      </Link>
      <Link href="/(tabs)/(two)/three">
        <Text>Go to /(tabs)/(two)/three</Text>
      </Link>
    </View>
  );
}
