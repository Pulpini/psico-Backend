const jwt = require("jsonwebtoken");

const verificarToken = (req,res,next)=>{

    try{

        const token = req.header("Authorization");

        jwt.verify(token,process.env.JWT_SECRET);

        next();

    }catch(error){
        res.status(401).json({
            mensaje:"Token inválido"
        });
    }
};

module.exports = verificarToken;