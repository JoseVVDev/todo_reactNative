import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D0D0D',
        flex: 1,
        flexDirection: 'row',
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tasksContainer: {
        backgroundColor: '#1a1a1a',
        flex: 4,
        padding: 24,
        flexDirection: 'column',
    },
    taskInputContainer: {
        width: '100%',
        flexDirection: 'row',
        height: 55,
        marginTop: -50,
    },
    taskInput: {
        height: 55,
        flex: 5,
        padding: 12,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#0d0d0d',
        color: '#f2f2f2',
        fontFamily: 'Inter_400Regular'
    },
    taskInputText: {},
    addTaskButton: {
        height: 55,
        flex: 1,
        borderRadius: 6,
        marginLeft: 5,
        backgroundColor: '#1e6f9f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskCounterContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 32,
        marginBottom: 20
    },
    taskCounterText: {
        fontSize: 14,
    },
    taskCounterNumber: {
        backgroundColor: '#333333',
        color: '#d9d9d9',
        borderRadius: 13,
        paddingVertical: 1,
        paddingHorizontal: 10,
        marginLeft: 10,
        fontSize: 12,
        fontFamily: 'Inter_700Bold',
        alignSelf: 'center',
    },
    noTasks: {
        borderTopColor: '#333333',
        color: '#333333',
        borderTopWidth: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        flexWrap: 'nowrap'
    },
    noTasksText1: {
        marginTop: 24,
        color: '#808080',
        fontFamily: 'Inter_700Bold',
        fontSize: 14
    },
    noTasksText2: {
        color: '#808080',
        fontFamily: 'Inter_400Regular',
        fontSize: 14
    },
    hasTasks: {
        gap: 10
    },
    purpleText: {
        color: '#8284fa',
        fontFamily: 'Inter_700Bold' 
    },
    blueText: {
        color: '#4ea8de',
        fontFamily: 'Inter_700Bold' 
    }
});