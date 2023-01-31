const router = require('express').Router();
const {Post, Comments} = require ('./model')

//Video Game Route

//GET all posts for video-games page

router.get('/video-games', async (req, res) => {
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
  