import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 64,
        borderWidth: 1,
        borderColor: '#333333',
        backgroundColor: '#262626',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioStyle: {
        height: 24,
        width: 24,
        borderWidth: 2,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    radioStyleNotConcluded: {
        borderColor: '#4EA8DE'
    },
    radioStyleConcluded: {
        borderColor: '#5E60CE',
        backgroundColor: '#5E60CE'
    }
})