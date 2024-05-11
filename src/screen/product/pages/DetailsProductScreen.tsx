/* eslint-disable @typescript-eslint/no-shadow */
import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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
import {useDeleteProduct} from '../../../shared/hooks/useDeleteProduct';
import {DetailsSkeleton} from '../components/DetailsSkeleton';

export const DetailsProductScreen: FC<
  RootStackScreenProps<'DetailsProduct'>
> = ({navigation, route}) => {
  const product = route.params?.product;
  const [isLoading, setLoading] = useState(true);
  const {deleteProduct} = useDeleteProduct();
  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Failed to load data');
        setLoading(false);
      }
    };

    loadData();
  }, []);
  const handleOpenSheet = () => {
    bottomSheetRef.current?.expand();
  };
  const handleCloseSheet = () => {
    bottomSheetRef.current?.close();
  };
  const handleNavigate = () => {
    navigation.navigate('AddProduct', {product});
  };

  const handleConfirmDelete = () => {
    deleteProduct(product.id);
    handleCloseSheet();
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

  if (isLoading) {
    return (
      <View style={styles.container}>
        <DetailsSkeleton />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.id} testID="product-id">
        ID: {product.id}
      </Text>
      <Text style={styles.infoExtra}>Información extra</Text>

      <InfoSection label={'Nombre'} info={product.name} />
      <InfoSection label={'Descripción'} info={product.description} />
      <InfoSection label={'Logo'} info={product.logo} />
      <InfoSection
        label={'Fecha de liberación'}
        info={format(new Date(product.date_release), 'dd/MM/yyyy')}
      />
      <InfoSection
        label={'Fecha de revisión'}
        info={format(new Date(product.date_revision), 'dd/MM/yyyy')}
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
        handleIndicatorStyle={{display: 'none'}}
        backdropComponent={renderBackdrop}>
        <BottomSheetView style={styles.contentContainer}>
          <BottomSheetComponent
            onConfirm={handleConfirmDelete}
            onCancel={handleCloseSheet}
            productName={product.name}
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
