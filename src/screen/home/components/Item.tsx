import React, {FC} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface ItemProps {
  name: string;
  id: string;
  onPress(): void;
  style?: ViewStyle;
}

const Item: FC<ItemProps> = ({name, id, onPress, style}) => (
  <TouchableOpacity
    style={[styles.item, style]}
    onPress={onPress}
    testID="item-touchable">
    <View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.id}>ID: {id}</Text>
    </View>
    <Icon name="chevron-forward-outline" size={25} color={'#c9c9c9'} />
    {/* <Text style={styles.arrow}>{'>'}</Text> */}
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
});

export default Item;
