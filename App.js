import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import LogoTitle from './screens/LogoTitle';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTitle: (props) => <LogoTitle {...props} />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
