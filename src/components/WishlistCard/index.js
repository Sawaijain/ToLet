/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const WishlistCard = ({ data }) => {
    const navigation = useNavigation();
    const { theme } = useSelector(state => state.themeReducer);

    return (
        <Pressable style={[styles.container, theme ? { backgroundColor: '#3F3351' } : null]}
            onPress={() => navigation.navigate('DescriptionScreen')}
        >
            <Image source={data.uri ? { uri: data.image } : require('../../assets/images/placeholder.png')} style={styles.image} resizeMode="contain" />
            <View style={styles.textContainer}>
                <View >
                    <Text
                        numberOfLines={2}
                        style={[styles.title, theme ? { color: '#fff' } : null]}>{data.title}</Text>
                </View>

                <Text style={[styles.prices, theme ? { color: '#fff' } : null]}>
                    <Text style={[styles.oldPrice, theme ? { color: '#fff' } : null]}>${data.oldPrice}</Text>
                    <Text style={[styles.price, theme ? { color: '#fff' } : null]}>  ${data.newPrice} </Text>
                    / night
                </Text>
                <Text style={[styles.bedrooms, theme ? { color: '#fff' } : null]}>
                    {data.bed} bed {data.bedroom} bedroom
                </Text>
                <Text style={[styles.type, theme ? { color: '#f0f0f0' } : null]}>&gt;&gt; {data.type}</Text>
            </View>
        </Pressable>
    );
};

export default WishlistCard;
