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
// import { Header } from "react-native-elements";
import { useFonts } from 'expo-font';
import fondo from "./assets/fondo.jpg" 
import fondoFutbol from "./assets/fondofutbol.jpg"
import fondoPadel from "./assets/fondoPadel.jpg"
import fondoTenis from "./assets/fondoTenis.jpg"
import MenuHamburguesa from "./components/menuHamburguesa";
import Header from "./components/header";

export default function App() {
  const Stack = createNativeStackNavigator();
  // const [fontsLoaded] = useFonts({
  //   Anta: require("./assets/fonts/Anta-Regular.ttf")
  // })
  return (
    <>
      <View style={styles.container}>
      {/* <Header containerStyle = {styles.containerNombreApp}
        leftComponent={<MenuHamburguesa/>}
        centerComponent={{ text: 'Nombre App', style: { fontFamily: "Anta", color: '#fff' } }}
      /> */}

      <Header />
      {/* <MenuHamburguesa/> */}
        <View style={styles.containerDeportes}>
          <ImageBackground source={fondo} style={styles.containerDeportes}>
            <StatusBar style="auto" />
            <Boton 
              onPress={() => {}} text="FUTBOL" source={fondoFutbol} />
            <StatusBar style="auto" />
            <Boton
              onPress={() => {
                alert("Abrir seccion de clubes con padel");
              }}
              text="PADEL" source={fondoPadel}
            />
            <StatusBar style="auto" />
            <Boton 
              onPress={() => {
                alert("Abrir seccion de clubes con tenis");
              }}
              text="TENIS" source={fondoTenis}
              
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
    backgroundColor: "#000",
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
