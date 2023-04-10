const sequelize = require('../config/connection');
const seedComments = require('./commentSeeds');
const seedPosts = require('./postSeeds');
const seedUsers = require('./userSeeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----/n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  
  process.exit(0);
};

seedDatabase();
