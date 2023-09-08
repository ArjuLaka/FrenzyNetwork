require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT || 8080;
const User = require('./models/user.model');
const mongoPassword = process.env.MONGO_PASSWORD;
const jwtToken = process.env.JWT_TOKEN;

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

mongoose.connect(`mongodb+srv://FrenzyNetwork:${mongoPassword}@cluster0.lzebt2o.mongodb.net/?retryWrites=true&w=majority`)

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});

app.get('/api/article/1', (req, res) => {
  res.json({
    title: 'Energi Bersih dan Terjangkau',
    author: 'Arju Laka Khairu',
    date: '3 September 2023',
    content:'Renewable energy solutions are becoming cheaper, more reliable and more efficient every day.Our current reliance on fossil fuels is unsustainable and harmful to the planet, which is why we have to change the way we produce and consume energy. Implementing these new energy solutions as fast as possible is essential to counter climate change, one of the biggest threats to our own survival.',
    //tags: ['SDGS', 'Energi', 'Sustainable Development Goals']
  });
})

app.get('/api/article/2', (req, res) => {
  res.json({
    title: 'Pekerjaan yang Layak dan Pertumbuhan Ekonomi',
    author: 'Arju Laka Khairu',
    date: '4 September 2023',
    content:'Goal 8 dalam Tujuan Pembangunan Berkelanjutan (TPB) atau yang dikenal dengan sebutan SDGs memiliki tujuan mendukung pertumbuhan ekonomi yang inklusif dan berkelanjutan, tenaga kerja penuh dan produktif dan pekerjaan yang layak bagi semua. SDGs dalam universitas berfokus pada peran universitas sebagai mesin untuk pertumbuhan ekonomi dan tanggung jawab mereka sebagai pemberi kerja. Ini mengeksplorasi penelitian ekonomi lembaga, praktik ketenagakerjaan mereka dan bagian dari mahasiswa yang mengambil penempatan kerja.',
    //tags: ['SDGS', 'Energi', 'Sustainable Development Goals']
  });
})

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
      `${jwtToken}`
      )
    return res.json({status: 'ok', user: token})
  } else {
    return res.json({status: 'error', user: false})
  }
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});