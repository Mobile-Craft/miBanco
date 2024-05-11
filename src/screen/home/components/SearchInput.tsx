import React, {FC} from 'react';
import {TextInput, StyleSheet} from 'react-native';

interface SearchInputProps {
  onChange: (text: string) => void;
  value: string;
}

const SearchInput: FC<SearchInputProps> = ({onChange, value}) => (
  <TextInput
    style={styles.input}
    onChangeText={onChange}
    value={value}
    placeholder="Search..."
    placeholderTextColor="#666"
  />
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default SearchInput;
