const express = require('express');

const app = express();
const port = 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true },
  { useUnifiedTopology: true },
  () => console.log('Connected to DB'),
).catch((err) => console.error(err));

app.use(express.json());

app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(port, () => console.log(`Nossa API está rodando na porta: ${port}!`));
