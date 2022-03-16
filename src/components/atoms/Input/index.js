/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  TextInput,
} from 'react-native';

import styles from './styles';

const Input = ({value, placeholder, handleOnChangeText, ...props}) => {
    return (
      <View style={styles.input}>
        <TextInput
          {...props}
          placeholder={placeholder}
          value={value}
          onChangeText={(text) => handleOnChangeText(text)}
        />
      </View>
    );
};

export default Input;

