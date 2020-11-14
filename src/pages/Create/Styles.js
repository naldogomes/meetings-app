import { StyleSheet } from 'react-native'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20
    },

    title: {
        marginTop: 15,
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },

    input: {
        borderWidth: 1
    },

    buttonCreate: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        height: 50,
        backgroundColor: '#0E680F',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderLeftWidth: 0.5,
        borderColor: '#FFF'
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    
});