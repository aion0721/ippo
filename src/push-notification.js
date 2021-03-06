import firebase from 'firebase/app';
import 'firebase/messaging';

const messagingSenderId = '911143219860';

export const initializeFirebase = () => {
  console.log(messagingSenderId);
  firebase.initializeApp({
    messagingSenderId,
  });
};

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    return messaging.getToken();
  } catch (error) {
    console.error(error);
  }
};
