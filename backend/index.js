//crear el servidor y activa el cors
const express = require('express');
const cors = require('cors');
const router = express.Router()
const english = require('./languages/en.json')
const spanish = require('./languages/es.json')

//configurar el puerto
const app = express();
const port = 3005;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//hacer una ruta de prueba 
app.get('/ruta-de-prueba',(req,res)=>{
    return res.status(200).json({
        status:"success",
        message:`La ruta puerto ${port} funciona correctamente`
    })
})

//http://localhost:3005/ 

app.listen(port,()=>{
    console.log('servidor corriendo correctamente')
})

//funciones de ingles
const dataEnglish = (req,res) =>{
    res.status(200).send(english)
}

const dataSpanish = (req,res) =>{
    res.status(200).send(spanish)
}

//ruta de ingles y español
app.get('/eng',dataEnglish)
app.get('/esp',dataSpanish)