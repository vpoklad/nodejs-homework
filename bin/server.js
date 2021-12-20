const app = require('../app');
require('dotenv').config();
const { connectMongo } = require('../db/connection');

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectMongo();
    console.log('Database connection successful');
    app.listen(PORT, err => {
      if (err) {
        console.error('Error at server launch', err);
        process.exit(1);
      }
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {}
};

start();
