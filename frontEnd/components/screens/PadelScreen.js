import React from "react";
import{View, Text, StyleSheet, TouchableOpacity,} from "react-native";
import { Button } from "react-native-elements";

export default function PadelScreen({navigation}){
    return (
        <View style={styles.container}>
            <Button  onPress={() =>  navigation.navigate('home')}
             title="Ir a la pantalla principal" />
           < Text>
                PADEL SCREEN
            </Text>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      fontSize:30,
      textAlign:"center",
      marginTop: "20%"

    }})