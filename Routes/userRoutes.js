const express = require("express");

const router = express.Router();

const {
    registrar,
    login,
    usuarios
} = require("../controllers/userController");

const verificarToken = require("../middleware/auth");

router.post("/registro", registrar);

router.post("/login", login);

router.get("/usuarios", verificarToken, usuarios);

module.exports = router;