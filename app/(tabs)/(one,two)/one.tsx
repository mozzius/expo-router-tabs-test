import { Link } from "expo-router";
import { Text, View } from "../../../components/Themed";

export default function One() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Text>One</Text>
      <Link href="/three">
        <Text>Go to /three</Text>
      </Link>
    </View>
  );
}
