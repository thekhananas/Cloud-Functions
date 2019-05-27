const functions = require('firebase-functions');
const admin = require('firebase-admin');

//admin.initializeApp(functions.config().firebase);

//exports.helloworld = functions.https.onRequest((req, res) =>{

   //res.send("Hello World Ozone Here");
   

//});

//exports.helloworld = functions.https.schedule('every 5 minutes').onRequest((req, res) =>{

//   res.send("Hello World Ozone Here");
   

//});

exports.scheduledFunctionCrontab =
functions.pubsub.schedule('5 11 * * *').onRun((context) => {
  console.log('This will be run every day at 11:05 AM UTC!');
});
