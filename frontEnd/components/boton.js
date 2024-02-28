import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import foto1 from "./assets/ch1.jpg" 


export default function Boton({ onPress, text, source }) {
  return (
    <>
      <TouchableOpacity style={styles.bttn} onPress={onPress} ImageBackground source={foto1}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  bttn: {
    flex: 1,
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
    backgroundColor: "#CCC",
  },

});
