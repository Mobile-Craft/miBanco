import React, {FC, useCallback, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {RootStackScreenProps} from '../../types/stackScreenProps';
import SearchInput from '../components/SearchInput';
import Item from '../components/Item';
import ButtonComponent from '../../shared/components/button/ButtonComponent';
import {useProducts} from '../../shared/hooks/useProducts';
import {useFocusEffect} from '@react-navigation/native';

export const HomeScreen: FC<RootStackScreenProps<'Home'>> = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const {products, refreshProducts, error} = useProducts();

  useFocusEffect(
    useCallback(() => {
      refreshProducts(); // Llama a una función que recarga los productos
    }, [refreshProducts]),
  );
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleNavigate = product => {
    navigation.navigate('DetailsProduct', {product});
  };
  return (
    <View style={styles.container}>
      <SearchInput onChange={setSearchQuery} value={searchQuery} />

      <View style={styles.containerList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredProducts}
          renderItem={({item}) => (
            <Item
              name={item.name}
              id={item.id}
              onPress={() => handleNavigate(item)}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.containerButton}>
        <ButtonComponent
          title={'Agregar'}
          onPress={() => navigation.navigate('AddProduct', {})}
          styleType={'primary'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  containerList: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    maxHeight: '63%',
    minHeight: '63%',
  },
  containerButton: {
    width: '100%',
    bottom: 50,
    position: 'absolute',
    alignSelf: 'center',
  },
});
