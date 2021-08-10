import React from 'react';

import {
    Button,
    Text,
    View,
} from 'react-native';

import { homeGetAction } from '@Home/state/homeActions';
import {
    useAppDispatch,
    useAppSelector,
} from '@Hooks/appHooks';
import { AppButton } from '@Src/components/AppButton';
import { EmailTextInput } from '@Src/components/EmailTextInput';

export const HomeScreen = () => {
    const dispatch = useAppDispatch();
    const { id } = useAppSelector(({ homeReducer }) => homeReducer);

    const handleOnPress = () => {
        dispatch(homeGetAction(id + 1));
    };

    return (
        <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Text>{`HomeScreen ${id}`}</Text>
            <Button
                title="Add one more"
                onPress={handleOnPress}
            />
            <EmailTextInput
                placeholder={'Email'}
                onChangeText={() => { }}
            />
            <AppButton
                title="Sign In"
                handleOnChange={() => { }}
            />
        </View>
    );
};
