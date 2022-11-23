/* eslint-disable prettier/prettier */

import React, { useState } from 'react';

import { Modal, Text, View, TouchableOpacity, Pressable, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

export default function CustomAlert({
    displayMode,
    displayMsg,
    visibility,
    dismissAlert,
    setMessage,
    message
}) {
    const [error, setError] = useState('');
    return (
        <View>
            <Modal
                visible={visibility}
                animationType={'fade'}
                transparent={true}
            >
                <View
                    style={styles.container}>
                    <View
                        style={styles.box}>
                        <Pressable style={{ alignSelf: 'flex-end', paddingRight: 10, marginTop: 5, }}
                            onPress={() => {
                                setError('');
                                dismissAlert(false);
                            }}
                        >
                            <Entypo
                                name="cross"
                                color={'#000'}
                                size={30}
                            />
                        </Pressable>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginHorizontal: 30 }}>
                            {displayMode === 'success' ? (
                                <>
                                    <Ionicons
                                        name="checkmark-done-circle"
                                        color={'green'}
                                        size={80}
                                    />
                                </>
                            ) : null}
                            {
                                displayMode === "failed" ? (
                                    <>
                                        <MaterialIcons
                                            name="error"
                                            color={'red'}
                                            size={30}
                                            style={{ marginTop: 3, marginRight: 5, }}
                                        />
                                    </>
                                ) : null
                            }
                            {
                                displayMode === 'accept' ? (
                                    <>
                                        <Ionicons
                                            name="checkmark-done"
                                            color={'green'}
                                            size={40}
                                        />
                                    </>
                                )
                                    : null
                            }
                            {
                                displayMode === 'denied' ? (
                                    <>
                                        <MaterialIcons
                                            name="cancel"
                                            color={'red'}
                                            size={30}
                                            style={{ marginTop: 3, }}
                                        />
                                    </>
                                )
                                    : null
                            }
                            <Text style={{ fontSize: 18, marginTop: 5, alignSelf: 'center', marginLeft: 5, }}>{displayMsg}</Text>
                        </View>
                        {
                            displayMode === 'accept' ? (
                                <>
                                    <Text style={[styles.textHeading]}>Message (Optional)</Text>
                                    <View style={styles.action}>
                                        <TextInput
                                            placeholder="Message (Specify time for meeting)"
                                            placeholderTextColor="#666666"
                                            style={[styles.textInput]}
                                            multiline={true}
                                            onChangeText={(text) => {
                                                setMessage(text);
                                                setError('');
                                            }}
                                        />
                                    </View>
                                </>
                            )
                                : null
                        }
                        {
                            displayMode === 'denied' ? (
                                <>
                                    <Text style={[styles.textHeading]}>Message (Optional)</Text>
                                    <View style={styles.action}>
                                        <TextInput
                                            placeholder="Message (Specify time for meeting)"
                                            placeholderTextColor="#666666"
                                            style={[styles.textInput]}
                                            multiline={true}
                                            onChangeText={(text) => {
                                                setMessage(text);
                                                setError('');
                                            }}
                                        />
                                    </View>
                                </>
                            )
                                : null
                        }
                        {
                            !!error ?
                                <Text style={{ marginHorizontal: 15, color: 'red', alignSelf: 'flex-start', marginTop: 5 }}>{error}</Text>
                                : null
                        }
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                if (message === '') {
                                    setError('Please enter message');
                                    return;
                                }
                                dismissAlert(false);
                            }}
                            style={[styles.btn, { backgroundColor: displayMode === "denied" ? '#f26389' : '#755ED2' }]}>
                            <Text style={{ color: 'white', margin: 10, fontWeight: 'bold' }}>
                                {
                                    displayMode === "accept" ? 'Accept' : null
                                }
                                {
                                    displayMode === 'denied' ? 'Denied' : null
                                }
                                {
                                    displayMode === 'success' ? 'Ok' : null
                                }
                                {
                                    displayMode === 'failed' ? 'Ok' : null
                                }
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal >
        </View >
    );
}