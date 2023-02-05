const router = require('express').Router();
const {Post, Comment} = require ('../../Models')
const withAuth = require('../../utils/auth')

//LFG Route

//GET all posts for LFG page

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
      const newProject= await Project.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const projectData = await Project.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: '' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;