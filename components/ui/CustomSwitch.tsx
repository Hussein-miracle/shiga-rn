import { TouchableWithoutFeedback } from "react-native";
import React, { useEffect } from "react";

import Animated, {
  interpolateColor,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
} from "react-native-reanimated";

interface CustomSwitchProps {
  onSwitch?: (value: boolean) => void;
  switched?: boolean;
}
const CustomSwitch = ({ onSwitch, switched = false }: CustomSwitchProps) => {
  const ballTranslateX = useSharedValue(0);

  useEffect(() => {
    if (switched) {
      ballTranslateX.value = withSpring(24);
    } else {
      ballTranslateX.value = withSpring(0);
    }

    return () => {};
  }, [switched]);

  const progress = useDerivedValue(() => {
    return switched ? withTiming(24) : withTiming(0);
  });

  const backgroundColorStyle = useAnimatedStyle(() => {
    'worklet';
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 24],
      ["#36363A","#e2e8f0",]
    );
    return {
      backgroundColor,
    };
  });

  // Circle Animation
  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(ballTranslateX.value, {
            mass: 1,
            damping: 15,
            // stiffness: 120,
            // overshootClamping: false,
            // restSpeedThreshold: 0.001,
            // restDisplacementThreshold: 0.001,
          }),
        },
      ],
    };
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // console.log("switched CALL")
        onSwitch?.(!switched);
      }}
    >
      <Animated.View
        style={[
          {
            height: 30,
            width: 48,
            borderRadius: 20,
            backgroundColor: "#36363A",
            justifyContent: "center",
            paddingHorizontal: 2,
            paddingVertical: 2,
            position: "relative",
          },

          backgroundColorStyle,
        ]}
      >
        <Animated.View
          style={[
            {
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: "white",
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.2,
              shadowRadius: 2.5,
              elevation: 4,
            },
            customSpringStyles,
          ]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomSwitch;
