//crear el servidor y activa el cors
const express = require('express');
const cors = require('cors');

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

//http://localhost:3005/ruta-de-prueba 

app.listen(port,()=>{
    console.log('servidor corriendo correctamente')
})