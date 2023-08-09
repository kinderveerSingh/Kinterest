import {initializeApp} from '@react-navigation/native';
import {getAuth, initializeAuth} from 'firebase/auth';
import {getStorage} from '@firebase/storage';
import firestore from '@react-native-firebase/firestore';
const firebaseConfig = {
  appId: '1:788072331181:android:9b2f26b549eb03a834d324',
  storageBucket: 'gs://kinterest-dac68.appspot.com',
  projectId: 'kinterest-dac68',
  databaseURL: 'https://kinterest-dac68-default-rtdb.firebaseio.com',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
