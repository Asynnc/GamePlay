import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import discordIMG from '../../assets/discord.png'

type ButtonProps = TouchableOpacityProps & {
  title: string,
}

import { styles } from './styles';

const ButtonIcon: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <TouchableOpacity 
    style={styles.container} 
    {...rest}>
      <View style={styles.iconWrapper} >
        <Image source={discordIMG} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export { ButtonIcon };