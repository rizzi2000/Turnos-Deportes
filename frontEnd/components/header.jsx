import { View, Text, StyleSheet } from "react-native";
import MenuHamburguesa from "./menuHamburguesa";

export default function Header(){
    return (
        <View style={styles.header}>
            <MenuHamburguesa/>
            <Text>Nombre App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 20,
        backgroundColor: ' #8BD8E6'
    }
  });
  
