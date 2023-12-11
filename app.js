const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

// Funciones
const createPath = (filename) => path.join(__dirname, `/views/${filename}.html`);

// Configuraciones
app.use(express.static('public')); // Recursos STATIC

// Rutas
app.get("/", (req, res) => {
    res.sendFile(createPath("index"));
});
app.get("/babbage", (req, res) => {
    res.sendFile(createPath("babbage"));
});
app.get("/berners-lee", (req, res) => {
    res.sendFile(createPath("berners-lee"));
});
app.get("/clarke", (req, res) => {
    res.sendFile(createPath("clarke"));
});
app.get("/hamilton", (req, res) => {
    res.sendFile(createPath("hamilton"));
});
app.get("/hopper", (req, res) => {
    res.sendFile(createPath("hopper"));
});
app.get("/lovelace", (req, res) => {
    res.sendFile(createPath("lovelace"));
});
app.get("/turing", (req, res) => {
    res.sendFile(createPath("turing"))
})

// Servidor ON
app.listen(port, () => console.log(`http://localhost:${port}`));
