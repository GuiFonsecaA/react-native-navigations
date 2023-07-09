import React from "react";
import { View, Text } from "react-native";

export default function Customer({navigation}){
    return(
        <View>
            <Text>Joaquim</Text>
            <Text
            onPress={() => navigation.navigate('account')}>Dados Bancarios...</Text>
        </View>
    )
}