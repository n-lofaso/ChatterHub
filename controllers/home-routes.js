const router = require('express').Router();
const { User, Interests, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const interestsData = await Interests.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const interests = interestsData.map((interests) => interests.get({ plain: true }));
  
      res.render('homepage');
    } catch (err) {
      res.status(500).json(err);
    }
  });