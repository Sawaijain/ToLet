/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, Image, Pressable, ImageBackground, Alert } from 'react-native';
import styles from './styles';
import CustomAlert from '../CustomAlert/index';
import { useSelector } from 'react-redux';

const MessageCard = () => {

    const [displayMessage, setDisplayMessage] = useState('');
    const [displayMode, setDisplayMode] = useState('');
    const [message, setMessage] = useState('');
    const [showDonationSuccessPopup, setShowDonationSuccessPopup] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const { theme } = useSelector(state => state.themeReducer);

    const handleAccept = () => {
        setDisplayMessage('Thanks for Accepting the Message!');
        setDisplayMode('accept');
        setShowPopup(true);
    }
    const handleDenied = () => {
        setDisplayMessage('Please specify the reason!');
        setDisplayMode('denied');
        setShowPopup(true);
    }
    return (
        <>
            <CustomAlert
                displayMode={displayMode}
                displayMsg={displayMessage}
                visibility={showPopup}
                dismissAlert={setShowPopup}
                setMessage={setMessage}
                message={message}
            />
            <ImageBackground style={styles.container} source={{ uri: 'https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b3JhbmdlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' }} resizeMode="cover">
                <View style={styles.box}>
                    <View style={styles.profileContainer}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhY2Vob2xkZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={styles.image} resizeMode="cover" />
                        </View>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Its</Text>
                        <Text style={styles.text}>Shubham Patidar's</Text>
                        <Text style={styles.text}>Request!</Text>
                    </View>
                </View>
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>for your House located at <Text style={[styles.footerText, { fontWeight: 'bold', color: '#fff' }]}>Hardevlala Chowk Nichala Mohalla Dasai, Dhar (M.P)</Text></Text>
                </View>
                <View style={styles.btnContainer}>
                    <Pressable style={[styles.btn, { backgroundColor: '#f26389' }]}
                        onPress={handleDenied}
                    >
                        <Text style={styles.btnText}>Denied</Text>
                    </Pressable>
                    <Pressable style={styles.btn}
                        onPress={handleAccept}
                    >
                        <Text style={styles.btnText}>Accept</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </>
    )
}

export default MessageCard;
