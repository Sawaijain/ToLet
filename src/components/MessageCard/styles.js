/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffae47',
        // height: '70%',
        alignSelf: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        paddingBottom: 20,
        shadowColor: '#000000',
        shadowOffset: { width: -3, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
        overflow: 'hidden',
        width: Dimensions.get('screen').width - 20,
    },
    box: {
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 20,
    },
    profileContainer: {
        backgroundColor: '#ffffff66',
        // opacity: 0.5,
        width: Dimensions.get('screen').width / 3.3,
        height: Dimensions.get('screen').height / 5.8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 75,
        overflow: 'hidden',

    },
    imageContainer: {
        backgroundColor: '#fff',
        width: 110,
        height: 110,
        alignItems: 'center',
        opacity: 1,
        justifyContent: 'center',
        borderRadius: 55,
        overflow: 'hidden',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    textContainer: {
        marginTop: 20,
        marginHorizontal: 15,
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Roboto',
        color: '#fff',
        alignSelf: 'flex-start',
    },
    footerContainer: {
        marginHorizontal: 15,
        alignItems: 'flex-start',
    },
    footerText: {
        fontSize: 16,
        color: '#fff',
    },
    btnContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginHorizontal: 20,
        marginTop: 20,
    },
    btn: {
        backgroundColor: '#7941f2',
        // marginHorizontal: 10,
        marginLeft: 20,
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 6,
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }

});

export default styles;
