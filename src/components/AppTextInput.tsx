import React from 'react';

import {
    StyleProp,
    StyleSheet,
    Text,
    View,
    ViewStyle,
} from 'react-native';

interface Props {
    title?: string;
    children: JSX.Element;
    containerStyle?: StyleProp<ViewStyle>;
    textInputContainerStyle?: StyleProp<ViewStyle>;
};

export const AppTextInput = ({ title, children, containerStyle, textInputContainerStyle }: Props) => (
    <View style={[
        styles.container,
        containerStyle as any,
    ]}>
        {
            title && (
                <Text style={styles.title}>{title}</Text>
            )
        }
        <View style={[
            styles.textInputContainer,
            textInputContainerStyle as any,
        ]}>
            {children}
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    title: {
        color: 'white',
        fontSize: 18,
        marginBottom: 5,
    },
    textInputContainer: {
        backgroundColor: 'white',
        borderRadius: 5,
        height: 45,
        paddingHorizontal: 10,
    },
});
