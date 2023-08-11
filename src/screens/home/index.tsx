import { styles } from "./styles";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import SVGImg from '../../assets/rocket.svg'
import { useState } from "react";

export function Home() {
    const [isFocus, setIsFocus] = useState(false)
     return (
        <>
            <View style={styles.container}>
                <SVGImg width={20} height={20} />
                <Text style={[styles.blueText]}>
                    to<Text style={styles.purpleText}>do</Text>
                </Text>

            </View>
            <View style={styles.tasksContainer}>
                <View style={styles.taskInputContainer}>
                    <TextInput style={[styles.taskInput, isFocus ? {borderColor: '#5E60CE'} : {borderColor: '#0d0d0d'}]}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#808080"
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                    />
                    <TouchableOpacity style={styles.addTaskButton}>
                        <Text style={styles.addTaskButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.taskCounterContainer}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.taskCounterText, styles.blueText]}>Criadas</Text>
                        <Text style={styles.taskCounterNumber}>1</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.taskCounterText, styles.purpleText]}>Concluídas</Text>
                        <Text style={styles.taskCounterNumber}>0</Text>
                    </View>
                </View>
            </View>
        </>
    )
}