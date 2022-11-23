/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor: 'black',
        shadowColor: '#000000',
        shadowOffset: { width: -3, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
        height: 120,
        overflow: 'hidden',
    },
    image: {
        // aspectRatio: 1.8,
        width: '48%',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    textContainer: {
        width: '48%',
        paddingLeft: 10,
        paddingVertical: 10,
    },
    type: {
        fontSize: 13,
        fontWeight: '600',
        color: 'blue',
    },
    title: {
        fontSize: 16,
        fontWeight: '900',
        lineHeight: 20,
        flexShrink: 1,
    },
    prices: {
        fontSize: 17,
        // marginVertical: 10,
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    price: {
        fontWeight: 'bold',
    },
});

export default styles;
