import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {InfoSection} from '../components/InfoSection';
import ButtonComponent from '../../../shared/components/button/ButtonComponent';
import {RootStackScreenProps} from '../../../types/stackScreenProps';

export const productDetails = [
  {label: 'Nombre', info: '[Nombre-registrado]'},
  {label: 'Descripción', info: '[Descripción-registrada]'},
  {
    label: 'Logo',
    info: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
  },
  {label: 'Fecha liberación', info: '[Fecha-liberación]'},
  {label: 'Fecha revisión', info: '[Fecha-revisión]'},
];

export const DetailsProductScreen: FC<
  RootStackScreenProps<'DetailsProduct'>
> = ({navigation}) => {
  const handleNavigate = () => {
    navigation.navigate('AddProduct');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.id}>ID: 123455</Text>
      <Text style={styles.infoExtra}>Información extra</Text>
      {productDetails.map(detail => (
        <InfoSection
          key={detail.label}
          label={detail.label}
          info={detail.info}
        />
      ))}
      <View style={styles.containerButton}>
        <ButtonComponent
          title={'Editar'}
          onPress={handleNavigate}
          styleType={'secondary'}
        />
        <ButtonComponent
          containerStyle={{top: 15}}
          title={'Eliminar'}
          onPress={() => console.log('hi')}
          styleType={'danger'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  id: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoExtra: {
    fontSize: 16,
    marginBottom: 40,
  },
  containerButton: {
    width: '100%',
    bottom: 50,
    position: 'absolute',
    alignSelf: 'center',
  },
});
