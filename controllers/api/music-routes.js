const router = require('express').Router();
const {Post, Comment} = require ('../../Models');
const withAuth = require('../../utils/auth');

//Music Route

//GET all posts for Music page

router.get('/', withAuth, async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
        include: [
          {
            model: Comment,
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

  router.post('/', withAuth, async (req, res) => {
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


  router.delete('/:id', withAuth, async (req, res) => {
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