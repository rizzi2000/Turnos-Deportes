import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
 




export default function Boton({ onPress, text, source }) {
  return (
    <>
      <TouchableOpacity style={styles.bttn} onPress={onPress}>
        <ImageBackground source={source} style={styles.imagenFondo}>
          <Text>{text}</Text> 
        </ImageBackground>  
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  bttn: {
    flex: 1,
    alignSelf: "center",
    width: 400,
    margin:10,
    marginBottom: 50,
    marginTop: 50,
    borderRadius: 100,
    borderWidth:1,
    borderColor: "#F0F8FF",
    overflow: "hidden",
  },
  imagenFondo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",

  }


});
