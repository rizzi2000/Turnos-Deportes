import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import Boton from "./components/boton";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "react-native-elements";
import foto from "./assets/fondo.jpg" 
import foto1 from "./assets/ch1.jpg" 




export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <View style={styles.container}>
      <Header containerStyle = {styles.containerNombreApp}
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Nombre App', style: { color: '#fff' } }}
      />
        <View style={styles.containerDeportes}>
          <ImageBackground source={foto} style={styles.containerDeportes}>
            <StatusBar style="auto" />
            <Boton onPress={() => {}} text="FUTBOL" />
            <StatusBar style="auto" />
            <Boton
              onPress={() => {
                alert("Abrir seccion de clubes con padel");
              }}
              text="PADEL"
            />
            <StatusBar style="auto" />
            <Boton source ={foto1} 
              onPress={() => {
                alert("Abrir seccion de clubes con tenis");
              }}
              text="TENIS"
            />
            </ImageBackground>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  containerNombreApp: {
    flex: 0.1,
    backgroundColor: "#7FFF00",
    alignItems: "center",
    justifyContent: "center",
  },

  image:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  containerDeportes: {
    flex: 1,
    backgroundColor: "#000",
    marginLeft: 0,
  },
  Futbol: {
    flex: 0.5,
    backgroundColor: "#CCC",
    alignItems: "center",
    justifyContent: "center",
  },
  Padel: {
    flex: 0.5,
    backgroundColor: "#A52A2A",
    alignItems: "center",
    justifyContent: "center",
  },
  Tenis: {
    flex: 0.5,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
