/* eslint-disable @typescript-eslint/no-shadow */
import React, {FC, useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {InfoSection} from '../components/InfoSection';
import ButtonComponent from '../../../shared/components/button/ButtonComponent';
import {RootStackScreenProps} from '../../../types/stackScreenProps';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import BottomSheetComponent from '../components/BottomSheet';
import {format} from 'date-fns';

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
> = ({navigation, route}) => {
  const product = route.params;
  console.log(product);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleOpenSheet = () => {
    bottomSheetRef.current?.expand();
  };
  const handleCloseSheet = () => {
    bottomSheetRef.current?.close();
  };
  const handleNavigate = () => {
    navigation.navigate('AddProduct');
  };

  const snapPoints = useMemo(() => ['45%'], []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.id}>ID: {product.id}</Text>
      <Text style={styles.infoExtra}>Información extra</Text>

      <InfoSection key={product.name} label={'Nombre'} info={product.name} />
      <InfoSection
        key={product.description}
        label={'Descripción'}
        info={product.description}
      />
      <InfoSection key={product.logo} label={'Logo'} info={product.logo} />
      <InfoSection
        key={product.date_release}
        label={'Fecha de liberación'}
        info={format(new Date(product.date_release), 'P')}
      />
      <InfoSection
        key={product.date_revision}
        label={'Fecha de revisión'}
        info={format(new Date(product.date_revision), 'P')}
      />
      <View style={styles.containerButton}>
        <ButtonComponent
          title={'Editar'}
          onPress={handleNavigate}
          styleType={'secondary'}
        />
        <ButtonComponent
          containerStyle={{top: 15}}
          title={'Eliminar'}
          onPress={handleOpenSheet}
          styleType={'danger'}
        />
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        handleIndicatorStyle={{backgroundColor: 'transparent'}}
        backdropComponent={renderBackdrop}>
        <BottomSheetView style={styles.contentContainer}>
          <BottomSheetComponent
            onConfirm={() => {
              console.log('1');
            }}
            onCancel={handleCloseSheet}
          />
        </BottomSheetView>
      </BottomSheet>
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
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
