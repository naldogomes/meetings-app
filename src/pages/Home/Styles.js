import { StyleSheet } from 'react-native'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    top: {
        flex: 1,
        alignItems: 'center',
    },

    fabView: {
        zIndex: 1,
        position: 'absolute',
        right: 0,
        bottom: 0,
    },

    list: {
        marginBottom: 50
    },

    fab: {
        zIndex: 1
      },
});