// Thanks to Roman Tymchyk. https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

interface ISnackBarProvider {
  children: React.ReactNode;
}

interface ISnackBarContext {
  addAlert(content: any): void;
}

const SnackBarContext = createContext<ISnackBarContext>({} as ISnackBarContext);

const Message = (props: any) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      props.onHide();
    });
  }, []);

  return (
    <Animated.View
      style={[
        styles.animatedMessageContainer,
        {
          opacity,
          transform: [
            {
              translateY: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [-20, 0],
              }),
            },
          ],
        },
      ]}>
      <Text>{props.message}</Text>
    </Animated.View>
  );
};

export function SnackBarProvider({children}: ISnackBarProvider) {
  const [alerts, setAlerts] = useState<string[]>([]);

  const activeAlertIds = alerts.join(',');
  const itemsOnTheQueue = alerts.length;

  useEffect(() => {
    if (activeAlertIds.length > 0) {
      const TWO_SECONDS_IN_MILLISECONDS = 1000;
      const timeToShowIfThereIsASnackBeingShown =
        itemsOnTheQueue * TWO_SECONDS_IN_MILLISECONDS;

      const timer = setTimeout(
        () =>
          setAlerts((alertsWaiting) =>
            alertsWaiting.slice(0, alertsWaiting.length - 1),
          ),
        timeToShowIfThereIsASnackBeingShown,
      );

      return () => clearTimeout(timer);
    }
  }, [activeAlertIds, itemsOnTheQueue]);

  const addAlert = useCallback((content) => {
    setTimeout(() => {
      setAlerts((oldAlerts) => [content, ...oldAlerts]);
    }, 125);
  }, []);

  const value = {addAlert};

  return (
    <SnackBarContext.Provider value={value}>
      {children}
      <View style={styles.snackbar}>
        {alerts.map((alert, index) => (
          <Message
            key={`${index}-${alert}-snackbar`}
            message={alert}
            onHide={() => {
              setAlerts((oldAlert) =>
                oldAlert.filter((currentMessage) => currentMessage !== alert),
              );
            }}
          />
        ))}
      </View>
    </SnackBarContext.Provider>
  );
}

const styles = StyleSheet.create({
  snackbar: {
    width: '100%',
    position: 'absolute',
    bottom: '2%',
    left: 0,
    right: 0,
  },

  animatedMessageContainer: {
    margin: 10,
    marginBottom: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 6,
  },
});

export function useSnackBars() {
  const context = useContext(SnackBarContext);

  return context;
}
