const pool = require("../config/db");

const crearUsuario = async(nombre, email, password) => {
    const consulta = {
        text: "INSERT INTO usuarios(nombre,email,password) VALUES($1,$2,$3)",
        values: [nombre,email,password]
    };

    await pool.query(consulta);
};

const obtenerUsuarios = async() => {
    const result = await pool.query("SELECT * FROM usuarios");
    return result.rows;
};

module.exports = {
    crearUsuario,
    obtenerUsuarios
};