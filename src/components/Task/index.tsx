import { View, Text, TouchableHighlight } from "react-native";
import { styles, radio } from "./styles";
import { useState } from "react";
import Antdesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'

export function Task() {
    const [pressed, setPressed] = useState(false)
    const [pressedRemove, setPressedRemove] = useState(false)
    return (
        <View style={[styles.container, pressed ? { borderColor: '#262626' } : {}]}>
            <View style={styles.radioContainer}>
                <TouchableHighlight
                    style={[radio.style, pressed ? radio.concluded : radio.notConcluded]}
                    onPress={() => setPressed(!pressed)}
                    underlayColor={pressed ? '#8284FA' : '#1E6F9F'}>
                    {pressed ? <Antdesign name="check" size={12} color='white' /> : <Text></Text>}
                </TouchableHighlight>
            </View>
            <Text style={[styles.textContainer, pressed ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: '#808080'} : {}]} numberOfLines={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed bibendum magna. In congue consequat lectus a venenatis. Nunc rutrum luctus erat a fermentum. Donec at ornare orci.
            </Text>
            <View style={styles.removeContainer}>
                <TouchableHighlight
                    style={styles.removeButton}
                    onPress={() => { }}
                    onPressIn={() => setPressedRemove(!pressedRemove)}
                    onPressOut={() => setPressedRemove(!pressedRemove)}
                    underlayColor='#333333'
                >
                    <Ionicons name="trash-outline" size={20} color={pressedRemove ? '#e25858' : '#808080'} />
                </TouchableHighlight>
            </View>
        </View>
    )
}