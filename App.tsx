import 'react-native-gesture-handler';

import * as React from 'react';

import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack } from '@Src/navigation/NavigationStack';
import { store } from '@Src/store';

const App = () => (
    <Provider store={store}>
        <NavigationContainer>
            <StatusBar
                backgroundColor={'transparent'}
                translucent
                barStyle='light-content'
            />
            <NavigationStack />
        </NavigationContainer>
    </Provider>
);

export default App;
