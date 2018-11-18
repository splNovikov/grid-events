module.exports = {

  getNews: (req, res) => {
    console.log('get news');

    setTimeout(() => {
      res.status(200).send('todo: return data from firebase');
    }, 600)
  }
};
