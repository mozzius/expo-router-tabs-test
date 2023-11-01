import { Stack } from "expo-router";

// add this has no effect:
// export const unstable_settings = {
//   initialRouteName: "one",
//   two: {
//     initialRouteName: "two",
//   },
// };

export default function Substack() {
  return (
    <Stack>
      <Stack.Screen name="one" options={{ title: "One" }} />
      <Stack.Screen name="two" options={{ title: "Two" }} />
      <Stack.Screen name="three" options={{ title: "Three" }} />
    </Stack>
  );
}
