import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import CustomizeItem from '../Components/CustomizeItem';

const SelectOrder = () => {
  const [selectedItem, setSelectedItem] = useState('All');
  const navigation = useNavigation();
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  const food = [
    {id: 1, name: 'All'},
    {id: 2, name: 'Staters'},
    {id: 3, name: 'Appetizers'},
    {id: 4, name: 'MainCourse'},
    {id: 5, name: 'SweetDish'},
  ];
  //   const keyExtractor = (item, index) => index.toString();

  const toggleItemSelection = (itemName: any) => {
    if (selectedItem === itemName) {
      setSelectedItem(itemName);
    } else {
      setSelectedItem(itemName);
    }
  };

  const renderItem = ({item, index}: any) => (
    <>
      <View key={index} style={{flexDirection: 'column'}}>
        <TouchableOpacity
          onPress={() => toggleItemSelection(item?.name)}
          style={{
            backgroundColor:
              selectedItem === item?.name ? '#cb2227' : 'transparent',
            width: responsiveWidth(20),
            height: responsiveHeight(4),
            margin: 8,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            marginBottom: responsiveHeight(3),
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(1.5),
              color: selectedItem === item?.name ? 'white' : 'grey',
              fontWeight: selectedItem === item?.name ? '900' : '400',
              textAlign: 'center',
            }}>
            {item?.name}
          </Text>
        </TouchableOpacity>
        {/* {setVerticalItem(food.find(item => item.name === selectedItem).items)} */}
      </View>
    </>
  );

  return (
    <View style={{height: responsiveHeight(100)}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: responsiveHeight(2),
          alignItems: 'center',
          marginHorizontal: responsiveWidth(4),
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
          Select Order
        </Text>
        <Icon name="notifications" size={23} color="black" />
      </View>
      <View>
        <TextInput
          placeholder="Search for food item"
          placeholderTextColor={'grey'}
          style={{
            width: '90%',
            height: 50,
            borderWidth: 1,
            borderColor: 'black',
            alignSelf: 'center',
            marginTop: responsiveHeight(3.5),
            borderRadius: 10,
            paddingLeft: 10,
            color: 'black',
          }}
        />
      </View>
      <View
        style={{
          marginTop: responsiveHeight(2),
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
          height: responsiveHeight(0.3),
          width: responsiveWidth(90),
          backgroundColor: '#feca3f',
          marginTop: responsiveHeight(1.3),
          marginHorizontal: responsiveWidth(5),
          marginBottom: responsiveHeight(1),
        }}
      />
      <FlatList
        data={food}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
        // key={item => item.id}
        extraData={selectedItem}
      />
      <ScrollView style={{marginTop: responsiveHeight(1)}}>
        <View style={{marginBottom: responsiveHeight(4)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{elevation: 20}}
              onPress={toggleBottomSheet}>
              <Image
                source={require('../Assets/food.png')}
                style={{
                  height: responsiveHeight(9),
                  width: responsiveWidth(18),
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
            <CustomizeItem
              isVisible={isBottomSheetVisible}
              toggleModal={toggleBottomSheet}
              setIsVisible={setBottomSheetVisible}
            />
            <View style={{flexDirection: 'column', right: responsiveWidth(5)}}>
              <Image
                source={require('../Assets/veg.png')}
                style={{
                  height: responsiveHeight(1.5),
                  width: responsiveWidth(3.2),
                  marginBottom: responsiveHeight(0.5),
                }}
              />
              <Text style={{color: 'black', fontWeight: '900'}}>
                Nasu Dengaku
              </Text>
              <Text style={{color: 'black', fontWeight: '500'}}>
                $ 6.80{' '}
                <Text style={{color: '#cb2227', fontWeight: '600'}}>
                  Customizable
                </Text>
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Icon name="remove" size={25} color="black" />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  textAlignVertical: 'center',
                  marginHorizontal: responsiveWidth(2),
                }}>
                0
              </Text>
              <TouchableOpacity
                style={{backgroundColor: '#feca3f', borderRadius: 5}}>
                <Icon name="add" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: responsiveWidth(90),
              marginHorizontal: responsiveWidth(5),
              height: responsiveHeight(0.03),
              backgroundColor: 'black',
              marginTop: responsiveHeight(2),
            }}
          />
        </View>
        {/* 2 Item */}
        <View style={{marginBottom: responsiveHeight(4)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{elevation: 20}}>
              <Image
                source={require('../Assets/food.png')}
                style={{
                  height: responsiveHeight(9),
                  width: responsiveWidth(18),
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'column', right: responsiveWidth(5)}}>
              <Image
                source={require('../Assets/veg.png')}
                style={{
                  height: responsiveHeight(1.5),
                  width: responsiveWidth(3.2),
                  marginBottom: responsiveHeight(0.5),
                }}
              />
              <Text style={{color: 'black', fontWeight: '900'}}>
                Nasu Dengaku
              </Text>
              <Text style={{color: 'black', fontWeight: '500'}}>
                $ 6.80{' '}
                <Text style={{color: '#cb2227', fontWeight: '600'}}>
                  Customizable
                </Text>
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Icon name="remove" size={25} color="black" />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  textAlignVertical: 'center',
                  marginHorizontal: responsiveWidth(2),
                }}>
                0
              </Text>
              <TouchableOpacity
                style={{backgroundColor: '#feca3f', borderRadius: 5}}>
                <Icon name="add" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: responsiveWidth(90),
              marginHorizontal: responsiveWidth(5),
              height: responsiveHeight(0.05),
              backgroundColor: 'black',
              marginTop: responsiveHeight(2),
            }}
          />
        </View>
        <View style={{marginBottom: responsiveHeight(4)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{elevation: 20}}>
              <Image
                source={require('../Assets/food.png')}
                style={{
                  height: responsiveHeight(9),
                  width: responsiveWidth(18),
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'column', right: responsiveWidth(5)}}>
              <Image
                source={require('../Assets/veg.png')}
                style={{
                  height: responsiveHeight(1.5),
                  width: responsiveWidth(3.2),
                  marginBottom: responsiveHeight(0.5),
                }}
              />
              <Text style={{color: 'black', fontWeight: '900'}}>
                Nasu Dengaku
              </Text>
              <Text style={{color: 'black', fontWeight: '500'}}>
                $ 6.80{' '}
                <Text style={{color: '#cb2227', fontWeight: '600'}}>
                  Customizable
                </Text>
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Icon name="remove" size={25} color="black" />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  textAlignVertical: 'center',
                  marginHorizontal: responsiveWidth(2),
                }}>
                0
              </Text>
              <TouchableOpacity
                style={{backgroundColor: '#feca3f', borderRadius: 5}}>
                <Icon name="add" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: responsiveWidth(90),
              marginHorizontal: responsiveWidth(5),
              height: responsiveHeight(0.05),
              backgroundColor: 'black',
              marginTop: responsiveHeight(2),
            }}
          />
        </View>
        <View style={{marginBottom: responsiveHeight(4)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{elevation: 20}}>
              <Image
                source={require('../Assets/food.png')}
                style={{
                  height: responsiveHeight(9),
                  width: responsiveWidth(18),
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'column', right: responsiveWidth(5)}}>
              <Image
                source={require('../Assets/veg.png')}
                style={{
                  height: responsiveHeight(1.5),
                  width: responsiveWidth(3.2),
                  marginBottom: responsiveHeight(0.5),
                }}
              />
              <Text style={{color: 'black', fontWeight: '900'}}>
                Nasu Dengaku
              </Text>
              <Text style={{color: 'black', fontWeight: '500'}}>
                $ 6.80{' '}
                <Text style={{color: '#cb2227', fontWeight: '600'}}>
                  Customizable
                </Text>
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Icon name="remove" size={25} color="black" />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  textAlignVertical: 'center',
                  marginHorizontal: responsiveWidth(2),
                }}>
                0
              </Text>
              <TouchableOpacity
                style={{backgroundColor: '#feca3f', borderRadius: 5}}>
                <Icon name="add" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: responsiveWidth(90),
              marginHorizontal: responsiveWidth(5),
              height: responsiveHeight(0.08),
              backgroundColor: 'black',
              marginTop: responsiveHeight(2),
            }}
          />
        </View>
        <View style={{marginBottom: responsiveHeight(4)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{elevation: 20}}>
              <Image
                source={require('../Assets/food.png')}
                style={{
                  height: responsiveHeight(9),
                  width: responsiveWidth(18),
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'column', right: responsiveWidth(5)}}>
              <Image
                source={require('../Assets/veg.png')}
                style={{
                  height: responsiveHeight(1.5),
                  width: responsiveWidth(3.2),
                  marginBottom: responsiveHeight(0.5),
                }}
              />
              <Text style={{color: 'black', fontWeight: '900'}}>
                Nasu Dengaku
              </Text>
              <Text style={{color: 'black', fontWeight: '500'}}>
                $ 6.80{' '}
                <Text style={{color: '#cb2227', fontWeight: '600'}}>
                  Customizable
                </Text>
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Icon name="remove" size={25} color="black" />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  textAlignVertical: 'center',
                  marginHorizontal: responsiveWidth(2),
                }}>
                0
              </Text>
              <TouchableOpacity
                style={{backgroundColor: '#feca3f', borderRadius: 5}}>
                <Icon name="add" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: responsiveWidth(90),
              marginHorizontal: responsiveWidth(5),
              height: responsiveHeight(0.03),
              backgroundColor: 'black',
              marginTop: responsiveHeight(2),
            }}
          />
        </View>
        <View style={{marginBottom: responsiveHeight(4)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{elevation: 20}}>
              <Image
                source={require('../Assets/food.png')}
                style={{
                  height: responsiveHeight(9),
                  width: responsiveWidth(18),
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'column', right: responsiveWidth(5)}}>
              <Image
                source={require('../Assets/veg.png')}
                style={{
                  height: responsiveHeight(1.5),
                  width: responsiveWidth(3.2),
                  marginBottom: responsiveHeight(0.5),
                }}
              />
              <Text style={{color: 'black', fontWeight: '900'}}>
                Nasu Dengaku
              </Text>
              <Text style={{color: 'black', fontWeight: '500'}}>
                $ 6.80{' '}
                <Text style={{color: '#cb2227', fontWeight: '600'}}>
                  Customizable
                </Text>
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Icon name="remove" size={25} color="black" />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  textAlignVertical: 'center',
                  marginHorizontal: responsiveWidth(2),
                }}>
                0
              </Text>
              <TouchableOpacity
                style={{backgroundColor: '#feca3f', borderRadius: 5}}>
                <Icon name="add" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: responsiveWidth(90),
              marginHorizontal: responsiveWidth(5),
              height: responsiveHeight(0.03),
              backgroundColor: 'black',
              marginTop: responsiveHeight(2),
            }}
          />
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: '#ffffff',
          flexDirection: 'row',
          height: responsiveHeight(8),
          width: responsiveWidth(100),
          // position: 'absolute',
          // bottom: 0,
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
        <TouchableOpacity>
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
            <Text style={{color: 'black', fontWeight: '900'}}>View Order</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectOrder;
