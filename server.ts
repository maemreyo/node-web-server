import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3500;

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));