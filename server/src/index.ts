import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from "dotenv";

import { connectDB } from './config/db';
import routes from './routes/user.routes';


dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Define your Express app logic here
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
})

app.use(routes)

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
