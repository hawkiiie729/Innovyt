import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import Svg, {Path} from 'react-native-svg';
// import {PlusIcon} from '../Assets/SvgIcons/plusIcon.svg'

const OrderSummary = () => {
  const {height, width} = Dimensions.get('screen');
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('');
  const [inputText, setInputText] = useState('');

  //console.log('Height & width', height, width);

  const startEditing = () => {
    setInputText(text); // Save the current text in case the user cancels editing
    setIsEditing(true);
  };

  const endEditing = () => {
    setIsEditing(false);
    handleSubmit();
  };

  const handleTextChange = newText => {
    setInputText(newText);
  };
  const handleSubmit = () => {
    setText(inputText); // Update the text with the new input text
    setIsEditing(false);
  };

  console.log('isEditing', isEditing);
  console.log('text', text);

  return (
    <View style={{height: height}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: height * 0.02,
          alignItems: 'center',
          marginHorizontal: width * 0.04,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="chevron-back" size={30} color="#cb2227" />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(2),
            textAlignVertical: 'center',
            fontWeight: '900',
          }}>
          Order Summary
        </Text>
        <Icon name="notifications" size={23} color="black" />
      </View>
      <View
        style={{
          marginTop: height * 0.035,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: responsiveWidth(5),
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(2),
            textAlignVertical: 'center',
            fontWeight: '800',
          }}>
          Order #35
        </Text>
        <Text style={{color: 'grey'}}>
          Table{' '}
          <Text
            style={{
              color: 'black',
              fontWeight: '600',
              fontSize: responsiveFontSize(2),
            }}>
            3B
          </Text>
        </Text>
        <Text style={{color: 'grey'}}>
          Guests{' '}
          <Text
            style={{
              color: 'black',
              fontWeight: '600',
              fontSize: responsiveFontSize(2),
            }}>
            2
          </Text>
        </Text>
      </View>
      <View
        style={{
          height: height * 0.003,
          width: width * 0.9,
          backgroundColor: '#feca3f',
          marginTop: height * 0.012,
          marginHorizontal: width * 0.05,
          marginBottom: height * 0.01,
        }}
      />
      <Text
        style={{color: 'grey', marginLeft: width * 0.02, fontWeight: '700'}}>
        Order Info
      </Text>
      <ScrollView>
        <View style={{marginTop: height * 0.01, flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'column',
              width: width * 0.5,
              marginLeft: width * 0.04,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'black',
                  marginRight: width * 0.02,
                  fontWeight: '900',
                  fontSize: responsiveFontSize(2),
                }}>
                1.
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  fontSize: responsiveFontSize(2),
                }}>
                Nasu Dengaku
              </Text>
            </View>
            <View
              style={{
                marginTop: height * 0.015,
                right: isEditing === false ? responsiveWidth(4) : null,
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              {/* <PlusIconSvgComponent /> */}

              {/* <Text
              style={{
                color: '#cb2227',
                fontWeight: '700',
                fontSize: responsiveFontSize(2),
                textAlignVertical: 'center',
                right:
                  isEditing === false && text != ''
                    ? responsiveWidth(8)
                    : responsiveWidth(2),
                // position: 'absolute',
              }}>
              +
            </Text> */}

              <MaterialIcon
                name="add-circle-outline"
                size={20}
                color="#cb2227"
                style={{
                  color: '#cb2227',
                  fontWeight: '700',
                  fontSize: responsiveFontSize(2),
                  textAlignVertical: 'center',
                  right:
                    isEditing === false && text != ''
                      ? responsiveWidth(8)
                      : responsiveWidth(2),
                  top: responsiveHeight(0.1),
                  // position: 'absolute',
                }}
              />
              {isEditing ? (
                <TextInput
                  style={{
                    width: '90%',
                    height: height * 0.035,
                    borderWidth: 1,
                    borderColor: '#feca3f',
                    //alignSelf: 'center',
                    // marginTop: responsiveHeight(3.5),
                    borderRadius: 10,
                    paddingLeft: 10,
                    color: 'black',
                    paddingVertical: 5,
                  }}
                  value={inputText}
                  onChangeText={handleTextChange}
                  onBlur={endEditing}
                  autoFocus={true}

                  //onKeyPress={endEditing}
                />
              ) : (
                <TouchableOpacity
                  onPress={startEditing}
                  style={{justifyContent: 'center'}}>
                  {text === '' ? (
                    <Text style={{color: '#cb2227', fontWeight: '700'}}>
                      Add Special Remark
                    </Text>
                  ) : (
                    <View
                      style={{
                        backgroundColor: '#feca3f',
                        width: responsiveWidth(24),
                        borderRadius: 5,
                        right: responsiveWidth(4),
                        height: responsiveHeight(2.8),
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          textAlign: 'center',
                          fontWeight: '800',
                        }}>
                        {text}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              // justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* quantity Button */}
            <View
              style={{
                flexDirection: 'row',
                marginTop: responsiveHeight(1.5),
                marginLeft: responsiveWidth(20),
                bottom: responsiveHeight(1),
              }}>
              <TouchableOpacity>
                <Icon name="remove" size={25} color="black" />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  //   textAlignVertical: 'center',
                  marginHorizontal: responsiveWidth(2),
                }}>
                0
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#feca3f',
                  borderRadius: 6,
                  height: responsiveHeight(2.5),
                }}>
                <Icon name="add" size={22} color="black" />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: '#cb2227',
                marginLeft: responsiveWidth(24),
                //   marginBottom: responsiveHeight(),
                fontWeight: '800',
                top: responsiveHeight(0.3),
              }}>
              $ 6.80
            </Text>
          </View>
          <View
            style={{
              width: width * 0.8,
              marginHorizontal: width * 0.1,
              height: responsiveHeight(1),
              backgroundColor: 'black',
              marginTop: height * 0.01,
            }}
          />
        </View>
      </ScrollView>
      {/* bottom bttns */}
      <View
        style={{
          backgroundColor: 'transparent',
          flexDirection: 'row',
          height: responsiveHeight(8),
          width: responsiveWidth(100),
          position: 'absolute',
          bottom: responsiveHeight(7),
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            height: responsiveHeight(5),
            width: responsiveWidth(40),
            borderRadius: 10,
            borderColor: '#feca3f',
            borderWidth: 1,
            flexDirection: 'row',
            marginTop: responsiveHeight(1),
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black'}}>1 item</Text>
          <View
            style={{
              height: responsiveHeight(2),
              width: responsiveWidth(0.3),
              backgroundColor: 'lightgrey',
              marginHorizontal: responsiveWidth(2),
            }}
          />
          <Text style={{color: '#cb2227', fontWeight: '500'}}>$650</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Payment');
          }}>
          <View
            style={{
              height: responsiveHeight(5),
              width: responsiveWidth(40),
              borderRadius: 10,
              borderColor: '#feca3f',
              borderWidth: 1,
              flexDirection: 'row',
              marginTop: responsiveHeight(1),
              backgroundColor: '#feca3f',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'black', fontWeight: '900'}}>
              Confirm Order
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderSummary;

// function PlusIconSvgComponent(props) {
//   return (
//     <Svg
//       width={20}
//       height={20}
//       viewBox="0 0 16 16"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}>
//       <Path
//         d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.4A6.4 6.4 0 118 1.6a6.4 6.4 0 010 12.8z"
//         fill="#CB2227"
//       />
//       <Path
//         d="M8.8 7.2h2.4a.8.8 0 110 1.6H8.8v2.4a.8.8 0 11-1.6 0V8.8H4.8a.8.8 0 010-1.6h2.4V4.8a.8.8 0 011.6 0v2.4z"
//         fill="#CB2227"
//       />
//     </Svg>
//   );
// }
