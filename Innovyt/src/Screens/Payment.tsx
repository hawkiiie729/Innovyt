import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const {height, width} = Dimensions.get('screen');

const Payment = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleItemPress = (item: any) => {
    setSelectedItem(item === selectedItem ? null : item);
    // if (selectedItem === null) {
    //   setIsDisabled(true);
    // } else {
    //   setIsDisabled(false);
    // }
  };

  useEffect(() => {
    if (selectedItem === null || selectedItem === '') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [selectedItem]);

  console.log('selectedItem', selectedItem);

  const navigation = useNavigation();
  return (
    <View style={{height: height}}>
      <View>
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
            Quick Pay
          </Text>
          <Icon name="notifications" size={23} color="black" />
        </View>
        <View
          style={{
            marginTop: height * 0.035,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: width * 0.05,
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
        {/* Below Yellow Line Section */}
        <View>
          <Text style={{color: 'grey', textAlign: 'center'}}>
            Bill Created at 2023-08-31 | 2:26 PM
          </Text>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              textAlign: 'center',
              marginTop: height * 0.01,
            }}>
            Amount
          </Text>
          <Text
            style={{
              color: '#cb2227',
              textAlign: 'center',
              fontWeight: '900',
              fontSize: responsiveFontSize(5),
              marginTop: height * 0.02,
            }}>
            $ 6.80
          </Text>

          {/* payment Methods */}
          <View
            style={{
              flexDirection: 'column',
              alignSelf: 'center',
              marginTop: height * 0.04,
            }}>
            <View style={{flexDirection: 'row', marginBottom: height * 0.012}}>
              <TouchableOpacity onPress={() => handleItemPress('item-1')}>
                <View
                  style={{
                    height: height * 0.1,
                    borderWidth: 2,
                    borderColor: '#feca3f',
                    borderRadius: 10,
                    width: width * 0.33,
                    marginRight: width * 0.03,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:
                      selectedItem === 'item-1' ? '#feca3f' : 'transparent',
                  }}>
                  {selectedItem === 'item-1' ? (
                    <MaterialIcon
                      name="check-circle"
                      size={20}
                      color="black"
                      style={{left: responsiveWidth(12)}}
                    />
                  ) : null}

                  <Octicons name="credit-card" size={28} color="black" />
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '800',
                      fontSize: responsiveFontSize(2),
                    }}>
                    Credit Card
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleItemPress('item-2')}>
                <View
                  style={{
                    height: height * 0.1,
                    borderWidth: 2,
                    borderColor: '#feca3f',
                    borderRadius: 10,
                    width: width * 0.33,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:
                      selectedItem === 'item-2' ? '#feca3f' : 'transparent',
                    //   marginRight:width*0.03
                  }}>
                  {selectedItem === 'item-2' ? (
                    <MaterialIcon
                      name="check-circle"
                      size={20}
                      color="black"
                      style={{left: responsiveWidth(12)}}
                    />
                  ) : null}
                  <Feather name="rss" size={28} color="black" />
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '800',
                      fontSize: responsiveFontSize(2),
                    }}>
                    Tap
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* 2nd Row */}
            <View style={{flexDirection: 'row', marginBottom: height * 0.02}}>
              <TouchableOpacity onPress={() => handleItemPress('item-3')}>
                <View
                  style={{
                    height: height * 0.1,
                    borderWidth: 2,
                    borderColor: '#feca3f',
                    borderRadius: 10,
                    width: width * 0.33,
                    marginRight: width * 0.03,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:
                      selectedItem === 'item-3' ? '#feca3f' : 'transparent',
                  }}>
                  {selectedItem === 'item-3' ? (
                    <MaterialIcon
                      name="check-circle"
                      size={20}
                      color="black"
                      style={{left: responsiveWidth(12)}}
                    />
                  ) : null}
                  <Icon name="wallet-outline" size={30} color="black" />
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '800',
                      fontSize: responsiveFontSize(2),
                    }}>
                    Cash
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleItemPress('item-4')}>
                <View
                  style={{
                    height: height * 0.1,
                    borderWidth: 2,
                    borderColor: '#feca3f',
                    borderRadius: 10,
                    width: width * 0.33,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:
                      selectedItem === 'item-4' ? '#feca3f' : 'transparent',
                    //   marginRight:width*0.03
                  }}>
                  {selectedItem === 'item-4' ? (
                    <MaterialIcon
                      name="check-circle"
                      size={20}
                      color="black"
                      style={{left: responsiveWidth(12)}}
                    />
                  ) : null}
                  <MaterialCommunityIcon
                    name="line-scan"
                    size={28}
                    color="black"
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '800',
                      fontSize: responsiveFontSize(2),
                    }}>
                    Scan & Pay
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'transparent',
          flexDirection: 'row',
          height: height * 0.08,
          //   width: responsiveWidth(100),
          position: 'absolute',
          bottom: height * 0.06,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity disabled={isDisabled} onPress={() => {}}>
          <View
            style={{
              height: responsiveHeight(5),
              width: responsiveWidth(90),
              borderRadius: 10,
              borderColor: '#feca3f',
              borderWidth: 1,
              flexDirection: 'row',
              marginTop: responsiveHeight(1),
              backgroundColor: isDisabled ? 'transparent' : '#feca3f',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginHorizontal: responsiveWidth(5),
            }}>
            <Text style={{color: 'black', fontWeight: '900'}}>Pay</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;
