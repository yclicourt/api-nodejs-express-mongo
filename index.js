import express from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose'


/* Rutas */
import camaRoute from './src/routes/camas.js'
import medicoRoute from './src/routes/medico.js'
import pacienteRoute from './src/routes/pacientes.js'

const app = express()
const port = 3000
dotenv.config()
//Conexion a la bd
const connect = async ()=>{
    try {
        const myConn =  await mongoose.connect(process.env.MONGODB_URI)  
        console.log("Conectado a mongo DB")
    } catch (error) {
        console.log(error)
    }
}

/* Middleware */
app.use(express.json())
app.use('/api/v1/cama',camaRoute)
app.use('/api/v1/medico',medicoRoute)
app.use('/api/v1/paciente',pacienteRoute)


app.get("/",(req,res)=>{
    res.send("Hola Mundo")
})

app.listen(port,()=>{
    connect()
    console.log(`Server listen on port ${port}`)
})  
