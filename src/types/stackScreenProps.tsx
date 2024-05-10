import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './stackParamList';

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
