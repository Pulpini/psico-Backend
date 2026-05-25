const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
    crearUsuario,
    obtenerUsuarios
} = require("../models/userModel");

const registrar = async(req,res) => {

    try {

        const {nombre,email,password} = req.body;

        const passwordEncriptada = await bcrypt.hash(password,10);

        await crearUsuario(
            nombre,
            email,
            passwordEncriptada
        );

        res.json({
            mensaje:"Usuario registrado"
        });

    } catch(error){
        res.status(500).json(error);
    }
};

const login = async(req,res)=>{

    const token = jwt.sign(
        {email:req.body.email},
        process.env.JWT_SECRET,
        {expiresIn:"1h"}
    );

    res.json(token);
};

const usuarios = async(req,res)=>{

    try{
        const data = await obtenerUsuarios();
        res.json(data);

    }catch(error){
        res.status(500).json(error);
    }
};

module.exports = {
    registrar,
    login,
    usuarios
};