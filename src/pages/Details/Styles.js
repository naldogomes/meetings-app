import { StyleSheet } from 'react-native'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 23
    },

    image: {
        flex: 1,
        height: 250,
        marginTop: 20,
        resizeMode: 'contain'
    },

    dateView: {
        flexDirection: 'row',
        marginTop: 10
    },
    
    date: {
        fontSize: 17
    },

    time: {
        fontSize: 16,
        marginLeft: 20
    },

    objective: {
        marginTop: 10,
        fontSize: 17,
        textAlign: 'justify'
    },

    employeesTitle: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },

    employees: {
        fontSize: 17,
    },
    
    buttonsView: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 30,
    },

    buttonEdit: {
        flex: 1,
        height: 50,
        backgroundColor: '#2D816B',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRightWidth: 0.5,
        borderColor: '#FFF'
    },

    buttonDelete: {
        flex: 1,
        height: 50,
        backgroundColor: '#F71B00',
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