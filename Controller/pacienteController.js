const {
    crearPaciente
} = require("../models/pacienteModel");

const registrarPaciente = async(req,res)=>{

    try{

        await crearPaciente(req.body);

        res.json({
            mensaje:"Paciente registrado"
        });

    }catch(error){

        res.status(500).json({
            error:error.message
        });
    }
};

module.exports = {
    registrarPaciente
};