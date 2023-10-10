import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconn from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const CustomizeItem = ({
  customItem,
  setCustomItem,
  isVisible,
  toggleModal,
  setIsVisible,
}: any) => {
  const navigation = useNavigation();
  console.log('custom', customItem);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={()=>{
         setCustomItem({})
        toggleModal()}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: responsiveHeight(88),
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: '900',
              textAlign: 'center',
              fontSize: responsiveFontSize(1.9),
            }}>
            Customize Item
          </Text>
          <View style={{alignItems: 'flex-end', bottom: responsiveHeight(3)}}>
            <TouchableOpacity onPress={toggleModal}>
              <Icon name="close" size={28} color="red" />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={{uri:customItem?.featureImage}}
              style={{
                alignSelf: 'center',
                width: responsiveWidth(90),
                borderRadius: 10,
                height: responsiveHeight(28),
              }}
            />
          </View>
          <View
            style={{flexDirection: 'row', marginTop: responsiveHeight(1.5)}}>
            <View style={{flexDirection: 'column', width: responsiveWidth(68)}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // justifyContent: 'center',
                }}>
                <Image source={require('../Assets/veg.png')} />
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    marginLeft: responsiveWidth(2),
                  }}>
                 {customItem?.name?.slice(0,25)+"..."}
                </Text>
                <Text
                  style={{
                    color: '#cb2227',
                    fontWeight: '900',
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    marginLeft: responsiveWidth(2),
                  }}>
                  $ 6.80
                </Text>
              </View>
              <View style={{marginTop: responsiveHeight(0.5)}}>
                <Text
                  style={{color: 'grey', fontSize: responsiveFontSize(1.4)}}>
                  Our Fried Rice Is made from the Finet Ingridients and
                  Veggie...
                </Text>
              </View>
            </View>
            {/* quantity Button */}
            <View
              style={{
                flexDirection: 'row',
                marginTop: responsiveHeight(1.5),
                marginLeft: responsiveWidth(3.5),
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
          </View>
          {/* yellow line  */}
          <View
            style={{
              height: responsiveHeight(0.2),
              width: responsiveWidth(90),
              backgroundColor: '#feca3f',
              marginTop: responsiveHeight(1.4),
              marginHorizontal: responsiveWidth(5),
              marginBottom: responsiveHeight(1),
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
          {/* Selection */}
          <ScrollView>
            <View>
              <Text style={{color: 'black', fontWeight: '800'}}>
                Choose any one (0/1)*
              </Text>
              <View
                style={{
                  flexDirection: 'column',
                  marginTop: responsiveHeight(1.5),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: responsiveHeight(1),
                  }}>
                  <TouchableOpacity style={{marginBottom: responsiveHeight(1)}}>
                    <Iconn name="circle-o" size={18} color="#feca3f" />
                  </TouchableOpacity>
                  <View
                    style={{
                      bottom: responsiveHeight(0.5),
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'stretch',
                      width: responsiveWidth(85),
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        textAlign: 'center',

                        marginLeft: responsiveWidth(1.5),
                        fontSize: responsiveFontSize(1.5),
                      }}>
                      Vegan
                    </Text>
                    <Text
                      style={{
                        color: '#cb2227',
                        fontWeight: '700',
                        fontSize: responsiveFontSize(1.5),
                      }}>
                      + $0
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: responsiveHeight(1),
                  }}>
                  <TouchableOpacity style={{marginBottom: responsiveHeight(1)}}>
                    <Iconn name="circle-o" size={18} color="#feca3f" />
                  </TouchableOpacity>
                  <View
                    style={{
                      bottom: responsiveHeight(0.5),
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'stretch',
                      width: responsiveWidth(85),
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        textAlign: 'center',

                        marginLeft: responsiveWidth(1.5),
                        fontSize: responsiveFontSize(1.5),
                      }}>
                      Chicken
                    </Text>
                    <Text
                      style={{
                        color: '#cb2227',
                        fontWeight: '700',
                        fontSize: responsiveFontSize(1.5),
                      }}>
                      + $0
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: responsiveHeight(1),
                  }}>
                  <TouchableOpacity style={{marginBottom: responsiveHeight(1)}}>
                    <Iconn name="circle-o" size={18} color="#feca3f" />
                  </TouchableOpacity>
                  <View
                    style={{
                      bottom: responsiveHeight(0.5),
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'stretch',
                      width: responsiveWidth(85),
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        textAlign: 'center',

                        marginLeft: responsiveWidth(1.7),
                        fontSize: responsiveFontSize(1.5),
                      }}>
                      Shrimp
                    </Text>
                    <Text
                      style={{
                        color: '#cb2227',
                        fontWeight: '700',
                        fontSize: responsiveFontSize(1.5),
                      }}>
                      + $0
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: responsiveHeight(1),
                  }}>
                  <TouchableOpacity style={{marginBottom: responsiveHeight(1)}}>
                    <Iconn name="circle-o" size={18} color="#feca3f" />
                  </TouchableOpacity>
                  <View
                    style={{
                      bottom: responsiveHeight(0.5),
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'stretch',
                      width: responsiveWidth(85),
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        textAlign: 'center',

                        marginLeft: responsiveWidth(1.9),
                        fontSize: responsiveFontSize(1.5),
                      }}>
                      Pork
                    </Text>
                    <Text
                      style={{
                        color: '#cb2227',
                        fontWeight: '700',
                        fontSize: responsiveFontSize(1.5),
                      }}>
                      + $0
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          {/* add Item button */}
          <View
            style={{
              backgroundColor: '#ffffff',
              flexDirection: 'row',
              height: responsiveHeight(8),
              //   width: responsiveWidth(100),
              // position: 'absolute',
              // bottom: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OrderSummary');
                setIsVisible(!isVisible);
              }}>
              <View
                style={{
                  height: responsiveHeight(5),
                  width: responsiveWidth(90),
                  borderRadius: 10,
                  borderColor: '#feca3f',
                  borderWidth: 1,
                  flexDirection: 'row',
                  marginTop: responsiveHeight(1),
                  backgroundColor: '#feca3f',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginHorizontal: responsiveWidth(5),
                }}>
                <Text style={{color: 'black', fontWeight: '900'}}>
                  Add Item
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomizeItem;
