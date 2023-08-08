import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import SVGImg from '../../assets/rocket.svg'

export function Home() {
    return (
        <>
            <View style={styles.container}>
                <SVGImg width={20} height={20} />
                <Text style={styles.logoText1}>
                    to<Text style={styles.logoText2}>do</Text>
                </Text>

            </View>
            <View style={styles.tasksContainer}>
                <View style={styles.taskInputContainer}>
                    <TextInput style={styles.taskInput}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#808080"
                    />
                    <TouchableOpacity style={styles.addTaskButton}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}