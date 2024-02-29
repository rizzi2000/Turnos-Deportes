import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MenuDesplegado from './menuDesplegado';

export default function MenuHamburguesa(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={{color: '#fff'}}>
                <Entypo 
                    name='menu'
                    onPress={() => setIsOpen(!isOpen)}  
                    backgroundColor="#3b5998"
                    size={30}
                />
            </Text>
            {
                isOpen 
                && <MenuDesplegado />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderColor: '#a38b8b solid 1px',
        // borderBlockColor: '#fff',
        // padding: 10
        // position: 'relative'
    }
  });
  




