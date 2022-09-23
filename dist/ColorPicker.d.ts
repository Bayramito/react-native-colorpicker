import { StyleProp, ViewStyle } from 'react-native';
interface Props {
    colors?: Array<string>;
    styles?: StyleProp<ViewStyle> | undefined;
    onColorChanged: (hex: string) => void;
    onColorChanging?: (dec: string) => void;
    cicrleSize?: number;
    initial?: number | string;
}
declare const ColorPicker: ({ colors, styles, onColorChanging, onColorChanged, cicrleSize, }: Props) => any;
export default ColorPicker;
