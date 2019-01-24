const fireBase = require('../firebase');
const utils = require('../utils');

const db = fireBase.database();
const newsRef = db.ref('news');
const usersRef = db.ref('users');
const rolesRef = db.ref('roles');
const USER_ID = 'pnovikov'; // admin
// const USER_ID = 'dusanov'; // user

const getNewsSnapshot = () =>
  newsRef.once('value', s => s);

const getSnapshotById = (ref, id) =>
  ref.orderByChild('id').equalTo(id).once('value', s => s);

const getSnapShotItemValue = async (ref, id) => {
  const snapshot = await getSnapshotById(ref, id);
  return snapshot.val();
};


module.exports = {

  getNews: async (req, res) => {
    const newsSnapshot = await getNewsSnapshot();

    return res.status(200).send(Object.values(newsSnapshot.val()));
  },

  getNewsItem: async (req, res) => {
    const { params: { id } } = req;
    const newsSnapshotValue = await getSnapShotItemValue(newsRef, id);

    // since we receive object like this: { -asd8csd0sdd: { } } we need to get property name by Object.keys:
    const item = newsSnapshotValue[Object.keys(newsSnapshotValue)[0]];

    return res.status(200).send(item);
  },

  createNews: async (req, res) => {
    const date = new Date().getTime();
    const newsItem = {
      ...req.body,
      id: utils.guid(),
      authorId: USER_ID,
      dateCreated: date,
      dateUpdated: date
    };

    await newsRef.push(newsItem);

    return res.status(200).send(newsItem);
  },

  updateNews: async (req, res) => {
    const { id } = req.body;
    const dateUpdated = new Date().getTime();
    const updatedNewsItem = {
      ...req.body,
      dateUpdated
    };

    const snapshotItemValue = await getSnapShotItemValue(newsRef, id);
    const key = Object.keys(snapshotItemValue)[0];

    await db.ref(`news/${key}`).set(updatedNewsItem);

    return res.status(200).send(updatedNewsItem);
  },

  deleteNews: async (req, res) => {
    const { params: { id } } = req;
    const newsItemSnapshot = await getSnapshotById(newsRef, id);
    await newsItemSnapshot.forEach(s => s.ref.remove());

    return res.status(200).send(true);
  },

  getUserInfo: async (req, res) => {
    const usersSnapshotValue = await getSnapShotItemValue(usersRef, USER_ID);
    // hope we will remove .find(u => u) when create those entities using firebase functionality
    const user = usersSnapshotValue.find(u => u);
    const rolesSnapshotValue = await getSnapShotItemValue(rolesRef, user.roleId);
    // hope we will remove .find(r => r) when create those entities using firebase functionality
    const role = rolesSnapshotValue.find(r => r);

    return res.status(200).send({
      ...user,
      role
    });
  }
};
