const admin = require("firebase-admin");

const serviceAccount = require("./grid-events-4c67f-firebase-adminsdk-mqxq9-c1c92e2997.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://grid-events-4c67f.firebaseio.com"
});

const db = admin.database();
const ref = db.ref("news");

// todo: remove it. just for demo functionality
ref.once("value", snapshot => console.log(snapshot.val()));
