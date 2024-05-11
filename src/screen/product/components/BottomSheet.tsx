import React, {FC} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import ButtonComponent from '../../../shared/components/button/ButtonComponent';

interface BottomSheetProps {
  onConfirm: () => void;
  onCancel: () => void;
  productName: string;
}

const BottomSheetComponent: FC<BottomSheetProps> = ({
  onConfirm,
  onCancel,
  productName,
}) => {
  return (
    <>
      <Pressable style={styles.close} onPress={onCancel}>
        <Text>X</Text>
      </Pressable>
      <View style={styles.divider} />
      <View style={styles.warningContainer}>
        <Text style={{textAlign: 'center'}}>
          Estas seguro de eliminar el producto {productName}?
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.containerButtonModal}>
        <ButtonComponent
          styleType="primary"
          title="Confirmar"
          onPress={onConfirm}
        />
        <ButtonComponent
          containerStyle={{top: 15}}
          styleType="secondary"
          title="Cancelar"
          onPress={onCancel}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  divider: {
    borderWidth: 0.7,
    width: '100%',
    borderColor: '#e1e1e1',
  },
  close: {
    alignSelf: 'flex-end',
    right: 20,
    paddingVertical: 2,
    fontSize: 20,
  },
  warningContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  containerButtonModal: {
    width: '100%',
    top: 20,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
});

export default BottomSheetComponent;
