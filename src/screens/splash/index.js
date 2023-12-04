import React, { useEffect } from 'react'
import { View, Image, SafeAreaView } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Icons, Constants, CommonStyles } from '@common';
import styles from './style';

const Splash = (props) => {

    useEffect(() => {
        checkLogin()
    }, [])

    const checkLogin = () => {
        setTimeout(() => {
            props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: Constants.Screen.HomeStack }],
                })
            );
        }, 3000);
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={CommonStyles.backgroundPrimary} />
            <Image source={Icons.logo} style={styles.appLogo} resizeMode="contain" />
        </View>
    );
};

export default Splash;