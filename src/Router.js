import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Home } from './screens';
import { Constants } from '@common';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName={Constants.Screen.Home} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Constants.Screen.Home} component={Home} />
        </Stack.Navigator>
    );
}

const AppStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={Constants.Screen.Splash} screenOptions={{ headerShown: false }} >
            <Stack.Screen name={Constants.Screen.Splash} component={Splash} />
            <Stack.Screen name={Constants.Screen.HomeStack} component={HomeStack} />
        </Stack.Navigator>
    );
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppStackNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;