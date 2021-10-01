import React, { FC, ReactElement } from 'react'
import {
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type IconButtonProps = {
    handleOnPress: () => void,
    style: object,
    iconSize: number, 
    iconColor: string, 
    iconName: any,
}

const IconButton: FC<IconButtonProps> = ({ handleOnPress, style, iconSize, iconColor, iconName}): ReactElement => {
  return (
          <TouchableOpacity
            style={style} 
            onPress={handleOnPress}
          >
            <Ionicons
              name={iconName}
              size={iconSize}
              color={iconColor}
            />
          </TouchableOpacity>
  )
};
export default IconButton;