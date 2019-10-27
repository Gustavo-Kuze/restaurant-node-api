const express = require('express');

const app = express();
const port = 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { authRouter, postsRouter } = require('./routes/');

dotenv.config();

mongoose
  .connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    { useUnifiedTopology: true },
  )
  .catch((err) => console.error(err));

app.use(express.json());

app.use('/api/user', authRouter);
app.use('/api/posts', postsRouter);

app.listen(port, () => console.log(`API iniciada na porta: ${port}!`));
