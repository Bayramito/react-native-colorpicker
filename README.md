# React Native ColorPicker

*A very basic color picker for React Native. Created with Reanimated 2*

## Description
IMPORTANT! <br>
With this picker you can get the color code output in Reanimated format, then you can use it any other `Animated` component via `useAnimatedStyle` in Reanimated 2.

## Demo
https://user-images.githubusercontent.com/44513402/191630954-f5b720a9-c94c-4e47-9882-799037860f23.mp4

## Installation

```
npm i @bayramitto/react-native-colorpicker
```

## Usage

```javascript
import ColorPicker from "@bayramitto/react-native-colorpicker";
```

```javascript
const backgroundColor = useSharedValue("#17203A");
const containerAnimatedStyle = useAnimatedStyle(() => ({
      backgroundColor: backgroundColor.value,
    }));
<Animated.View style={[styles.container, containerAnimatedStyle]}>
  <ColorPicker
      colors={[ "#17203A","#fd79a8",
                "#8e44ad","#10ac84",
                "#8395a7","#ecf0f1",
                "#ff9ff3","#2e86de",
                "#fdcb6e","#00cec9",
                ]}
      styles={{
        width: 270,
        height: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#fff",
       }}
      maxWidth={270}
      onColorChange={color => {
       backgroundColor.value = color;
      }}
  />
</Animated.View>
```

## Properties

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| colors | - | `Array`   |Array of color palette eg ( ["red","#4cf21a","cyan","purple] )
| style | - | `object` | Specify the style of the ColorPicker, eg. width, height...  |
| maxWidth | - | `number` | Maximum `width` of the picker |
| onColorChange| - |`callback`| Returns selected color 



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
