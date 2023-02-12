const router = require('express').Router();
const {Post, Comment, Interests} = require ('../../model')

//LFG Route

//GET all posts for LFG page

router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        interest_id: 'lfg'
      },
      include: 
        [Interests, Comment]
    });

    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );
  
    
    res.status(200).json(posts)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  });

  router.post('/', async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  // router.delete('/:id', async (req, res) => {
  //   try {
  //     const projectData = await Project.destroy({
  //       where: {
  //         id: req.params.id,
  //         user_id: req.session.user_id,
  //       },
  //     });
  
  //     if (!projectData) {
  //       res.status(404).json({ message: '' });
  //       return;
  //     }
  
  //     res.status(200).json(projectData);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });

  module.exports = router;