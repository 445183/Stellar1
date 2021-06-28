import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DailyPicScreen from './screens/dailyPic'
import SpaceCraftScreen from './screens/spaceCraft'
import StarMapScreen from './screens/starMap'

const Stack=createStackNavigator();
  
export default class App extends React.Component{
  render(){
    return (
    <NavigationContainer initialRouteName='DailyPic' screenOptions={{headerShown:true}}>
      <Stack.Navigator>
        <Stack.Screen name='DailyPic' component={DailyPicScreen} />
        <Stack.Screen name='SpaceCraft' component={SpaceCraftScreen} />
        <Stack.Screen name='StarMap' component={StarMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}