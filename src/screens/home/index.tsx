import { styles } from "./styles";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import SVGImg from '../../assets/Logotodo.svg'
import Clipboard from '../../assets/Clipboard.svg'
import { useState } from "react";
import Antdesign from '@expo/vector-icons/AntDesign'
import { Task } from "../../components/Task";
import { generateUUID } from "../../utils/generateUUID";

interface taskProps {
    id: string,
    description: string,
    concluded: boolean
}

export function Home() {
    const [isFocus, setIsFocus] = useState(false)
    const [newDescription, setNewDescription] = useState('')
    const [tasks, setTasks] = useState<taskProps[]>([])

    function handleNewTask() {
        setTasks([
            ...tasks,
            {
                id: generateUUID(12),
                description: newDescription,
                concluded: false
            }
        ])
        setNewDescription('')
    }

    function handleConcludeTask(id: string) {
        setTasks(tasks.map(task => task.id === id ? { ...task, concluded: !task.concluded } : task))
    }

    function handleDeletetask(id: string) {
        setTasks(tasks.filter(task => task.id !== id))
    }
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
                        onChangeText={text => setNewDescription(text)}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        value={newDescription}
                    />
                    <TouchableHighlight
                        style={styles.addTaskButton}
                        //precisa do onPress para o underlayColor funcionar. Referência:(https://github.com/facebook/react-native/issues/14908)
                        onPress={() => { newDescription ? handleNewTask() : {} }}
                        underlayColor={'#4ea8de'}
                    >
                        <Antdesign name="pluscircleo" size={18} color='white' />
                    </TouchableHighlight>
                </View>
                <View style={styles.taskCounterContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.taskCounterText, styles.blueText]}>Criadas</Text>
                        <Text style={styles.taskCounterNumber}>{tasks.length}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.taskCounterText, styles.purpleText]}>Concluídas</Text>
                        <Text style={styles.taskCounterNumber}>{tasks.filter(task => task.concluded).length}</Text>
                    </View>
                </View>
                {tasks.length > 0
                    ?
                    <View style={styles.hasTasks}>
                        {
                            tasks.map((task) => {
                                return (
                                    <Task
                                        key={task.id}
                                        id={task.id}
                                        description={task.description}
                                        concluded={task.concluded}
                                        handleConcluded={handleConcludeTask}
                                        handleDelete={handleDeletetask}
                                    />
                                )
                            })
                        }
                    </View>
                    :
                    <View style={styles.noTasks}>
                        <Clipboard width={60} height={60} />
                        <Text style={styles.noTasksText1}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.noTasksText2}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>}
            </View>
        </>
    )
}