import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { primaryColor } from '../utils/colors';

const StyledButton = ({ children, onPress, style = {}, disabled = false }) => (
  <TouchableOpacity 
    style={[styles.button, style]} 
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={[styles.reset, style]}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: primaryColor,
    margin: 10,
    padding: 15,
    width: 300
  },
  reset: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: '#fff'
  }
});

export default StyledButton;
