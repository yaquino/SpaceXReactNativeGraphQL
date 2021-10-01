import React, { FC, ReactElement } from 'react'
import {
  Text
} from 'react-native';

type CustomTextProps = {
    style: string,
    text: string,
    url: string,
}

const getStyle = (style:string) : object => {
    switch (style) {
        case "Title":
            return { color: "#777", paddingTop: 5 };
        case "Detail":
            return { color: "#FFF", paddingTop: 3 };
        default:
            return { color: "#FFF", paddingTop: 5 };
    }
}

const CustomText: FC<CustomTextProps> = ({ style, text, url}): ReactElement => {

  return (
    <Text style={getStyle(style)}>{text}</Text>
  )
};
export default CustomText;