import firebase from "firebase";
export const initializeFirebaseWithFCMToken = () => {
  firebase.initializeApp({
    apiKey: "************",
    authDomain: "*********",
    databaseURL: "*********",
    projectId: "*******",
    storageBucket: "******.appspot.com",
    messagingSenderId: "*********",
    appId: "***************",
    measurementId: "***********"
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
