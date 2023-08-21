import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#333333',
        backgroundColor: '#262626',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    radioContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    textContainer: {
        flex: 5,
        fontFamily: 'Inter_400Regular',
        color: '#f2f2f2'
    },
    removeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    removeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderRadius: 5,
    }
})

export const radio = StyleSheet.create({
    style: {
        height: 24,
        width: 24,
        borderWidth: 2,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notConcluded: {
        borderColor: '#4EA8DE'
    },
    concluded: {
        borderColor: '#5E60CE',
        backgroundColor: '#5E60CE'
    }
})