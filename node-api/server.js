const express = require('express');
const mongoose = require('mongoose')
const requireDIR = require('require-dir')
const app = express();
const cors = require('cors')

capp.use(cors())
app.use(express.json())

//iniciando banco de dados
mongoose.connect(
  'mongodb://MarjSantos:3655@huntweb-shard-00-00.5nxju.mongodb.net:27017,huntweb-shard-00-01.5nxju.mongodb.net:27017,huntweb-shard-00-02.5nxju.mongodb.net:27017/HuntWeb?ssl=true&replicaSet=atlas-561s7s-shard-0&authSource=admin&retryWrites=true&w=majority')
  .then(() => {
    console.log('Mongodb conectado com sucesso')

  }).catch((err) => {
    console.log(err)
  });


requireDIR('./src/models');

// const product = mongoose.model('product')


app.use('/api', require('./src/routs'))
app.listen(3001);