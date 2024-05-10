import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/stackParamList';
import {HomeScreen} from '../../screen/home/HomeScreen';
import {DetailsProductScreen} from '../../screen/product/pages/DetailsProductScreen';
import {AddProduct} from '../../screen/product/pages/AddProduct';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: FC = () => {
  return (
    <RootStack.Navigator initialRouteName={'Home'}>
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerTitle: 'Banco'}}
      />
      <RootStack.Screen
        name="DetailsProduct"
        component={DetailsProductScreen}
      />
      <RootStack.Screen name="AddProduct" component={AddProduct} />
    </RootStack.Navigator>
  );
};
