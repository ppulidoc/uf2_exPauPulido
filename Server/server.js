const express = require('express');
const app = express();
const cors = require('cors');

const axios = require('axios');
app.use(cors());

app.use(express.json());
port = 3080;

app.listen(port, () => {
  console.log(`Server listening on the port:: ${port}`)
})


const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  database: 'uni_pau_pulido'
});

// Establecer conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});


//---------------------------------------------------------------------
//  EXERCISI 1
app.post('/api/ex1', (req,res) =>{
  const sql =`
SELECT p.PROF_DNI, p.PROF_NOM, p.PROF_COGNOM_1, p.PROF_TELEFON
FROM professor p
JOIN departament d ON p.PROF_DEPT_CODI = d.DEPT_CODI
WHERE p.PROF_CATEGORIA = 'Associat' AND d.DEPT_NOM != 'INFORMATICA I MATEMATICA APLICADA';`

  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error executing the query: ' + error.stack);
      return;
    }
    console.log('Lista de profesores:');
    for (const row of results) {
      console.log(`DNI: ${row.PROF_DNI}`);
      console.log(`Nom: ${row.PROF_NOM}`);
      console.log(`Cognom: ${row.PROF_COGNOM_1}`);
      console.log(`Telefon: ${row.PROF_TELEFON}`);
      console.log('--------------------------------');
    }
    connection.end();
  });
})


//---------------------------------------------------------------------
//---------------------------------------------------------------------

// EXERCISI 2

app.post('/api/virgenSanta', (req, res) => {
  try {
    connection.query('ALTER TABLE alumnes ADD COLUMN ALUMN_VIRGEN INT DEFAULT 0', (error, results) => {
      if (error) {
        //m'has dit que ho podia deixar aixi
        console.log('Maria maria...');
      }
      console.log('Column added successfully');
      res.sendStatus(200);
    });
  } catch (error) {
    console.error('Error adding column:', error.message);
    res.status(500).json({ error: error.message });
  } finally {
    connection.end();
  }
});


