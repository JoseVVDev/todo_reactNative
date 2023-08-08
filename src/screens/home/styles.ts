import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D0D0D',
        flex: 1,
        flexDirection: 'row',
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoText1: {
        color: '#4ea8de'
    },
    logoText2: {
        color: '#8284fa'
    },
    tasksContainer: {
        backgroundColor: '#1a1a1a',
        flex: 4,
        padding: 24,
        flexDirection: 'row',
    },
    taskInputContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 55,
        marginTop: -50,
    },
    taskInput: {
        padding: 12,
        flex: 5,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#0d0d0d',
    },
    taskInputText: {},
    addTaskButton: {
        borderRadius: 6,
        marginLeft: 5,
        flex: 1,
        backgroundColor: '#1e6f9f',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addTaskButtonText: {}
});