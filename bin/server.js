import { mkdir } from 'fs/promises';

import app from '../app';
import db from '../lib/db-connection';

const PORT = process.env.PORT || 5000;

db.then(() => {
  app.listen(PORT, async () => {
    await mkdir(process.env.UPLOAD_DIR, { recursive: true });
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
}).catch(err => {
  console.log(`Server not running. Error: ${err.message}`);
});

// sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
// const msg = {
//   to: 'vpoklad@yahoo.com', // Change to your recipient
//   from: 'vpoclad@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent');
//   })
//   .catch(error => {
//     console.error(error);
//   });
