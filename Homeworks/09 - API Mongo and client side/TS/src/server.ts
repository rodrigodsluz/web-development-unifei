import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import crudRoutes from './routes/crud';

const app = express();

app.engine('html', require('ejs').renderFile);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(cors());

app.use('/', crudRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`🚀 Server has started on port ${port}`);
});

mongoose
  .connect(`${process.env.DATABASE_LOCAL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('✈ Database connected locally'));

mongoose.connection.on('error', (err) => {
  console.log(`Database connection error: ${err.message}`);
});
