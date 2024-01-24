import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "react-native";
import Boton from "./components/boton";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerNombreApp}>
          <StatusBar style="auto" />
          <Text>NOMBRE DE LA APP</Text>
        </View>
        <View style={styles.containerDeportes}>
          <View style={styles.Futbol}>
            <StatusBar style="auto" />
            <Boton onPress={() => {}} text="FUTBOL" />
          </View>
          <View style={styles.Padel}>
            <StatusBar style="auto" />
            <Boton
              onPress={() => {
                alert("Abrir seccion de clubes con padel");
              }}
              text="PADEL"
            />
          </View>
          <View style={styles.Tenis}>
            <StatusBar style="auto" />
            <Boton
              onPress={() => {
                alert("Abrir seccion de clubes con tenis");
              }}
              text="TENIS"
            />
          </View>
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
    flex: 0.2,
    backgroundColor: "#7FFF00",
    alignItems: "center",
    justifyContent: "center",
  },
  containerDeportes: {
    flex: 0.8,
    backgroundColor: "#CCC",
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
