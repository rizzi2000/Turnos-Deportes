import { View, Image, StyleSheet, Text } from "react-native";
import register from "../assets/Register.png"

export default function MenuDesplegado(){
    return (
        <View style={styles.container}>
            <Input src={register} txt='Register'/>
        </View>
    );
}

function Input({ src, txt }){
    return (
        <View style={styles.inputContainer}>
            <Image source={src}/>
            <Text style={styles.inputText}>{txt}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderColor: '#a38b8b solid 1px',
        // borderBlockColor: '#fff',
        // padding: 10
    },
    inputContainer: {
        borderColor: '#fff',
        borderWidth: 5,
        padding: 20
    },
    inputText: {
        color: '#fff'
    }
  
  });
  