import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyACdnAPCGOAssAPhmBSTmBVwOcC2Fo1dEk",
  authDomain: "photo-gallery-2193d.firebaseapp.com",
  projectId: "photo-gallery-2193d",
  storageBucket: "photo-gallery-2193d.appspot.com",
  messagingSenderId: "190988179183",
  appId: "1:190988179183:web:ac87af3a5f5a8cd3de6d1a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectstorage = firebase.storage();
const projectfirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectstorage, projectfirestore, timestamp };
