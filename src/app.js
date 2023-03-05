import express from 'express';
import 'dotenv';
import cors from 'cors';
import http from 'http';
import routes from './routes/index';;

const app = express();
const server = http.createServer(app);;

app.use(
  cors({
    origin: '*'
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the moody recommendation system app' });
});

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log('server up running on port ', port);
});

export default server;