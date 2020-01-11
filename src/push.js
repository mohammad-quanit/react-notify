import firebase from "firebase";
export const initializeFirebaseWithFCMToken = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyBK-m1PUUuWiDwf4Ud4qfZUJcccKrMjoz8",
    authDomain: "react-notify-5e632.firebaseapp.com",
    databaseURL: "https://react-notify-5e632.firebaseio.com",
    projectId: "react-notify-5e632",
    storageBucket: "react-notify-5e632.appspot.com",
    messagingSenderId: "1030710516187",
    appId: "1:1030710516187:web:a93ea8a0e518e1bd94affe",
    measurementId: "G-0DPRZQDH35"
  });
  const messaging = firebase.messaging();
  messaging
    .requestPermission()
    .then(() => {
      console.log("Have Permission");
      return messaging.getToken();
    })
    .then(token => {
      console.log(token);
    })
    .catch(err => console.error(err));

  // Add the public key generated from the console here.
  messaging.usePublicVapidKey("BMaXuaXZq6zzZxmu62TpvDaN-4Kj5rp_2Wz1DbEFCiXVDWNMRLjQY2ymMEwdVf0IXQQJV7tGoS48wh9Sea7aAn0");

  // onMesssage event for getting payload from notification
  messaging.onMessage(function(payload) {
    console.log("onMessage", payload);
  });
};
