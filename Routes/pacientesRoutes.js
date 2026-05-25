const express = require("express");

const router = express.Router();

const {
    registrarPaciente
} = require("../controllers/pacienteController");

router.post("/pacientes", registrarPaciente);

module.exports = router;