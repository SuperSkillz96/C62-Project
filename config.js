import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCkc7L8hcCT5KIIMbGedaE0kn_LX0PLMC4",
  authDomain: "c60-project-99716.firebaseapp.com",
  databaseURL: "https://c60-project-99716-default-rtdb.firebaseio.com",
  projectId: "c60-project-99716",
  storageBucket: "c60-project-99716.appspot.com",
  messagingSenderId: "189910953310",
  appId: "1:189910953310:web:96d005a6c2101bdf0973cf"
};



const app = firebase.initializeApp(firebaseConfig);

export default firebase.database();