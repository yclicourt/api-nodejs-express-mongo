import mongoose from "mongoose";


const pacienteSchema = new mongoose.Schema({
    nombre:String,
    apellido: String,
    enfermadad:String,
    edad:Number,
    fechaIngreso: { type:Date,default: Date.now},
    

})

export default mongoose.model("Paciente",pacienteSchema)