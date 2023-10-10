import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const {height,width}=Dimensions.get("screen")

const BottomSheet = ({isVisible, toggleModal, setIsVisible}: any) => {
  const navigation = useNavigation();

  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);

  const textInputOnFocus1 = () => {
    setFocus1(!focus1);
  };
  const textInputOnFocus2 = () => {
    setFocus2(!focus2);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={toggleModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text
            style={{
              color: 'black',
              fontWeight: '900',
              textAlign: 'center',
              fontSize: responsiveFontSize(2),
            }}>
            Guest Info
          </Text>
          <View style={{alignItems: 'flex-end', bottom:height*0.03}}>
            <TouchableOpacity onPress={toggleModal}>
              <Icon name="close" size={28} color="red" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: height*0.02,
            }}>
            <TextInput
              placeholder="Guest Name"
              placeholderTextColor={'grey'}
              onFocus={textInputOnFocus1}
              onSubmitEditing={() => {
                setFocus1(false);
              }}
              keyboardType='default'
              style={{
                borderWidth: focus1 ? 3 : 1,
                width: width*0.9,
                marginHorizontal:width*0.05,
                height: height*0.05,
                borderRadius: 12,
                padding: 10,
                borderColor: focus1 ? '#feca3f' : 'grey',
                color: 'black',
                marginBottom: height*0.03,
              }}
            />
            <TextInput
              placeholder="Contact Number"
              placeholderTextColor={'grey'}
              onFocus={textInputOnFocus2}
              onSubmitEditing={() => {
                setFocus2(false);
              }}
              keyboardType='phone-pad'
              style={{
                borderWidth: focus2 ? 3 : 1,
                width: width*0.9,
                marginHorizontal:width*0.05,
                height: height*0.05,
                borderRadius: 12,
                padding: 10,
                borderColor: focus2 ? '#feca3f' : 'grey',
                color: 'black',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: height*0.025,
            }}>
            <Text style={{color: 'black', fontWeight: '900'}}>
              No. of Guests
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Icon name="remove" size={25} color="#cb2227" />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  textAlignVertical: 'center',
                  marginHorizontal: width*0.02,
                }}>
                0
              </Text>
              <TouchableOpacity>
                <Icon name="add" size={25} color="#cb2227" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Categories');
              setIsVisible(!isVisible);
            }}>
            <View
              style={{
                marginTop: height*0.025,
                backgroundColor: '#feca3f',
                height: height*0.06,
                width: width*0.9,
                marginHorizontal: width*0.05,
                alignSelf: 'center',
                borderRadius: 8,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  fontWeight: '900',
                  fontSize: responsiveFontSize(1.9),
                }}>
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: height*0.38,
  },
});

export default BottomSheet;
