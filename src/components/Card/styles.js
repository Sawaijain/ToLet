/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // margin: 10,
        borderRadius: 10,
        // padding: 10,
        shadowColor: '#000000',
        shadowOffset: { width: -3, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
        width: Dimensions.get('window').width - 20,
        flexDirection: 'column',
        alignSelf: 'center',
        backgroundColor: '#fff',
        marginVertical: 10,
        overflow: 'hidden',
        // alignItems: 'center',
    },
    image: {
        // width: Dimensions.get('window').width - 30,
        width: "100%",
        aspectRatio: 1.9,
        // resizeMode: 'cover',
        // borderRadius: 10,
    },
    textContainer: {
        paddingHorizontal: 15,
        paddingVertical: 4,
    },
    bedrooms: {
        // marginVertical: 10,
        color: '#5b5b5b',
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
    },
    prices: {
        fontSize: 18,
        marginVertical: 10,
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    price: {
        fontWeight: 'bold',
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
    },
    wishlistContainer: {
        backgroundColor: '#fff',
        marginRight: 10,
        marginTop: 10,
        padding: 10,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        alignSelf: 'flex-end',
        opacity: 0.9,
    },
    wishlistIcon: {
        opacity: 1,
    },
});

export default styles;
