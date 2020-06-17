import React from 'react';
import { StyleSheet, View } from 'react-native';
import { setLocalNotification } from './utils/helpers';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  React.useEffect(() => {
    (async () => {
      await setLocalNotification();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});

export default App;