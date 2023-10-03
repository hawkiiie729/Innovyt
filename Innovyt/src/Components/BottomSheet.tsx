import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const BottomSheet = ({isVisible, toggleModal, setIsVisible}: any) => {
  const navigation = useNavigation();
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
          <View style={{alignItems: 'flex-end', bottom: responsiveHeight(3)}}>
            <TouchableOpacity onPress={toggleModal}>
              <Icon name="close" size={28} color="red" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: responsiveHeight(2),
            }}>
            <TextInput
              placeholder="Guest Name"
              placeholderTextColor={'grey'}
              style={{
                borderWidth: 1,
                width: responsiveWidth(90),
                marginHorizontal: responsiveWidth(5),
                height: responsiveHeight(5),
                borderRadius: 12,
                padding: 10,
                borderColor: 'grey',
                color: 'black',
                marginBottom: responsiveHeight(3),
              }}
            />
            <TextInput
              placeholder="Contact Number"
              placeholderTextColor={'grey'}
              style={{
                borderWidth: 1,
                width: responsiveWidth(90),
                marginHorizontal: responsiveWidth(5),
                height: responsiveHeight(5),
                borderRadius: 12,
                padding: 10,
                borderColor: 'grey',
                color: 'black',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: responsiveHeight(2.5),
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
                  marginHorizontal: responsiveWidth(2),
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
              navigation.navigate('SelectOrder');
              setIsVisible(!isVisible);
            }}>
            <View
              style={{
                marginTop: responsiveHeight(2.5),
                backgroundColor: '#feca3f',
                height: responsiveHeight(6),
                width: responsiveWidth(90),
                marginHorizontal: responsiveWidth(5),
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
    height: responsiveHeight(40),
  },
});

export default BottomSheet;
