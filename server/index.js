require('dotenv').config();
const path = require('path')
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const spawn = require('child_process').spawn;
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
app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect(`mongodb+srv://FrenzyNetwork:${mongoPassword}@cluster0.lzebt2o.mongodb.net/?retryWrites=true&w=majority`)

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});

app.post('/api/article/new', async (req, res) => {
  try {
    var process = await spawn('python', ["./PlagiarismChecker/plagiarism.py", `${req.body.articleText}`])
    process.stdout.on('data', function(data) {
    res.json({result: data});
    })
  } catch (err) {
    res.json({status: 'error', error: 'Ga bisa'})
  }
  })

app.get('/api/article/1', (req, res) => {
  res.json({
    title: 'Energi Bersih dan Terjangkau',
    author: 'Arju Laka Khairu',
    date: '3 September 2023',
    contents:['SDGS ke-7 adalah salah satu dari 17 Tujuan Pembangunan Berkelanjutan (Sustainable Development Goals - SDGs) yang ditetapkan oleh Perserikatan Bangsa-Bangsa (PBB) untuk mencapai pembangunan berkelanjutan hingga tahun 2030. SDGS ke-7 adalah "Energi Terjangkau dan Bersih" (Affordable and Clean Energy).', 'SDGS ke-7 sangat penting karena energi yang terjangkau, bersih, dan berkelanjutan memiliki dampak besar pada pembangunan sosial dan ekonomi, serta lingkungan. Upaya untuk mencapai SDGS ke-7 akan membantu mengurangi kemiskinan energi, meningkatkan akses ke layanan dasar, dan mengurangi emisi gas rumah kaca yang berkontribusi pada perubahan iklim global.', 'Ada beberapa masalah utama yang mendorong pembuatan SDGS ke-7 terkait dengan energi terjangkau dan bersih. Beberapa contoh masalah tersebut termasuk:', '<b>1. Akses Terbatas ke Energi', 'Di banyak bagian dunia, terutama di daerah pedesaan dan masyarakat miskin, akses terhadap energi yang terjangkau dan andal sangat terbatas. Banyak orang masih bergantung pada sumber energi tradisional seperti kayu bakar dan arang, yang tidak hanya tidak efisien tetapi juga berdampak buruk pada kesehatan manusia dan lingkungan.', '<b>2. Ketergantungan pada Sumber Energi Tidak Terbarukan','Rata-rata manusia masih ketergantungan dengan Energi tidak Terbarukan seperti menggunakan minyak bumi, batu bara, dan lain-lain. Oleh karena itu kita harus menyadari bahwa Energi yang Terbarukan akan menjadi solusi yang pas untuk masalah ini', '<b>3. Polusi Udara', 'Penggunaan bahan bakar fosil yang tidak bersih, seperti batu bara, minyak bumi, dan gas alam, telah menyebabkan tingkat polusi udara yang tinggi di beberapa wilayah. Ini mengakibatkan masalah kesehatan serius bagi penduduk lokal dan berkontribusi pada perubahan iklim global.', '<b>4. Perubahan Iklim', 'Emisi gas rumah kaca dari pembakaran bahan bakar fosil adalah penyebab utama perubahan iklim. Perubahan iklim mengakibatkan cuaca ekstrem, naiknya permukaan laut, dan berbagai dampak negatif lainnya.', 'SDGS ke-7 dirancang untuk mengatasi masalah-masalah ini dengan mempromosikan akses yang terjangkau dan bersih terhadap energi, meningkatkan efisiensi energi, dan mendukung energi terbarukan sebagai alternatif yang ramah lingkungan. Tujuannya adalah untuk menciptakan dunia yang lebih berkelanjutan dan berdaya energi.'],
    tags: ['SDGS', 'Energi', 'Sustainable Development Goals', 'Efisien', 'Bersih'],
    image: 'http://localhost:8080/sdgstujuh.png',
  });
})

app.get('/api/article/2', (req, res) => {
  res.json({
    title: 'Pekerjaan yang Layak dan Pertumbuhan Ekonomi',
    author: 'Arju Laka Khairu',
    date: '4 September 2023',
    contents:['Goal 8 dalam Tujuan Pembangunan Berkelanjutan (TPB) atau yang dikenal dengan sebutan SDGs memiliki tujuan mendukung pertumbuhan ekonomi yang inklusif dan berkelanjutan, tenaga kerja penuh dan produktif dan pekerjaan yang layak bagi semua. SDGs dalam universitas berfokus pada peran universitas sebagai mesin untuk pertumbuhan ekonomi dan tanggung jawab mereka sebagai pemberi kerja. Ini mengeksplorasi penelitian ekonomi lembaga, praktik ketenagakerjaan mereka dan bagian dari mahasiswa yang mengambil penempatan kerja.', 'Goal 8 sdgs ini merupakan hal yang penting untuk dilakukan karena sangat berdampak besar bagi negara. Oleh karen itu indonesia harus menanggulangi dan mencegah agar terhindar dari kesenjangan sosial.'],
    tags: ['SDGS', 'Energi', 'Sustainable Development Goals']
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