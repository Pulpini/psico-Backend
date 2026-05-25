const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api", require("./routes/userRoutes"));

app.use("/api", require("./routes/pacienteRoutes"));

app.listen(process.env.PORT, ()=>{
    console.log("Servidor levantado");
});