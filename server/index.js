var express=require('express');
var app=express();
var bodyParser=require('body-parser');

const mongoose=require('mongoose');

const mainRoutes=require('./Routes/mainRoutes');
// var cors=require('cors');

// app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/shopping')
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

app.listen(4000, function(){
    console.log('app listening on port 3000!');
  })
