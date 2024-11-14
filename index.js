const { createServer } = require('node:http');

// const hostname = 'localhost';
const port = 3004;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('node push project updated');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});



// const webpush = require('web-push');

// const vapidKeys = {
//     publicKey: 'BMoNTRJjiXUSB2YW7_YsjUuDVLPB2EwZsIgHB4452NUpftBd3n80TXz_PBKMM5dS3m4RDDP8ZqFosqDwO0X197U',
//     privateKey: 'e_qcqUW5Jb9LpZwg3DyU8uXt8DLCgYrmKoPE0oeaUNI'
// };

// // get client subscription config from db
// const subscription = {
//     endpoint: 'https://fcm.googleapis.com/fcm/send/cbx2QC6AGbY:APA91bEjTzUxaBU7j-YN7ReiXV-MD-bmk2pGsp9ZVq4Jj0yuBOhFRrUS9pjz5FMnIvUenVqNpALTh5Hng7HRQpcUNQMFblTLTF7aw-yu1dGqhBOJ-U3IBfnw3hz9hq-TJ4K5f9fHLvjY',
//     expirationTime: null,
//     keys: {
//         "p256dh": "BOXYnlKnMkzlMc6xlIjD8OmqVh-YqswZdut2M7zoAspl1UkFeQgSLYZ7eKqKcx6xMsGK7aAguQbcG9FMmlDrDIA=",
//         "auth": "if-YFywyb4g-bFB1hO9WMw=="
//     },
// };

// const payload = {
//     notification: {
//         title: 'Title',
//         body: 'This is my body',
//         icon: 'assets/icons/icon-384x384.png',
//         actions: [
//             { action: 'bar', title: 'Focus last' },
//             { action: 'baz', title: 'Navigate last' },
//         ],
//         data: {
//             onActionClick: {
//                 default: { operation: 'openWindow' },
//                 bar: {
//                     operation: 'focusLastFocusedOrOpen',
//                     url: '/signin',
//                 },
//                 baz: {
//                     operation: 'navigateLastFocusedOrOpen',
//                     url: '/signin',
//                 },
//             },
//         },
//     },
// };

// const options = {
//     vapidDetails: {
//         subject: 'mailto:example_email@example.com',
//         publicKey: vapidKeys.publicKey,
//         privateKey: vapidKeys.privateKey,
//     },
//     TTL: 60,
// };

// // send notification
// webpush.sendNotification(subscription, JSON.stringify(payload), options)
//     .then((_) => {
//         console.log('SENT!!!');
//         console.log(_);
//     })
//     .catch((_) => {
//         console.log(_);
//     });
