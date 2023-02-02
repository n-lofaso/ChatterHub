const sequelize = require('../config/connection');
const { Interests } = require('../models');

const interestData = require('../seeds/interestData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await Interests.bulkCreate(interestData, {
        individualHooks: true,
        returning: true,
    });
  
    process.exit(0);
};
  
  seedDatabase();