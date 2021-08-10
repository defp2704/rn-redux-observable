import React from 'react';

import {
    Button,
    Text,
    View,
} from 'react-native';

import {
    useAppDispatch,
    useAppSelector,
} from '@Src/hooks/appHooks';

import { authenticateAction } from '../state/authenticateActions';

export const LoginScreen = () => {
    const { isLogged, token, isLoading } = useAppSelector(
        ({ authenticateReducer }) => authenticateReducer,
    );
    const dispatch = useAppDispatch();

    const handleOnPress = () => {
        dispatch(authenticateAction({
            email: 'asd@123.com',
            password: '123',
        }));
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#4291f4', padding: 10 }}>
            <Text>Login</Text>
            <Button
                title={'Login'}
                onPress={handleOnPress}
            />
            <Text>
                {
                    JSON.stringify({ isLogged, token, isLoading }, null, 2)
                }
            </Text>
        </View>
    );
};
