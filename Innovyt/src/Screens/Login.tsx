import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomTextInput from '../Components/CustomTextInput';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [isFocused, setIsFocused] = useState(false);
  const navigation = useNavigation();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const borderColor = isFocused ? 'blue' : 'gray';

  return (
    <View
      style={{height: responsiveHeight(100), marginTop: responsiveHeight(4)}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../Assets/Icon1.png')}
          style={{height: responsiveHeight(5), width: responsiveWidth(10)}}
        />
        <Text
          style={{
            color: 'black',
            fontWeight: '900',
            fontSize: responsiveFontSize(4),
          }}>
          Take <Text style={{color: '#cb2227', fontWeight: '900'}}>Order</Text>
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: responsiveHeight(7)}}>
        <Text
          style={{
            color: 'black',
            fontWeight: '900',
            fontSize: responsiveFontSize(4),
          }}>
          Welcome Back!
        </Text>
        <Text style={{color: '#919eab', fontWeight: '500'}}>
          Please log in to continue
        </Text>
      </View>
      {/* input fields */}
      <View style={{marginTop: responsiveHeight(7)}}>
        <CustomTextInput place="Username" keyBoardType="default" />
        <CustomTextInput place="password" keyBoardType="visible-password" />
      </View>
      {/* button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HomeTabs');
        }}>
        <View
          style={{
            backgroundColor: '#feca3f',
            width: responsiveWidth(90),
            height: responsiveHeight(6),
            marginHorizontal: responsiveWidth(5),
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: '900',
              textAlign: 'center',
              fontSize: responsiveFontSize(2),
            }}>
            Login
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: responsiveHeight(1),
          marginRight: responsiveWidth(6),
        }}>
        <Text style={{color: '#cb2227', textAlign: 'right', fontWeight: '600'}}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
