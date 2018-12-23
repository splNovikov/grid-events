const _ = require('lodash');
const fireBase = require('../firebase');

const db = fireBase.database();
const newsRef = db.ref('news');
const usersRef = db.ref('users');
const rolesRef = db.ref('roles');
const USER_ID = 'pnovikov'; // admin
// const USER_ID = 'dusanov'; // user

const getNewsSnapshot = () =>
  newsRef.once('value', s => s);

const getUsersSnapshot = userId =>
  usersRef.orderByChild('id').equalTo(userId).once('value', s => s);

const getRolesSnapshot = roleId =>
  rolesRef.orderByChild('id').equalTo(roleId).once('value', s => s);

module.exports = {

  getNews: async (req, res) => {
    const newsSnapshot = await getNewsSnapshot();

    return res.status(200).send(Object.values(newsSnapshot.val()));
  },

  createNews: async (req, res) => {
    const date = new Date().getTime();
    const newsItem = {
      ...req.body,
      id: _.uniqueId(),
      authorId: USER_ID,
      dateCreated: date,
      dateUpdated: date
    };

    await newsRef.push(newsItem);

    return res.status(200).send(newsItem);
  },

  getUserInfo: async (req, res) => {
    const usersSnapshot = await getUsersSnapshot(USER_ID);
    const user = usersSnapshot.val().find(u => u);
    const rolesSnapshot = await getRolesSnapshot(user.roleId);
    const role = rolesSnapshot.val().find(r => r);

    return res.status(200).send({
      ...user,
      role
    });
  }
};
