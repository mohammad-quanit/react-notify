// self.addEventListener('push', event => {
//   const data = event.data.json();
//   console.log('New Notification', data);
//   const options = {
//     body: data.body
//   }
//   event.waitUntil(
//     self.registration.showNotification(data.title, options)
//   )
// });

// importScripts("https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/7.6.2/firebase-messaging.js");

// firebase.initializeApp({
//   apiKey: "AIzaSyBK-m1PUUuWiDwf4Ud4qfZUJcccKrMjoz8",
//   authDomain: "react-notify-5e632.firebaseapp.com",
//   databaseURL: "https://react-notify-5e632.firebaseio.com",
//   projectId: "react-notify-5e632",
//   storageBucket: "react-notify-5e632.appspot.com",
//   messagingSenderId: "1030710516187",
//   appId: "1:1030710516187:web:a93ea8a0e518e1bd94affe",
//   measurementId: "G-0DPRZQDH35"
// });

// const messaging = firebase.messaging();

self.addEventListener('push', event => {
  const data = event.data.json();
  console.log('New Notification', data);
  const options = {
    body: data.body
  }
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  )
});

