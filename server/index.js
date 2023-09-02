const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8080;
const User = require('./models/user.model');

//New imports
const http = require('http').Server(app);
const cors = require('cors');
const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://FrenzyNetwork:ArjuGanteng123@cluster0.lzebt2o.mongodb.net/?retryWrites=true&w=majority')

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});

app.post('/api/users/signupuser', async (req, res) => {
  console.log(req.body)
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    res.json({status: 'ok'})
  } catch (err) {
    res.json({status: 'error', error: 'Duplicate Email'})
  }
});

app.post('/api/users/signinuser', async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  })
  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      'frenzy737679'
      )
    return res.json({status: 'ok', user: token})
  } else {
    return res.json({status: 'error', user: false})
  }
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});