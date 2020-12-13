// Thanks to Roman Tymchyk. https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {StyleSheet, Text} from 'react-native';

interface ISnackBarProvider {
  children: React.ReactNode;
}

interface ISnackBarContext {
  addAlert(content: any): void;
}

const SnackBarContext = createContext<ISnackBarContext>({} as ISnackBarContext);

export function SnackBarProvider({children}: ISnackBarProvider) {
  const [alerts, setAlerts] = useState<string[]>([]);

  const activeAlertIds = alerts.join(',');
  const itemsOnTheQueue = alerts.length;

  useEffect(() => {
    if (activeAlertIds.length > 0) {
      const TWO_SECONDS_IN_MILLISECONDS = 2000;
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

  const addAlert = useCallback(
    (content) => setAlerts((oldAlerts) => [content, ...oldAlerts]),
    [],
  );

  const value = {addAlert};

  return (
    <SnackBarContext.Provider value={value}>
      {children}
      {alerts.map((alert) => (
        <Text style={styles.snackbar} key={`${alert}-snackbar`}>
          {alert}
        </Text>
      ))}
    </SnackBarContext.Provider>
  );
}

const styles = StyleSheet.create({
  snackbar: {
    position: 'absolute',
    bottom: '2%',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export function useSnackBars() {
  const context = useContext(SnackBarContext);

  return context;
}
