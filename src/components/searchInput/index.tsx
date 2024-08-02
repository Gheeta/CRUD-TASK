import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

// import {styles} from './styles';
// import Colors from '@common/colors';
// import Icon from 'react-native-vector-icons/FontAwesome';

type InputProps = {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
};

const SearchInput: React.FC<InputProps> = ({
  value,
  placeholder,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={'gray'}
      />
    </View>
  );
};

export default SearchInput;
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: 'black',
  },
});
