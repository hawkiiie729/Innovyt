import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tables from '../Screens/TabScreens/Tables';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Orders from '../Screens/TabScreens/Orders';
import Profile from '../Screens/TabScreens/Profile';
import Setting from '../Screens/TabScreens/Setting';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Tables"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          borderRadius: 20,
          position: 'absolute',
          borderColor: '#2F2D3B',
          height: responsiveHeight(7.5),
        },
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        
        // tabBarLabelStyle:{color:'red'}
      }}>
      <Tab.Screen
        name="Tables"
        component={Tables}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <>
              <Icon
                name="table-bar"
                color={focused ? '#cb2227' : 'grey'}
                size={35}
                style={{justifyContent: 'center', alignItems: 'center'}}
              />
              {/* {focused ? (
                <View
                  style={{
                    backgroundColor: '#cb2227',
                    height: 4,
                    width: 4,
                    borderRadius: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:responsiveHeight(0.2)
                    // marginLeft: responsiveWidth(3.8),
                  }}
                />
              ) : null} */}
            </>
          ),
          tabBarLabelStyle:{bottom:4,fontWeight:'600'},
          tabBarActiveTintColor:'#cb2227',
          tabBarInactiveTintColor:'grey'
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <>
              <Ionicons
                name="list-sharp"
                color={focused ? '#cb2227' : 'grey'}
                size={35}
                style={{justifyContent: 'center', alignItems: 'center'}}
              />
              {/* {focused ? (
                <View
                  style={{
                    backgroundColor: '#cb2227',
                    height: 4,
                    width: 4,
                    borderRadius: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:responsiveHeight(0.3)
                    // marginLeft: responsiveWidth(3.8),
                  }}
                />
              ) : null} */}
            </>
          ),
          tabBarLabelStyle:{bottom:4,fontWeight:'600'},
          tabBarActiveTintColor:'#cb2227',
          tabBarInactiveTintColor:'grey'
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <>
              <Icon
                name="person"
                color={focused ? '#cb2227' : 'grey'}
                size={34}
                style={{justifyContent: 'center', alignItems: 'center'}}
              />
              {/* {focused ? (
                <View
                  style={{
                    backgroundColor: '#cb2227',
                    height: 4,
                    width: 4,
                    borderRadius: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:responsiveHeight(0.2)
                    // marginLeft: responsiveWidth(3.8),
                  }}
                />
              ) : null} */}
            </>
          ),
          tabBarLabelStyle:{bottom:4,fontWeight:'600'},
          tabBarActiveTintColor:'#cb2227',
          tabBarInactiveTintColor:'grey'
        }}
      />
      {/* <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <>
              <Icon
                name="settings"
                color={focused ? '#cb2227' : 'grey'}
                size={34}
                style={{justifyContent: 'center', alignItems: 'center'}}
              />
             
            </>
          ),
          tabBarLabelStyle:{bottom:4,fontWeight:'600'},
          tabBarActiveTintColor:'#cb2227',
          tabBarInactiveTintColor:'grey'
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTab;
