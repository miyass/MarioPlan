import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCpXnwM70DU3bTTd3hjPSwdPavhqvm8sf0",
  authDomain: "net-ninja-marioplan-1b3a5.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-1b3a5.firebaseio.com",
  projectId: "net-ninja-marioplan-1b3a5",
  storageBucket: "net-ninja-marioplan-1b3a5.appspot.com",
  messagingSenderId: "243093704151"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;
