import React, {FC} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface InfoSectionProps {
  label: string;
  info: string;
}

export const InfoSection: FC<InfoSectionProps> = ({label, info}) => (
  <View style={styles.infoContainer}>
    <Text style={styles.label}>{label}</Text>
    {label === 'Logo' ? (
      <Image source={{uri: info}} style={styles.logoPlaceholder} />
    ) : (
      <Text style={styles.info}>{info}</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  info: {
    fontSize: 16,
  },
  logoPlaceholder: {
    width: 240,
    height: 120,
    margin: 25,
  },
});
