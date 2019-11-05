const express = require('express');
const cors = require('cors');

const app = express();
const port = 5203;
const dotenv = require('dotenv');
const {
  userRouter,
  postsRouter,
  addressRouter,
  personRouter,
  productRouter,
  orderRouter,
} = require('./src/routes/');

dotenv.config();

app.use(express.json());

app.use(cors());
app.options('*', cors());

app.use('/api/usuario', userRouter);
app.use('/api/posts', postsRouter);
app.use('/api/endereco', addressRouter);
app.use('/api/produto', productRouter);
app.use('/api/informacoes-pessoais', personRouter);
app.use('/api/compra', orderRouter);

app.listen(port, () => console.log(`API iniciada na porta: ${port}!`));
