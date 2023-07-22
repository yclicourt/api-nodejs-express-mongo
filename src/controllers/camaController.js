import Cama from '../models/Cama.js'

export const getAllCamas = async (req, res)=>{

  try {
    const all = await Cama.find();
    res.status(200).json(all)
  } catch (error) {
    res.status(200).json(error)
  }
}
    

export const getCama = async(req, res) => {

  try {
    const oneCama = await Cama.findById(req.params.id)
    res.status(oneCama?200:400).json(oneCama?oneCama:{})
  } catch (error) {
    res.status(500).json(error)
  }
}

export const createCama = async(req, res) => {
  const newCama = Cama(req.body)
  try {
    const saved = await newCama.save();
    res.status(201).json(saved)
  } catch (error) {
    res.status(500).json(error)
  }
}
export const updateCama = async(req, res) =>{

try {
  const updatedCama = await Cama.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
  res.status(200).json(updatedCama)
} catch (error) {
  res.status(500).json(error)
}

}


export const deleteCama = async(req, res) => {

  try {
    await Cama.findByIdAndDelete(req.params.id)
    res.status(200).json({"mensaje":"Eliminado con exito"})
  } catch (error) {
    res.status(500).json(error)
  }

}
