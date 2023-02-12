import { connect } from 'mongoose';
import express from 'express';
import { User } from './user.js';


const PORT = 3000;
const MONGODB_URI =
  'mongodb+srv://ThisIsForSchool:lSaFPLvHIk2bPCCz@cluster0.mtqaf6e.mongodb.net/test?retryWrites=true&w=majority';

const app = express();



try {
  const mongoConnect = async () => {
    await connect(MONGODB_URI);
  };

  mongoConnect();

  app.use(express.json());

  app.post('/users', async (req, res) => {
    try {
      const user = new User(req.body);

      await user.validate(); 

      await user.save(); 

      res.status(201).send(user);
    } catch (error) {

      res.status(400).send(error.message); 
    }
  });

  app.listen(PORT, () => console.log(`listening on port ${PORT}`));

} catch (err) {
  console.error(err);
}


