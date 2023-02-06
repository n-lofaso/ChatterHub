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

router.get('/:interest', async (req, res) => {
  try {
    const interestData = Interest.findAll({
      where: {
        id: req.params.id
      }
    }); 
    res.render('interests', interestData);
  }
  catch {
    res.json(err)
  }
})

module.exports = router;