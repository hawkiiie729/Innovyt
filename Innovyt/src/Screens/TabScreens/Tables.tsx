import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet from '../../Components/BottomSheet';

const {height, width} = Dimensions.get('screen');

const Tables = () => {
  const [selectedItem, setSelectedItem] = useState('item-1');
  const bottomSheetRef = React.useRef(null);
  const [focus, setFocus] = useState(false);

  const textInputOnFocus = () => {
    setFocus(!focus);
  };

  const handleItemPress = (item: any) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  return (
    <View style={{height: height * 1}}>
      <View
        style={{
          marginTop: height * 0.015,
          alignItems: 'flex-end',
          marginRight: width * 0.02,
        }}>
        <Icon name="notifications" size={30} color="black" />
      </View>
      {/* Avatar */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: width * 0.02,
          marginTop: height * 0.01,
        }}>
        <Image
          source={require('../../Assets/Avatar.png')}
          style={{height: responsiveHeight(4.5), width: responsiveWidth(10)}}
        />
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(3),
            fontWeight: '900',
            marginLeft: responsiveWidth(2),
          }}>
          Hi Sudhanshu!
        </Text>
      </View>
      <View style={{marginTop: responsiveHeight(2)}}>
        <TextInput
          placeholder="search by table number"
          placeholderTextColor={'grey'}
          onFocus={textInputOnFocus}
          onSubmitEditing={() => {
            setFocus(false);
          }}
          style={{
            borderWidth: focus ? 3 : 1,
            width: responsiveWidth(90),
            marginHorizontal: responsiveWidth(5),
            height: responsiveHeight(5),
            borderRadius: 12,
            padding: 10,
            borderColor: focus ? '#feca3f' : 'grey',
            color: 'black',
          }}
        />
      </View>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => handleItemPress('item-1')}>
            <View
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(23),
                borderRadius: 14,
                marginVertical: responsiveHeight(2.5),
                marginLeft: responsiveWidth(4),
                justifyContent: 'center',
                marginRight: responsiveWidth(4),
                backgroundColor:
                  selectedItem === 'item-1' ? '#cb2227' : 'transparent',
              }}>
              <Text
                style={{
                  color: selectedItem === 'item-1' ? 'white' : 'grey',
                  textAlign: 'center',
                }}>
                Indoor
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleItemPress('item-2')}>
            <View
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(23),
                borderRadius: 14,
                marginVertical: responsiveHeight(2.5),
                marginLeft: responsiveWidth(4),
                justifyContent: 'center',
                marginRight: responsiveWidth(4),
                backgroundColor:
                  selectedItem === 'item-2' ? '#cb2227' : 'transparent',
              }}>
              <Text
                style={{
                  color: selectedItem === 'item-2' ? 'white' : 'grey',
                  textAlign: 'center',
                }}>
                Outdoor
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleItemPress('item-3')}>
            <View
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(23),
                borderRadius: 14,
                marginVertical: responsiveHeight(2.5),
                marginLeft: responsiveWidth(4),
                justifyContent: 'center',
                marginRight: responsiveWidth(4),
                backgroundColor:
                  selectedItem === 'item-3' ? '#cb2227' : 'transparent',
              }}>
              <Text
                style={{
                  color: selectedItem === 'item-3' ? 'white' : 'grey',
                  textAlign: 'center',
                }}>
                Upper Floor
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleItemPress('item-4')}>
            <View
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(23),
                borderRadius: 14,
                marginVertical: responsiveHeight(2.5),
                marginLeft: responsiveWidth(4),
                justifyContent: 'center',
                marginRight: responsiveWidth(4),
                backgroundColor:
                  selectedItem === 'item-4' ? '#cb2227' : 'transparent',
              }}>
              <Text
                style={{
                  color: selectedItem === 'item-4' ? 'white' : 'grey',
                  textAlign: 'center',
                }}>
                Lower Floor
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {/* tables grid */}

      <ScrollView style={{}}>
        <View style={{height: responsiveHeight(90)}}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: responsiveWidth(3),
              marginBottom: responsiveHeight(1),
            }}>
            <TouchableOpacity onPress={toggleBottomSheet}>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                  marginRight: responsiveWidth(2),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  1B
                </Text>
              </View>
            </TouchableOpacity>
            <BottomSheet
              isVisible={isBottomSheetVisible}
              toggleModal={toggleBottomSheet}
              setIsVisible={setBottomSheetVisible}
            />
            <TouchableOpacity onPress={toggleBottomSheet}>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                  marginRight: responsiveWidth(2),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  2B
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleBottomSheet}>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  3B
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: responsiveWidth(3),
              marginBottom: responsiveHeight(1),
            }}>
            <TouchableOpacity>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                  marginRight: responsiveWidth(2),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  4B
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                  marginRight: responsiveWidth(2),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  5B
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  6B
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: responsiveWidth(3),
              marginBottom: responsiveHeight(1),
            }}>
            <TouchableOpacity>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                  marginRight: responsiveWidth(2),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  7B
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                  marginRight: responsiveWidth(2),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  8B
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  9B
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: responsiveWidth(3),
              marginBottom: responsiveHeight(1),
            }}>
            <TouchableOpacity>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                  marginRight: responsiveWidth(2),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  10B
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                  marginRight: responsiveWidth(2),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  11B
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  12B
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: responsiveWidth(3),
              marginBottom: responsiveHeight(1),
            }}>
            <TouchableOpacity>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                  marginRight: responsiveWidth(2),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  13B
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                  marginRight: responsiveWidth(2),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  14B
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  15B
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: responsiveWidth(3),
              marginBottom: responsiveHeight(1),
            }}>
            <TouchableOpacity>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                  marginRight: responsiveWidth(2),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  16B
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                  marginRight: responsiveWidth(2),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  17B
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(30),
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlign: 'right',
                    fontSize: responsiveFontSize(2.5),
                    marginRight: responsiveWidth(2),
                  }}>
                  18B
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Tables;
