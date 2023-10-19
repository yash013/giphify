// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXr-SIOCRDOg2bI1qhUdO0NZJ1y9Fry7Q",
  authDomain: "giphy-search-f4bed.firebaseapp.com",
  projectId: "giphy-search-f4bed",
  storageBucket: "giphy-search-f4bed.appspot.com",
  messagingSenderId: "73804337732",
  appId: "1:73804337732:web:b997b797e207f28c6fe211",
  measurementId: "G-63CWEK9DH1"
};

// Initialize Firebase
if (!getApps().length) {
	initializeApp(firebaseConfig);
}
// Initialize Firebase auth
export const auth = getAuth();