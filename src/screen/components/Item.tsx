import React, {FC} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface ItemProps {
  name: string;
  id: string;
  onPress: (id: string) => void;
  style?: ViewStyle;
}

const Item: FC<ItemProps> = ({name, id, onPress, style}) => (
  <TouchableOpacity style={[styles.item, style]} onPress={() => onPress(id)}>
    <View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.id}>ID: {id}</Text>
    </View>
    <Text style={styles.arrow}>{'>'}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    height: 65,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  id: {
    fontSize: 14,
    color: '#666',
  },
  arrow: {
    fontSize: 18,
    color: '#000',
  },
});

export default Item;
