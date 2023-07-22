import Medico from '../models/Medico.js'

export const getAllMedicos = async(req, res) => {

  try {
    const medicos = await Medico.find()
    res.status(200).json(medicos)
  } catch (error) {
    res.status(500).json(error)
  }

} 
export const getMedico= async(req, res) =>{

try {
  const oneMedico = await Medico.findById(req.params.id)
  res.status(oneMedico?200:400).json(oneMedico?oneMedico:{})
} catch (error) {
  res.status(500).json(error)
}

}
export const createMedico = async(req, res) => {

  const newMedico = new Medico(req.body)
  try {
    const saved = await newMedico.save()
    res.status(201).json(saved)
  } catch (error) {
    res.status(500).json(error)
  }

}


export const updateMedico = async (req, res) =>{

  try {
    const updatedMedico = await Medico.findByIdAndUpdate(
      req.params.id,{$set:req.body},{new:true})
      res.status(200).json(updatedMedico)
  } catch (error) {
    res.status(500).json(error)
  }
}
export const deleteMedico = async(req, res) =>{

  try {
    const deleteMedico = await Medico.findByIdAndDelete()
    res.status(200).json({"mensaje":"Eliminado con exito"})
  } catch (error) {
    res.status(500).json(error)
  }


}
