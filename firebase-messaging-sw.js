// firebase-messaging-sw.js
// Service Worker for Push Notifications

// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// ⚠️ חשוב: שנה את ה-Firebase Config לפי הלקוח!
// העתק מקובץ config.js
const firebaseConfig = {
  apiKey: "AIzaSyBa_bkTFU29mIVy1yu5ENBSP7ejFqLIrwM",
  authDomain: "karinnails.firebaseapp.com",
  projectId: "karinnails",
  storageBucket: "karinnails.firebasestorage.app",
  messagingSenderId: "1011926506789",
  appId: "1:1011926506789:web:9bc72f4f3654ef697c8ecc",
  measurementId: "G-0NJSZJ0KZF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get messaging instance
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('Background message received:', payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        tag: 'appointment-notification',
        requireInteraction: true
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});