const { Interests, Post } = require('../model')
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

router.get('/:id', async (req, res) => {
  try {
    const interestData = await Interests.findAll({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Post,
          where: { interests_id: id}
        }
      ]
    }); 
    const interests = interestData.map((interest) => interest.get({ plain: true}))

    res.render('homepage', { ...interests, loggedIn: req.session.loggedIn});
  }
  catch(err) {
    res.json(err)
  }
})

module.exports = router;