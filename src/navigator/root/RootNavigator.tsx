import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/stackParamList';
import {HomeScreen} from '../../screen/home/HomeScreen';
import {DetailsProductScreen} from '../../screen/product/pages/DetailsProductScreen';
import {AddProduct} from '../../screen/product/pages/AddProduct';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: FC = () => {
  return (
    <RootStack.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerBackTitleVisible: false}}>
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerTitle: 'Banco'}}
      />
      <RootStack.Screen
        name="DetailsProduct"
        component={DetailsProductScreen}
        options={{headerTitle: 'Detalle'}}
      />
      <RootStack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{headerTitle: 'Nuevo Producto'}}
      />
    </RootStack.Navigator>
  );
};
