const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect('mongodb://localhost:27017/Student', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => console.log('DB Connected'))
  .catch((err) => console.error('DB Connection Error:', err));

const newSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

const newModel = mongoose.model('Student1', newSchema); 

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index1.html");
});

app.get('/data', (req, res) => {
  res.sendFile(__dirname+"/data.html");
});

app.post('/student', (req, res) => {
  const newStudent = new newModel({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });
  newStudent.save()
  .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    })
  });

  app.get('/vijay', (req, res) => {
    newModel.find()
    .then((data) => {
        res.send(data);
      })
   .catch((err) => {
       console.log(err);
       res.send(err);
    })
    });


app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
