const router = require('express').Router();
const {Post, Comments} = require ('./model')
const withAuth = require('../utils/auth')

//Movies and TV Route

//GET all posts for Movies and Television page

router.get('/movies-and-television', withAuth, async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
        include: [
          {
            model: Comments,
            attributes: ['filename', 'description'],
          },
        ],
      });
  
      const posts = dbPostData.map((post) =>
        post.get({ plain: true })
      );
  
      res.render('homepage', {
        posts,
        logged_in: req.session.logged_in

      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  

  