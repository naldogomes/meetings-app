import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        margin: 15,
    },

    content: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 15
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },

    objective: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
        lineHeight: 18
    },

    dateView: {
        flexDirection: 'row',
        marginTop: 5
    },

    date: {
        fontSize: 14
    },

    time: {
        fontSize: 14,
        marginLeft: 20
    },
});