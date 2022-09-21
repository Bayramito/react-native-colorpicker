import React, {useCallback} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  interpolateColor,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  colors: Array<string>;
  start: string;
  end: string;
  styles: string;
  maxWidth: number;
  onColorChange: (color: string) => void;
  cicrleSize: number;
}
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const ColorPicker = ({
  colors,
  start,
  end,
  styles,
  maxWidth,
  onColorChange,
  cicrleSize,
}: Props) => {
  const PICKER_SIZE = cicrleSize || 25;
  const INTERNAL_PICKER = PICKER_SIZE * 0.8;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const active = useSharedValue(0);
  const defaultStyles = {
    width: maxWidth - PICKER_SIZE,
    height: 40,
    borderRadius: 5,
  };
  const onChange = useCallback(
    (color: string) => {
      onColorChange(color);
    },
    [onColorChange],
  );
  const scale = useSharedValue(1);
  const adjustTranslateX = useDerivedValue(() => {
    return Math.min(Math.max(translateX.value, 0), maxWidth - PICKER_SIZE);
  });
  const onEnd = useCallback(() => {
    'worklet';
    translateY.value = withTiming(0);
    scale.value = withTiming(1);
    active.value = 0;
  }, []);
  const panGestureEevent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.translateX = adjustTranslateX.value;
      translateY.value = withTiming(-PICKER_SIZE);
      scale.value = withTiming(1.2);
      active.value = withTiming(1);
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.translateX + event.translationX;
      active.value = withTiming(1);
    },
    onEnd,
  });

  const tapGestureEvent = useAnimatedGestureHandler({
    onStart: event => {
      translateY.value = withTiming(-PICKER_SIZE);
      scale.value = withTiming(1.2);
      translateX.value = withTiming(event.absoluteX - PICKER_SIZE);
      active.value = withTiming(1);
    },
    onEnd,
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: adjustTranslateX.value},
        {scale: scale.value},
        {
          translateY: translateY.value,
        },
      ],
    };
  });
  const arrowStyle = useAnimatedStyle(() => {
    return {
      opacity: active.value,
    };
  });

  const rInternal = useAnimatedStyle(() => {
    const inputRange = colors.map(
      (_, index) => (index / colors.length) * maxWidth,
    );
    const backgroundColor = interpolateColor(
      translateX.value,
      inputRange,
      colors,
    );
    runOnJS(onChange)(backgroundColor);
    return {
      backgroundColor,
    };
  });

  const compStyles = StyleSheet.create({
    picker: {
      position: 'absolute',
      backgroundColor: '#fff',
      width: PICKER_SIZE,
      height: PICKER_SIZE,
      borderRadius: PICKER_SIZE / 2,
      justifyContent: 'center',
      alignItems: 'center',
      left: -PICKER_SIZE / 2,
    },
    internalPicker: {
      backgroundColor: 'red',
      width: INTERNAL_PICKER,
      height: INTERNAL_PICKER,
      borderRadius: INTERNAL_PICKER / 2,
    },
    arrow: {
      position: 'absolute',
      bottom: -INTERNAL_PICKER / 2,
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderLeftWidth: INTERNAL_PICKER / 2,
      borderRightWidth: INTERNAL_PICKER / 2,
      borderTopWidth: INTERNAL_PICKER / 2,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderColor: '#FFF',
    },
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <TapGestureHandler onGestureEvent={tapGestureEvent}>
        <Animated.View>
          <PanGestureHandler onGestureEvent={panGestureEevent}>
            <Animated.View style={{justifyContent: 'center'}}>
              <LinearGradient
                colors={colors}
                start={start || {x: 0, y: 0}}
                end={end || {x: 1, y: 0}}
                style={styles || defaultStyles}
              />
              <Animated.View style={[compStyles.picker, rStyle]}>
                <Animated.View style={[compStyles.internalPicker, rInternal]} />
                <Animated.View style={[compStyles.arrow, arrowStyle]} />
              </Animated.View>
            </Animated.View>
          </PanGestureHandler>
        </Animated.View>
      </TapGestureHandler>
    </GestureHandlerRootView>
  );
};

export default ColorPicker;
