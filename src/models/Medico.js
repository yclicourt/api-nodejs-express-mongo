import mongoose from "mongoose";


const medicoSchema = new mongoose.Schema({
    nombre:String,
    apellido: String,
    especialidad:String,
    
})

export default mongoose.model("Medico",medicoSchema)