import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Login';
import Tables from '../Screens/TabScreens/Tables';
import BottomTab from '../Components/BottomTab';
import SelectOrder from '../Screens/SelectOrder';
import OrderSummary from '../Screens/OrderSummary';
import Payment from '../Screens/Payment';

const Stack = createStackNavigator();

const HomeTabs=()=>{
  return(
    <>
    <BottomTab/>
    </>
  )
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectOrder"
          component={SelectOrder}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="OrderSummary"
          component={OrderSummary}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
