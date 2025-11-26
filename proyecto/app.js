const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',       
    password: '1234', 
    database: 'nba_app',   
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error("Error al conectar a MySQL:", err);
    } else {
        console.log("Ccoonectado a MySQL correctamente");
    }
});


app.get('/', (req, res) => {
    db.query("SELECT * FROM players", (err, results) => {   
        if (err) throw err;
        res.render('index', { jugadores: results });
    });
});


app.get('/add', (req, res) => {
    res.render('add');
});


app.post('/add', (req, res) => {
    const { nombre, estatura, edad, equipo } = req.body;

    db.query(
        "INSERT INTO players (nombre, estatura, edad, equipo) VALUES (?,?,?,?)",  
        [nombre, estatura, edad, equipo],
        (err) => {
            if (err) throw err;
            res.redirect('/');
        }
    );
});


app.get('/edit/:id', (req, res) => {
    const id = req.params.id;

    db.query("SELECT * FROM players WHERE id = ?", [id], (err, results) => {  
        if (err) throw err;
        res.render('edit', { jugador: results[0] });
    });
});


app.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    const { nombre, estatura, edad, equipo } = req.body;

    db.query(
        "UPDATE players SET nombre = ?, estatura = ?, edad = ?, equipo = ? WHERE id = ?", // ← CORREGIDO
        [nombre, estatura, edad, equipo, id],
        (err) => {
            if (err) throw err;
            res.redirect('/');
        }
    );
});


app.get('/delete/:id', (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM players WHERE id = ?", [id], (err) => { 
        if (err) throw err;
        res.redirect('/');
    });
});


app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
