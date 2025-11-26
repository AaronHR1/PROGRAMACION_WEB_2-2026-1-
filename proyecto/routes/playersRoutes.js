const express = require('express');
const router = express.Router();

module.exports = (db) => {

    
    router.get('/', (req, res) => {
        db.query("SELECT * FROM players", (err, results) => {
            if (err) throw err;
            res.render("index", { players: results });
        });
    });

    
    router.post('/add', (req, res) => {
        const { nombre, estatura, edad, equipo } = req.body;

        const sql = "INSERT INTO players (nombre, estatura, edad, equipo) VALUES (?, ?, ?, ?)";
        db.query(sql, [nombre, estatura, edad, equipo], (err) => {
            if (err) throw err;
            res.redirect('/');
        });
    });


    router.get('/delete/:id', (req, res) => {
        const id = req.params.id;

        const sql = "DELETE FROM players WHERE id = ?";
        db.query(sql, [id], (err) => {
            if (err) throw err;
            res.redirect('/');
        });
    });

    return router;
};
