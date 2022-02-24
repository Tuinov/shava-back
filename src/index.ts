import express, { Request, Response} from 'express';
// import cookieSession from 'cookie-session';
import expressSession from 'express-session'
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';
import './controllers/TrenController';
import './controllers/ProductController';
import './controllers/OrderController';
import bodyParser, { json } from 'body-parser';
import 'dotenv/config'

const app = express();

app.use(json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieSession({ keys: ['asfadsfadfs'] }));

app.use(
  expressSession({
    secret: 'sjsjkfrjkfkrjf',
    resave: true,
    saveUninitialized: false,
  })
);

app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
