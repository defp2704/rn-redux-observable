import React from 'react';

import {
    Platform,
    StyleSheet,
    TextInput,
} from 'react-native';

import { AppTextInput } from './AppTextInput';

interface Props {
    placeholder: string;
    onChangeText: () => void;
};

export const EmailTextInput = ({ placeholder, onChangeText }: Props) => (
    <AppTextInput
        title={'Email'}
    >
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={'gray'}
            keyboardType={'email-address'}
            style={styles.textInput}
            onChangeText={onChangeText}
            numberOfLines={1}
        />
    </AppTextInput>
);

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        ...Platform.select({
            web: {
                outlineStyle: 'none',
                outlineWidth: 0,
                outlineColor: 'transparent',
            },
        }),
    },
});
