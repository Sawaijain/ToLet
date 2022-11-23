/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions, Platform } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "rgba(0,0,0,1)",
    },
    profileImage: {
        width: 150,
        height: 150,
        marginTop: 10,
        // borderRadius: 150,
        alignSelf: "center",
        position: 'relative',
        // marginTop: 5,
    },
    image: {
        flex: 1,
        height: 150,
        width: 150,
        borderRadius: 100,
        // marginTop: 20,
        // elevation: 4,
        alignSelf: 'flex-end',
        backgroundColor: '#fff',
    },
    plusIcon: {
        // alignSelf: 'flex-end',
        position: 'absolute',
        right: Dimensions.get("screen").width / 4,
        top: Dimensions.get("screen").height / 5,
        padding: '3%',
    },
    infoContainer: {
        alignSelf: 'center',
    },
    text_footer: {
        color: '#7941f2',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    footer: {
        flex: 2,
        backgroundColor: "#F5F5F5",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 50,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 10,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    bottomContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    signUp: {
        color: '#7941f2',
        textDecorationLine: 'underline',
        marginLeft: 5,
    },
});

export default styles;
