const fireBase = require('../firebase');

const db = fireBase.database();

module.exports = {

  getNews: (req, res) => {
    const ref = db.ref("news");

    ref.once("value", snapshot => res.status(200).send(snapshot.val()));
  },

  getUserInfo: (req, res) => {
    const { id } = req.query;
    const ref = db.ref("users");

    // todo: may be we can use stored procedures on firebase?
    ref.once("value", snapshot => {
      const users = snapshot.val();

      return res.status(200).send(users.find(user => user.id === id));
    });
  }
};
