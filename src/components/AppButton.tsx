import React from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface Props {
    title: string;
    handleOnChange: () => void;
};

export const AppButton = ({ title, handleOnChange }: Props) => (
    <View style={styles.container}>
        <TouchableOpacity
            style={styles.button}
            onPress={handleOnChange}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#2196f3',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: '#ffffff',
    },
});
