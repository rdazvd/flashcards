import AsyncStorage from '@react-native-community/async-storage';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

const NOTIFICATION_KEY = 'MobileFlashCards:notifications';

export const clearLocalNotification = async () =>
  await AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync());

export const createNotification = () => ({
  title: 'Study!',
  body: '👋 Don\'t forget to study today!',
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true
  }
});

export const setLocalNotification = async  () => {
  await AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              );

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
              console.warn('Notification set');
            }
          });
      }
    });
};