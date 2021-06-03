const express = require('express');
const app = express();

const cors= require('cors');
app.use(cors());

app.set('port',process.env.PORT||3000);

app.get('/',(req,res) =>{
    res.json({mensaje:"Holaatodos"})
});

app.listen(app.get('port'),(error)=>{
    if(error){console.log("Haocurridounerror:",error);
}else{
    console.log("Servidorenpuerto:",app.get('port'));
    }
});

app.use(express.json);
app.use(express.urlencoded({ extended: false}));