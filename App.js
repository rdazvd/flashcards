import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Notifications } from 'expo';
import { 
  setLocalNotification,
  askPermissions
} from './utils/helpers';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  React.useEffect(() => {
    (async () => {
      await setLocalNotification();
      await askPermissions();
    })();
    
    const listener = Notifications.addListener(console.warn('ok! got your notification'));
    return () => listener.remove();
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