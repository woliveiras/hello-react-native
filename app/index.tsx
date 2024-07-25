import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Text
        style={{
          fontSize: 90,
          fontWeight: "bold",
          flexWrap: "wrap",
          color: "#fff",
        }}
      >
        Hello World!
      </Text>
    </View>
  );
}
