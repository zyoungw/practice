const express = require('express')
const app = express()
app.get('/api/info', (req, res) => { 
  res.json({
    name:'这是一个名字',
    age:5, 
    msg:'鹅鹅鹅， 曲项向天歌'
  }) 
})
app.listen('9092')
  