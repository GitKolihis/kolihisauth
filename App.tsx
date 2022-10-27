import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Google from './screens/Google';
import Facebook from './screens/Facebook';
import Home from './screens/Home';
import { RootStackParamList } from './screens/types';

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false}}>
        <RootStack.Screen name='Home' component={Home} />
        <RootStack.Screen name="Google" component={Google} />
        <RootStack.Screen name='Facebook' component={Facebook} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
