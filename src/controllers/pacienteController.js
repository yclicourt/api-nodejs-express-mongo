import Paciente from '../models/Paciente.js'

export const getAllPacientes = async (req, res) =>{

  try {
    const all = await Paciente.find()
    res.status(200).json(all)
  } catch (error) {
    res.status(500).json(error)
  }

}

export const getPaciente = async (req, res) => {

  try {
    const onePaciente = await Paciente.findById(req.params.id)
    res.status(onePaciente?200:400).json(onePaciente?onePaciente:{})
  } catch (error) {
    res.status(500).json(error)
  }

}



export const createPacientes = async(req, res) => {
  const newPaciente = new Paciente(req.body)
  try {
  const saved = await newPaciente.save()
  res.status(201).json(saved)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updatePacientes = async(req, res) =>{

  try {
    const updatedPaciente = await Paciente.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.status(200).json(updatedPaciente)
  } catch (error) {
    res.status(500).json(error)
  }
  
}
export const deletePacientes = async (req, res) => {


  try {
    await Cama.findByIdAndDelete(req.params.id)
    res.status(200).json({"mensaje":"Eliminado con exito"})
  } catch (error) {
    res.status(500).json(error)
  }  
}
