const router = require('express').Router();
const {Comment} = require ('../../model');



router.get('/', async(req, res)=>{
    try{
        const commentData = await Comment.findAll(req.params.id,{
            include: [
                {
                    model: Comment,
                    attributes: ['comment'],
                },
            ],
        });

        const comments = commentData.map((comments) => comments.get({ plain: true }));
        res.status(200).json(comments);

    } catch(err){
        res.status(500).json(err)

    }
})





router.post('/', async(req, res)=>{
    try{
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        })

     res.status(200).json(newComment);
    }catch(err){
     res.status(400).json(err);
    }
})



router.delete('/:id', async (req, res) => {
    try {
      const userComment = await Comment.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!userComment) {
        res.status(404).json({ message: 'No comment found' });
        return;
      }
  
      res.status(200).json(userComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  