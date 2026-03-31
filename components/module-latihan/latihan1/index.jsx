import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f11616ff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function index() {
  return (
    <View style={styles.container}>
      <Text> Welcome </Text>
      <Text> Praktikum lab pemrograman perangkat bergerak </Text>
    </View>
  );
}
