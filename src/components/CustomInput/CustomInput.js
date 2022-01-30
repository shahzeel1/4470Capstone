import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({image, value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <Image source = {image} style = {styles.icon}/>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        placeholderTextColor = {'#0F6BAC'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '14%',
    flexDirection: 'row',
    marginVertical: 5,
    
  },
  input: {
    height: '100%',
    paddingLeft: 10
    
  },
  icon: {
    width: "8%",
    height: "60%",
    resizeMode:'contain',
    marginVertical: 10
  }
});

export default CustomInput;
