import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homeScreen from "./screens/HomeScreen";
import futbolScreen from "./screens/FutbolScreen";
import padelScreen from "./screens/PadelScreen";
import tenisScreen from "./screens/TenisScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function Navigation(){

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={homeScreen} options={{ headerShown: false}}/>
                <Stack.Screen name="futbol" component={futbolScreen} options={{headerShown: false}}/>
                <Stack.Screen name="tenis" component={tenisScreen} options={{headerShown: false}}/>
                <Stack.Screen name="padel" component={padelScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}