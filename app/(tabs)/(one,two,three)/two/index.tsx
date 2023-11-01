import { Link } from "expo-router";
import { Text, View } from "../../../../components/Themed";

export default function Two() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Two</Text>
      <Link href="/two/twentytwo">
        <Text>Go to /two/twentytwo</Text>
      </Link>
    </View>
  );
}
