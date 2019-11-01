const express = require('express');

const app = express();
const port = 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const {
  userRouter,
  postsRouter,
  mysqlRouter,
  addressRouter,
  personRouter,
} = require('./routes/');

dotenv.config();

mongoose
  .connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    { useUnifiedTopology: true },
  )
  .catch((err) => console.error(err));

app.use(express.json());

app.use('/api/usuario', userRouter);
app.use('/api/posts', postsRouter);
app.use('/api/mysql', mysqlRouter);
app.use('/api/endereco', addressRouter);
app.use('/api/informacoes-pessoais', personRouter);

app.listen(port, () => console.log(`API iniciada na porta: ${port}!`));
