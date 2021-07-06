import firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyBoQZ35Y0PWdorHLxSaTufTh4ShCCFkmVY",
    authDomain:"my-portfolio-74167.firebaseapp.com",
    projectId:"my-portfolio-74167",
    storageBucket: "my-portfolio-74167.appspot.com",
    messagingSenderId: "700114544177",
    appId: "1:700114544177:web:2c64b01ee4e791e9495710",
    measurementId: "G-82CEP9VJK7"
  };
  // Initialize Firebase
 var fire=firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default fire;
