import { StyleProp, ViewStyle } from 'react-native';
interface Props {
    colors: Array<string>;
    start?: string;
    end?: string;
    styles?: StyleProp<ViewStyle> | undefined;
    maxWidth: number;
    onColorChange: (color: string) => void;
    cicrleSize?: number;
}
declare const ColorPicker: ({ colors, start, end, styles, maxWidth, onColorChange, cicrleSize, }: Props) => any;
export default ColorPicker;
