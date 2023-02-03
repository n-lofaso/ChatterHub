const router = require('express').Router();
const {Post, Comment} = require ('./model')

//Video Game Route

//GET all posts for video-games page

router.get('/video-games', async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
        include: [
          {
            model: Post, Comment,
            attributes: ['name'],
          },
        ],
  });
  
      const posts = dbPostData.map((post) =>
        posts.get({ plain: true })
      );
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  router.post('/video-games', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });

      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  router.delete('/video-games/:id', withAuth, async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });

      const postData = await Post.destroy({
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
        },
      });
  
      if (!commentData||!postData) {
        res.status(404).json({ message: 'Post not found' });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;