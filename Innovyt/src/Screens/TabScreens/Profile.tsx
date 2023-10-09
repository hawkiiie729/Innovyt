import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');

// console.log('h & w', height, width);

const Profile = () => {
  const navigation = useNavigation();
  const [hide, setHide] = useState(false);

  const toggleHide = () => {
    setHide(!hide);
  };

  // useEffect(()=>{

  // },[hide])

  console.log('hide', hide);

  return (
    <View style={{height: height, width: width}}>
      <View>
        {/* back icon */}
        <View
          style={{
            marginTop: height * 0.03,
            marginHorizontal: width * 0.03,
            flexDirection: 'row',
            // alignItems: 'center',
            width: width * 1,
          }}>
          <TouchableOpacity style={{width: width * 0.2}}>
            <Ionicons name="chevron-back" size={30} color="#cb2227" />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              width: width * 0.8,
              right: width * 0.13,
            }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontWeight: '900',
                fontSize: responsiveFontSize(2.2),
                alignSelf: 'center',
              }}>
              Profile
            </Text>
          </View>
        </View>
        {/* Avatar ,Name,logout btn etc */}
        <View
          style={{
            flexDirection: 'column',
            alignSelf: 'center',
            marginTop: height * 0.03,
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
          {/* Employee Details */}
          <View style={{marginTop: height * 0.05}}>
            <View
              style={{
                width: width * 1,
                height: height * 0.0012,
                backgroundColor: '#FECA3F',
                marginBottom: height * 0.02,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                width: width * 1,
                justifyContent: 'space-around',
                marginBottom: height * 0.02,
                //marginRight: width * 0.2,
                // right:width*0.05
              }}>
              <View style={{width: width * 0.2, marginLeft: width * 0.1}}>
                <Text
                  style={{
                    color: '#242424',
                    fontWeight: '400',
                    fontSize: responsiveFontSize(1.7),
                  }}>
                  Name
                </Text>
              </View>
              <View style={{width: width * 0.8, marginLeft: width * 0.1}}>
                <Text
                  style={{
                    color: '#242424',
                    fontWeight: '800',
                    fontSize: responsiveFontSize(1.8),
                    // marginRight:width*0.05
                  }}>
                  Sudhanshu Mishra
                </Text>
              </View>
            </View>
            <View
              style={{
                width: width * 1,
                height: height * 0.0001,
                backgroundColor: '#7E7E7E',
                marginBottom: height * 0.02,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                width: width * 1,
                justifyContent: 'space-around',
                marginBottom: height * 0.02,
                //marginRight: width * 0.2,
                // right:width*0.05
              }}>
              <View style={{width: width * 0.2, marginLeft: width * 0.1}}>
                <Text
                  style={{
                    color: '#242424',
                    fontWeight: '400',
                    fontSize: responsiveFontSize(1.7),
                  }}>
                  Email
                </Text>
              </View>
              <View style={{width: width * 0.8, marginLeft: width * 0.1}}>
                <Text
                  style={{
                    color: '#242424',
                    fontWeight: '800',
                    fontSize: responsiveFontSize(1.8),
                    // marginRight:width*0.05
                  }}>
                  samuelsmith@gmail.com
                </Text>
              </View>
            </View>
            <View
              style={{
                width: width * 1,
                height: height * 0.0005,
                backgroundColor: '#7E7E7E',
                marginBottom: height * 0.02,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                width: width * 1,
                justifyContent: 'space-around',
                marginBottom: height * 0.02,
                //marginRight: width * 0.2,
                // right:width*0.05
              }}>
              <View style={{width: width * 0.2, marginLeft: width * 0.1}}>
                <Text
                  style={{
                    color: '#242424',
                    fontWeight: '400',
                    fontSize: responsiveFontSize(1.7),
                  }}>
                  Phone
                </Text>
              </View>
              <View style={{width: width * 0.8, marginLeft: width * 0.1}}>
                <Text
                  style={{
                    color: '#242424',
                    fontWeight: '800',
                    fontSize: responsiveFontSize(1.8),
                    // marginRight:width*0.05
                  }}>
                  +91 9876543210
                </Text>
              </View>
            </View>
            <View
              style={{
                width: width * 1,
                height: height * 0.0005,
                backgroundColor: '#7E7E7E',
                marginBottom: height * 0.02,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                width: width * 1,
                justifyContent: 'space-around',
                marginBottom: height * 0.02,
                //marginRight: width * 0.2,
                // right:width*0.05
              }}>
              <View style={{width: width * 0.2, marginLeft: width * 0.1}}>
                <Text
                  style={{
                    color: '#242424',
                    fontWeight: '400',
                    fontSize: responsiveFontSize(1.7),
                  }}>
                  Code
                </Text>
              </View>
              <View
                style={{
                  width: width * 0.8,
                  marginLeft: width * 0.1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                {hide ? (
                  <Text
                    style={{
                      color: '#242424',
                      fontWeight: '800',
                      fontSize: responsiveFontSize(1.8),
                      // marginRight:width*0.05
                    }}>
                    ***********
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: '#242424',
                      fontWeight: '800',
                      fontSize: responsiveFontSize(1.8),
                      // marginRight:width*0.05
                    }}>
                    hjfoijpokpaf
                  </Text>
                )}
                <TouchableOpacity style={{right: width * 0.12}} onPress={toggleHide}>
                  {hide ? (
                    <Ionicons
                      name="eye-off"
                      size={25}
                      color="#242424"
                      
                    />
                  ) : (
                    <Ionicons
                      name="eye"
                      size={25}
                      color="#242424"
                      // style={{right: width * 0.12}}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: width * 1,
                height: height * 0.0012,
                backgroundColor: '#FECA3F',
                marginBottom: height * 0.02,
              }}
            />
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

export default Profile;
