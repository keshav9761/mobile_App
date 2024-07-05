
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import ItemDetail from './Pages/ItemDetail';
import ItemList from './Pages/ItemList';

const Stack = createStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={ItemList} />
        <Stack.Screen name='Item' component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

