/* eslint-disable prettier/prettier */
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

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
        width: 100,
        height: 100,
        // borderRadius: 150,
        alignSelf: "center",
        position: 'relative',
        marginTop: 5,
    },
    image: {
        flex: 1,
        height: 100,
        width: 100,
        borderRadius: 80,
        // marginTop: 20,
        // elevation: 4,
        alignSelf: 'flex-end',
        backgroundColor: '#fff',
    },
    infoContainer: {
        alignSelf: 'center',
    },
    plusIcon: {
        // alignSelf: 'flex-end',
        position: 'absolute',
        right: Dimensions.get("screen").width / 2.7,
        top: Dimensions.get("screen").height / 6.1,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 25,
        // paddingVertical: 5,
        paddingBottom: 8,
        borderBottomColor: "rgba(0,0,0,0.2)",
        borderBottomWidth: 1,
    },
    title: {
        marginTop: 40,
        marginLeft: 20,
    },
    button: {
        alignItems: 'center',
        marginHorizontal: 20,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 25,
    },
    signUp: {
        color: '#7941f2',
        textDecorationLine: 'underline',
        marginLeft: 5,
    },

});

export default styles;