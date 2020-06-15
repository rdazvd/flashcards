import AsyncStorage from '@react-native-community/async-storage';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { Platform } from 'react-native';



const localNotification = {
  title: 'Mobile Flashcards Reminder',
  body: "👋 Don't forget to study for today!"
};

const schedulingOptions = {
  time: (new Date()).getTime() + 1000,
  repeat: 'day'
};

export const setLocalNotification = async () =>
  await Notifications.scheduleLocalNotificationAsync(
    localNotification,
    schedulingOptions
  );

export const askPermissions = async () => {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  if (Constants.isDevice && status === 'granted') {
    console.log('Notifications permissions granted;')
  }
};