import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';

type ButtonStyle = 'primary' | 'secondary' | 'danger';

interface ButtonComponentProps {
  onPress: () => void;
  styleType?: ButtonStyle;
  title: string;
  disable?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 55,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  buttonPrimary: {
    backgroundColor: '#ffdd02',
  },
  textPrimary: {
    color: '#22292a',
  },
  buttonSecondary: {
    backgroundColor: '#e9ecf3',
  },
  textSecondary: {
    color: '#22292a',
  },
  buttonDanger: {
    backgroundColor: '#d50707',
  },
  textDanger: {
    color: 'white',
  },
});

const ButtonComponent: FC<ButtonComponentProps> = ({
  title,
  onPress,
  styleType = 'primary',
  disable = false,
  buttonStyle,
  textStyle,
  containerStyle,
}) => {
  const typeStyles = {
    primary: {
      button: styles.buttonPrimary,
      text: styles.textPrimary,
    },
    secondary: {
      button: styles.buttonSecondary,
      text: styles.textSecondary,
    },
    danger: {
      button: styles.buttonDanger,
      text: styles.textDanger,
    },
  }[styleType];

  return (
    <View style={[styles.container, typeStyles.button, containerStyle]}>
      <TouchableOpacity
        disabled={disable}
        onPress={onPress}
        style={[styles.button, buttonStyle]}>
        <Text style={[styles.text, typeStyles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;
