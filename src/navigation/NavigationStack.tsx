import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '@Src/auth/screens/LoginScreen';
import { HomeScreen } from '@Src/home/screens/HomeScreen';

const Stack = createStackNavigator();

export const NavigationStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#4291f4',
            },
            headerTitleStyle: {
                color: 'white',
                alignSelf: 'center',
            },
        }}
    >
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
    </Stack.Navigator>
);
