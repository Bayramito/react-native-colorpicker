# React Native ColorPicker

*A very basic color picker for React Native. Created with Reanimated 2*

## Description
IMPORTANT! <br>
With this picker you can get the HEX/DEC color codes of your selected color, you can set your own color palette and use them wherever you wish.

## Preview
![ezgif-3-4c9d63a9eb](https://github.com/Bayramito/react-native-colorpicker/assets/44513402/10caf76c-d821-4ef1-b308-33cc2b1add99)

## Note
Make sure you have following packages installed on your project.
```
npm i react-native-linear-gradient
npm i react-native-reanimated
npm i react-native-gesture-handler
```
If you alredy have them, you can skip this.
## Installation

```
npm i @bayramitto/react-native-colorpicker 
```

## Usage

```javascript
import ColorPicker from "@bayramitto/react-native-colorpicker";
```

```javascript
const App = () => {
  const [bg, setBg] = useState('#000');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bg,
      }}>
      <ColorPicker
        styles={{
          width: 200,
          height: 15,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#fff',
        }}
        onColorChanged={color => {
          setBg(color);
        }}
      />
    </View>
  );
};
```

## Properties

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| colors | - | `Array`   | You can define your own color palette in Array of HEX codes eg. ["#fa3261","#c9a221"] 
| *style (Required) | - | `object` | Specify the style of the ColorPicker. ( `width` and `height` values REQUIRED ) |
| onColorChanging| - |`callback`| Returns output format of the `interpolateColors` from Reanimated 2
| *onColorChanged (Required)| - |`callback`| Returns hex code of selected color eg. `#e5ca55`.
|circleSize| - | number | Size of the circle on picker.



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
