import mongoose from "mongoose";


const camaSchema = new mongoose.Schema({
    descripcion:String,
    codigoPaciente: String,

})

export default mongoose.model("Cama",camaSchema)