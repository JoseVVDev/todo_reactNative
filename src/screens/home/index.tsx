import { styles } from "./styles";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import SVGImg from '../../assets/Logotodo.svg'
import Clipboard from '../../assets/Clipboard.svg'
import { useState } from "react";
import Antdesign from '@expo/vector-icons/AntDesign'
import { Task } from "../../components/Task";

export function Home() {
    const [isFocus, setIsFocus] = useState(false)
    const [tasks, setTasks] = useState(['a'])

    return (
        <>
            <View style={styles.container}>
                <SVGImg width={150} height={150} />
            </View>
            <View style={styles.tasksContainer}>
                <View style={styles.taskInputContainer}>
                    <TextInput style={[styles.taskInput, isFocus ? { borderColor: '#5E60CE' } : { borderColor: '#0d0d0d' }]}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#808080"
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                    />
                    <TouchableHighlight
                        style={styles.addTaskButton}
                        //precisa do onPress para o underlayColor funcionar. Referência:(https://github.com/facebook/react-native/issues/14908)
                        onPress={() => { }}
                        underlayColor={'#4ea8de'}
                    >
                        <Antdesign name="pluscircleo" size={18} color='white' />
                    </TouchableHighlight>
                </View>
                <View style={styles.taskCounterContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.taskCounterText, styles.blueText]}>Criadas</Text>
                        <Text style={styles.taskCounterNumber}>1</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.taskCounterText, styles.purpleText]}>Concluídas</Text>
                        <Text style={styles.taskCounterNumber}>5</Text>
                    </View>
                </View>
                {tasks.length > 0
                    ?
                    <Task/>
                    :
                    <View style={styles.noTasks}>
                        <Clipboard width={60} height={60}/>
                        <Text style={styles.noTasksText1}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.noTasksText2}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>}
            </View>
        </>
    )
}