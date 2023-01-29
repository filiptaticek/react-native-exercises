/* eslint-disable no-unused-vars */
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        borderWidth:2,
        borderColor:"#B3B3B3",
        margin:5,
        padding:5
      }
});

const TextInput = ({ style, error, ...props }) => {

  return <NativeTextInput style={styles.input} {...props} />;
};

export default TextInput;