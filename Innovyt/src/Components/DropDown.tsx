import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto'

const Dropdown = ({options, onSelect}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
        <Text style={{color: 'black', marginHorizontal: 20}}>
          {selectedOption ? selectedOption?.label : 'Select an option '}
        </Text>
        <Fontisto
          name="angle-down"
          size={11}
          color="#242424"
          style={{fontWeight: '900',top:1}}
        />
      </TouchableOpacity>

      {isOpen && (
        <ScrollView>
          <View style={styles.dropdownList}>
            {options.map((option: any) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => handleOptionSelect(option)}
                style={styles.option}>
                <Text style={{color: 'black'}}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    position: 'absolute',
    zIndex: 999,
    //height:40
    top: 0,
    right: 0,
    //bottom:20
    //width: responsiveWidth(20),
  },
  dropdownButton: {
    borderWidth: 0.3,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    // width:responsiveWidth(5)
    minWidth: 40,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  dropdownList: {
    //position: 'absolute',
    top: '2%', // Position below the button
    //left: 0,
    //right: 0,
    zIndex: 999,

    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    //width: responsiveWidth(20),
  },
  option: {
    padding: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
  },
});

export default Dropdown;
