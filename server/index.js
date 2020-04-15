var express=require('express');
var app=express();
var bodyParser=require('body-parser');
require('dotenv').config();

const mongoose=require('mongoose');

const mainRoutes=require('./Routes/mainRoutes');


// var cors=require('cors');

// app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const database_url=process.env.database_url;

mongoose.connect(`${database_url}`,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log('Database Connected');
    })
    .catch((error)=>{
        console.log('Error connecting to database',error);
    });

app.use(express.static('./build/'));

app.use(/^((?!(api)).)*/, (req, res) => {
    res.sendFile('index.html',{root:"build"});
  });

app.use('/api',mainRoutes);

var port=4000;

app.listen(port,()=>{
   console.log(`app listening at ${port}`)
})
