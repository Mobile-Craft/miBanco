/* eslint-disable react-native/no-inline-styles */
import React, {FC, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {RootStackScreenProps} from '../../types/stackScreenProps';
import SearchInput from '../components/SearchInput';
import Item from '../components/Item';
import ButtonComponent from '../../shared/components/button/ButtonComponent';

const DATA = [
  {id: '123455', name: 'moises'},
  {id: '123456', name: 'jose'},
  {id: '123457', name: 'elias'},
  {id: '123458', name: 'Nombre'},
  {id: '123459', name: 'Nombre'},
  {id: '123460', name: 'Nombre'},
  {id: '123463', name: 'Nombre'},
  {id: '123464', name: 'Nombre'},
];

export const HomeScreen: FC<RootStackScreenProps<'Home'>> = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleNavigate = (id: string) => {
    navigation.navigate('DetailsProduct', {id});
  };

  return (
    <View style={styles.container}>
      <SearchInput onChange={setSearchQuery} value={searchQuery} />

      <View style={styles.containerList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()),
          )}
          renderItem={({item, index}) => (
            <Item
              name={item.name}
              id={item.id}
              onPress={handleNavigate}
              style={{borderBottomWidth: index === DATA.length - 1 ? 0 : 1}}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.containerButton}>
        <ButtonComponent
          title={'Agregar'}
          onPress={() => navigation.navigate('AddProduct')}
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
