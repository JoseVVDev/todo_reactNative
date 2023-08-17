import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import Antdesign from '@expo/vector-icons/AntDesign'

export function Task() {
    const [pressed, setPressed] = useState(false)
    return (
        <View style={[styles.container, pressed ? {borderColor: '#262626'} : {}]}>
            <TouchableHighlight
                style={[styles.radioStyle, pressed ? styles.radioStyleConcluded : styles.radioStyleNotConcluded]}
                onPress={() => setPressed(!pressed)}
                underlayColor={pressed ? '#8284FA' : '#1E6F9F'}>
                {pressed ? <Antdesign name="check" size={12} color='white' /> : <Text></Text>}
            </TouchableHighlight>
        </View>
    )
}