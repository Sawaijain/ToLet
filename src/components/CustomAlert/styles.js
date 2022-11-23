/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        alignItems: 'center',
        backgroundColor: 'white',
        // height: 250,
        width: '93%',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 7,
        elevation: 10,
    },
    btn: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'absolute',
        marginTop: 20,
        backgroundColor: '#755ED2',
        borderColor: '#ddd',
        borderBottomWidth: 0,
        borderRadius: 5,
        bottom: 0,
        marginBottom: 10,
    },
    action: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        marginHorizontal: 10,
        justifyContent: 'center',
        borderRadius: 7,
        borderColor: '#f29348',
        borderWidth: 1,
        shadowColor: '#000000',
        shadowOffset: { width: -3, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
        elevation: 4,
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 16,
    },
    textHeading: {
        color: '#7941f2',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5,
        alignSelf: 'flex-start',
        marginHorizontal: 10,
    },
});

export default styles;