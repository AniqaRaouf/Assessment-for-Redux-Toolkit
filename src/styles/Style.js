import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#82c2b8'
    },
    input: {
        width: '100%',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#283836',
        borderRadius: 5,
    },
    btnStyle: {
        backgroundColor: '#11544a',
        width: wp(80),
        padding: 10,
        borderRadius: 5
    },
    displayText: {
        fontSize: 20
    }
});

export default styles;
