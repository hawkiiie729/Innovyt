import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CustomTextInput = (props: any) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  //   console.log('place', place);

  // console.log('propd', props);

  return (
    <View>
      <TextInput
        placeholder={props?.place}
        placeholderTextColor={'grey'}
        keyboardType={props?.keyBoardType}
        style={{
          width: '90%',
          height: responsiveHeight(6),
          borderWidth: isFocused ? 3 : 1,
          borderColor: isFocused ? '#feca3f' : 'grey',
          alignSelf: 'center',
          //   marginTop: 50,
          borderRadius: 10,
          paddingLeft: 10,
          marginBottom: responsiveHeight(3),
          color: 'black',
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   inputContainer: {
//     borderWidth: 1,
//     borderRadius: 4,
//     borderColor: isF, // Default border color
//     paddingHorizontal: 10,
//     width: responsiveWidth(80),
//   },
//   input: {
//     height: 40,
//   },
// });

export default CustomTextInput;
