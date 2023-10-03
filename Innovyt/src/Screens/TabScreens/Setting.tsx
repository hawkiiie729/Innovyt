import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');

// console.log('h & w', height, width);

const Setting = () => {
  const navigation = useNavigation();
  return (
    <View style={{height: height, width: width}}>
      <View>
        {/* back icon */}
        <View
          style={{marginTop: height * 0.03, marginHorizontal: width * 0.03}}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={30} color="#cb2227" />
          </TouchableOpacity>
        </View>
        {/* Avatar ,Name,logout btn etc */}
        <View
          style={{
            flexDirection: 'column',
            alignSelf: 'center',
            marginTop: height * 0.14,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../Assets/Avatar.png')}
            style={{height: height * 0.1175, width: width * 0.2624}}
          />
          {/* name and post */}
          <View style={{marginTop: height * 0.01, alignItems: 'center'}}>
            <Text
              style={{
                color: '#242424',
                fontWeight: '800',
                fontSize: responsiveFontSize(3),
              }}>
              Sudhanshu Mishra
            </Text>
            <Text
              style={{
                color: '#696969',
                fontWeight: '500',
                fontSize: responsiveFontSize(2.2),
                marginTop: height * 0.005,
              }}>
              (Head Waiter)
            </Text>
          </View>
          {/* Log out Btn */}
          <TouchableOpacity
            style={{marginTop: height * 0.04}}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <View
              style={{
                height: height * 0.05,
                width: width * 0.9,
                marginHorizontal: width * 0.05,
                borderWidth: 1,
                borderColor: '#FECA3F',
                borderRadius: 10,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Ionicons name="exit-outline" size={26} color="#cb2227" />
                <Text
                  style={{
                    color: '#242424',
                    fontWeight: '900',
                    fontSize: responsiveFontSize(1.8),
                    marginLeft: width * 0.01,
                  }}>
                  Log Out
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Setting;
