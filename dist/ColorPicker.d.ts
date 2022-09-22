import { StyleProp, ViewStyle } from 'react-native';
interface Props {
    colors?: Array<string>;
    styles?: StyleProp<ViewStyle> | undefined;
    onColorChange: (dec: string, hex: string, initial: number) => void;
    cicrleSize?: number;
    initial?: number;
}
declare const ColorPicker: ({ colors, styles, onColorChange, cicrleSize, initial, }: Props) => any;
export default ColorPicker;
