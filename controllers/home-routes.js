const { Interests, Post, User } = require('../model')
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

const getPath = 'video-games'

router.get(`/${getPath}`, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        interests_id: `${getPath}`
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
})

module.exports = router;