import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function Boton({ onPress, text }) {
  return (
    <>
      <TouchableOpacity style={styles.bttn} onPress={onPress}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  bttn: {
    flex: 1,
    backgroundColor: "#6495ED",
    borderWidth: 2,
    borderRadius: 500,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 100,
    paddingRight: 100,
    marginTop: 50,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
