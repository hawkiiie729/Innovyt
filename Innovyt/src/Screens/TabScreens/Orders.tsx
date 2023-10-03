import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dropdown from '../../Components/DropDown';

const {height, width} = Dimensions.get('screen');

const Orders = () => {
  const navigation = useNavigation();
  const [focus, setFocus] = useState(false);

  const textInputOnFocus = () => {
    setFocus(!focus);
  };

  const options = [
    {id: 1, label: 'Today'},
    {id: 2, label: 'Tommorow'},
    {id: 3, label: 'Yesterday'},
   
  ];

  const handleOptionSelect = option => {
    // Handle the selected option here
    console.log('Selected Option:', option);
  };

  return (
    <View style={{height: height * 1}}>
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
          {/* <Text
            style={{
              color: 'black',
              fontSize: responsiveFontSize(2),
              textAlignVertical: 'center',
              fontWeight: '900',
            }}>
            Quick Pay
          </Text> */}
          <Icon name="notifications" size={23} color="black" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: height * 0.01,
            //justifyContent: 'space-between',
            width: width * 0.5,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveFontSize(3),
              fontWeight: '900',
              marginLeft: width * 0.04,
            }}>
            Orders
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            // alignItems: 'flex-start',
            //marginTop:responsiveHeight(3)
          }}>
          <View
            style={{
              marginRight: width * 0.05,
              position: 'absolute',
              right: 0,
              top: -35,
              zIndex: 9999,
              bottom: 10,
              marginBottom: 20,
            }}>
            <Dropdown options={options} onSelect={handleOptionSelect} />
          </View>
          <TextInput
            placeholder="Search by order number"
            placeholderTextColor={'grey'}
            onFocus={textInputOnFocus}
            //onBlur={()=>{setFocus(!focus)}}
            // onPressOut={() => {
            //
            // }}
            onSubmitEditing={() => {
              setFocus(false);
            }}
            style={{
              width: '90%',
              height: 50,
              borderWidth: focus ? 3 : 1,
              borderColor: focus ? '#feca3f' : 'grey',
              alignSelf: 'center',
              marginTop: height * 0.03,
              borderRadius: 10,
              paddingLeft: 10,
              color: 'black',
            }}
          />
           {/* Card Component */}
          <View style={{marginTop: height * 0.01,}}>
            <View style={styles.card}>
              {/* Yellow strip */}
              <View style={styles.yellowStrip}>
                <View
                  style={{
                    //justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginLeft: width * 0.03,
                  }}>
                  <Text
                    style={{
                      color: '#cb2227',
                      fontWeight: '900',
                      textAlignVertical: 'center',
                    }}>
                    Table 3B
                  </Text>
                  <Text
                    style={{
                      textAlignVertical: 'center',
                      color: '#242424',
                      fontWeight: '500',
                    }}>
                    {' | 3 Items'}
                  </Text>
                </View>
                {/* 2nd View */}
                <View
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    marginRight: width * 0.03,
                  }}>
                  <Text
                    style={{
                      color: '#242424',
                      fontWeight: '500',
                      textAlignVertical: 'center',
                    }}>
                    Order #35
                  </Text>
                  <Text
                    style={{
                      textAlignVertical: 'center',
                      color: '#242424',
                      fontWeight: '500',
                    }}>
                    {' | 1m ago'}
                  </Text>
                </View>
              </View>
              {/* Card content */}
              <View style={styles.content}>
                {/* Item and Price Section */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{paddingVertical: 6}}>
                    <Text style={{color: '#242424', fontWeight: '900'}}>
                      1 Nasu Dengaku
                    </Text>
                    <Text style={{color: '#242424', fontWeight: '900'}}>
                      1 Miso Ramen
                    </Text>
                    <Text style={{color: '#242424', fontWeight: '900'}}>
                      1 Soju
                    </Text>
                  </View>
                  <View style={{paddingVertical: 6}}>
                    <Text style={{color: '#cb2227', fontWeight: '900'}}>
                      $ 6.80
                    </Text>
                    <Text style={{color: '#cb2227', fontWeight: '900'}}>
                      $ 6.80
                    </Text>
                    <Text style={{color: '#cb2227', fontWeight: '900'}}>
                      $ 6.80
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: '#dedede',
                    width: '99%',
                    height: height * 0.0012,
                    alignSelf: 'center',
                    marginTop: height * 0.01,
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: height * 0.01,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <MaterialIcon name="cancel" size={20} color="#cb2227" />
                    <Text
                      style={{
                        color: '#cb2227',
                        fontWeight: '600',
                        marginLeft: width * 0.01,
                      }}>
                      Cancel Order
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons
                      name="printer"
                      size={20}
                      color="#cb2227"
                    />
                    <Text
                      style={{
                        color: '#cb2227',
                        fontWeight: '600',
                        marginLeft: width * 0.01,
                      }}>
                      Print Bill
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: '#cb2227',
                        fontWeight: '600',
                        marginRight: width * 0.01,
                      }}>
                      Add Items
                    </Text>
                    <MaterialIcon
                      name="add-circle-outline"
                      size={20}
                      color="#cb2227"
                    />
                  </View>
                </View>

                {/* Add more content here */}
              </View>
            </View>
          </View>
        </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5, // Add elevation (shadow)
    margin: 10,
  },
  yellowStrip: {
    backgroundColor: '#feca3f',
    height: height * 0.05,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    padding: 20,
  },
});

export default Orders;
