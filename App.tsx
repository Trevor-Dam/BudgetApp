/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {createContext} from 'react';
///import {NavigationContainer} from 'react-navigation'
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Login from './pages/login';
import HomePage from 'pages/Home';

export const AuthContext = createContext<{
  userKey: number,
  name: string,
  surname: string,
  income: number,
  availableFunds: number
}>({
  userKey: 0,
  name: '',
  surname: '',
  income: 0,
  availableFunds: 0
});

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const [isAuth, setAuth] = React.useState<{
    userKey: number,
    name: string,
    surname: string,
    income: number,
    availableFunds: number
  }>({
    userKey: 0,
    name: '',
    surname: '',
    income: 0,
    availableFunds: 0
  });
  return (
    <AuthContext.Provider value={isAuth}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen component={HomePage} name="Home" />
        <Stack.Screen component={Login} name="login" />
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}

export default App;
