import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');


const apiUrl =
  'https://ezzybite-pos-api-nest-dev.azurewebsites.net/api/v1/price-menu/store-view?include-items=true';

const headers = {
  tenantcode: 'buono-pizza',
  clientapikey: '64e27ee889-TAB',
  clientapisecrete: 'YkG5849CXHfbxiHTcLztQEhnJ',
};

const Categories = () => {
  const navigation = useNavigation();
  const [focus, setFocus] = useState(false);
  const [category,setCategory]=useState([])

  const textInputOnFocus = () => {
    setFocus(!focus);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: headers,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('====================================');
      console.log('data', data);
      console.log('====================================');
      setCategory(data)
      //setItemList(data[0]?.priceMenu?.categories[1]?.items);
      //setFood(data[0]?.priceMenu?.categories);
      // console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
    // setVerticalItem(food.find((item)=>item?.name === selectedItem).items)
  }, []);

 // console.log("cat",category);

 const renderItem=({item}:any)=>{
    return(
        <TouchableOpacity onPress={()=>{
           navigation.navigate("SelectOrder",{item})
        }}>
        <View
          style={{
            height: height * 0.15,
            width: width * 0.46,
            backgroundColor: 'white',
            borderRadius: 12,
            marginHorizontal: width * 0.02,
            marginVertical:height*0.012,
            elevation:10,
            justifyContent:'center'
           //marginLeft:width*0.01
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: '900',
              textAlign: 'center',
              fontSize: responsiveFontSize(2.5),
              marginRight: width * 0.02,
              textAlignVertical:'center'
            }}>
           {item?.title}
          </Text>
         
        </View>
      </TouchableOpacity>
    )
 }
  

  return (
    <View style={{height: height * 1}}>
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
          Select Category
        </Text>
        <Icon name="notifications" size={23} color="black" />
      </View>
      <View>
        <TextInput
          placeholder="Search for food category"
          placeholderTextColor={'grey'}
          onFocus={textInputOnFocus}
          onSubmitEditing={() => {
            setFocus(false);
          }}
          style={{
            width: '90%',
            height: 50,
            borderWidth: focus ? 3 : 1,
            borderColor: focus ? '#feca3f' : 'grey',
            alignSelf: 'center',
            marginTop: height * 0.035,
            borderRadius: 10,
            paddingLeft: 10,
            color: 'black',
          }}
        />
      </View>
      <View
        style={{
          marginTop: height * 0.02,
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
          marginTop: height * 0.013,
          marginHorizontal: width * 0.05,
          marginBottom: height * 0.01,
        }}
      />

<FlatList data={category} numColumns={2} renderItem={renderItem}/>

      {/* <ScrollView>
        <View style={{height: height * 0.9}}>
          <View
            style={{
              //flexDirection: 'column',
              marginHorizontal: width * 0.03,
              marginBottom: height * 0.01,
            }}>

                {category.map((item,index)=>(
                  <TouchableOpacity>
                  <View key={index}
                    style={{
                      height: height * 0.12,
                      width: width * 0.3,
                      backgroundColor: 'white',
                      borderRadius: 10,
                      marginRight: width * 0.02,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '900',
                        textAlign: 'center',
                        fontSize: responsiveFontSize(2.5),
                        marginRight: width * 0.02,
                        textAlignVertical:'center'
                      }}>
                     {item?.title}
                    </Text>
                  </View>
                </TouchableOpacity>
                ))}
            
          </View>
        </View>
      </ScrollView> */}
    </View>
  );
};

export default Categories;
