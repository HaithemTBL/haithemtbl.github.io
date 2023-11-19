firebase.initializeApp({
    messagingSenderId: "204981974196"
  });
  const messaging = firebase.messaging();
  
messaging.setBackgroundMessageHandler(payload => {
    const notification = JSON.parse(payload.data.notification);
    const notificationTitle = notification.title;
    const notificationOptions = {
      body: notification.body
    };
    //Show the notification :)
    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });