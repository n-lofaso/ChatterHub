const { Post, User } = require('../model')
const router = require('express').Router();

router.get('/', async (req, res) => {
  console.log(req.session.loggedIn)
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get(`/video-games`, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        interest_id: 'video-games'
      },
      include: [{
        model: User,
        attributes: ['name']
      }],
    }); 
    const posts = postData.map((post) => post.get({ plain: true}))
    console.log(posts)
    res.render('post', { posts, loggedIn: req.session.loggedIn});
  }
  catch(err) {
    res.json(err)
  }
});

router.get(`/food-and-travel`, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        interest_id: 'food-and-travel'
      },
      include: [{
        model: User,
        attributes: ['name']
      }],
    }); 
    const posts = postData.map((post) => post.get({ plain: true}))
    console.log(posts)
    res.render('post', { posts, loggedIn: req.session.loggedIn});
  }
  catch(err) {
    res.json(err)
  }
});

router.get(`/lfg`, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        interest_id: 'lfg'
      },
      include: [{
        model: User,
        attributes: ['name']
      }],
    }); 
    const posts = postData.map((post) => post.get({ plain: true}))
    console.log(posts)
    res.render('post', { posts, loggedIn: req.session.loggedIn});
  }
  catch(err) {
    res.json(err)
  }
});

router.get(`/movies-and-television`, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        interest_id: 'movies-and-television'
      },
      include: [{
        model: User,
        attributes: ['name']
      }],
    }); 
    const posts = postData.map((post) => post.get({ plain: true}))
    console.log(posts)
    res.render('post', { posts, loggedIn: req.session.loggedIn});
  }
  catch(err) {
    res.json(err)
  }
});

router.get(`/music`, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        interest_id: 'music'
      },
      include: [{
        model: User,
        attributes: ['name']
      }],
    }); 
    const posts = postData.map((post) => post.get({ plain: true}))
    console.log(posts)
    res.render('post', { posts, loggedIn: req.session.loggedIn});
  }
  catch(err) {
    res.json(err)
  }
});

router.get(`/technology`, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        interest_id: 'technology'
      },
      include: [{
        model: User,
        attributes: ['name']
      }],
    }); 
    const posts = postData.map((post) => post.get({ plain: true}))
    console.log(posts)
    res.render('post', { posts, loggedIn: req.session.loggedIn});
  }
  catch(err) {
    res.json(err)
  }
});

module.exports = router;