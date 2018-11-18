const fireBase = require('../firebase');

const db = fireBase.database();

module.exports = {

  getNews: (req, res) => {
    const ref = db.ref("news");

    ref.once("value", snapshot => res.status(200).send(snapshot.val()));
  }
};
