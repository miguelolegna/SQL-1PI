const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Diretório onde deseja colocar o banco de dados
const diretorioDoBancoDeDados = 'C:\Users\migue\OneDrive\Документи\PI1\teste db';

// Garante que o diretório exista; caso não exista, ele será criado
if (!fs.existsSync(diretorioDoBancoDeDados)){
    fs.mkdirSync(diretorioDoBancoDeDados);
}

// Caminho completo do banco de dados
const caminhoDoBancoDeDados = path.join(diretorioDoBancoDeDados, 'Escola.db');

// Cria uma nova instância do banco de dados SQLite no caminho especificado
const db = new sqlite3.Database(caminhoDoBancoDeDados);


// Rota para obter dados do banco de dados
app.get('/dados', (req, res) => {
    db.all("SELECT * FROM tabela", (err, rows) => {
        if (err) {
            console.error("Erro ao executar a consulta", err.message);
            res.status(500).send("Erro ao obter dados do banco de dados");
        } else {
            res.json(rows);
        }
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`);
});
