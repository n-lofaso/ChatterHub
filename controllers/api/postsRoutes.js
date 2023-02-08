const router = require('express').Router();
const {Post} = require ('../../model');
const withAuth = require('../../utils/auth');



router.get('/', async(req, res)=>{
    try{
        const postsData = await Post.findAll(req.params.id,{
            include: [
                {
                    model: Post,
                    attributes: ['title, interest_id'],
                },
            ],
        });

        const posts = postsData.map((posts) => posts.get({ plain: true }));
        res.status(200).json(posts);

    } catch(err){
        res.status(500).json(err)

    }
})





router.post('/', async(req, res)=>{
    try{
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        })

     res.status(200).json(newPost);
    }catch(err){
     res.status(400).json(err);
    }
})



router.delete('/:id', async (req, res) => {
    try {
      const userPost = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!userPost) {
        res.status(404).json({ message: 'No post found' });
        return;
      }
  
      res.status(200).json(userPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  