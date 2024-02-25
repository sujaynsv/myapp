
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Home'
import Deatailscreen from './Details'
import Inventory from './Inventory'
import {Info} from './Info'
import { SafeAreaView, StatusBar, View } from 'react-native';
import Scanpage from './AddItems'
const Stack = createNativeStackNavigator();
import Login from './Login'
import Barscan from './Barscan'
import UserProfileView from './UserProfileView'
import Recipies from './Recipies'
import Recipes from './Recipies';
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Inventory" component={Inventory} />
        <Stack.Screen name="Scanpage" component={Scanpage} />
        <Stack.Screen name="Barscan" component={Barscan} />
        <Stack.Screen name="Recipies" component={Recipes} />
        <Stack.Screen name="UserProfileView" component={UserProfileView} />
        
        {/* <Stack.Screen name="Details" component={Deatailscreen} /> */}
        {/* <Stack.Screen name="Details" component={Deatailscreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    
//     /** Hello**/
//    <SafeAreaView>
//     <StatusBar/>
//     <Inventory></Inventory>
//    </SafeAreaView>
  );
};

export default MyStack



  