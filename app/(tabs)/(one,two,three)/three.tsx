import { Link } from "expo-router";
import { Text, View } from "../../../components/Themed";

export default function Two() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Two</Text>
      <Link href="/four">
        <Text>Go to /four</Text>
      </Link>
    </View>
  );
}
