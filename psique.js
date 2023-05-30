const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');

// Configuração do servidor
const app = express();
const port = 3000;

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conexão com o banco de dados (exemplo usando o MySQL)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario_mysql',
  password: 'sua_senha_mysql',
  database: 'psique_virtual',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL');
});

// Rota para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para cadastro de usuários
app.post('/usuarios', (req, res) => {
  const { nome, email, senha } = req.body;
  const sql = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;
  connection.query(sql, [nome, email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar usuário:', err);
      res.status(500).send('Erro ao cadastrar usuário.');
    } else {
      console.log('Usuário cadastrado com sucesso');
      res.status(200).send('Usuário cadastrado com sucesso.');
    }
  });
});

app.get('/getProfissionais', (req, res) => {
  res.json([
    {
      "id": 1,
      "nome": "Dr. João Silva",
      "descricao": "Psicólogo clínico especializado em terapia cognitivo-comportamental.",
      "crp": "12345",
      "foto": "https://example.com/foto1.jpg"
    },
    {
      "id": 2,
      "nome": "Dra. Maria Santos",
      "descricao": "Psicóloga clínica com experiência em terapia familiar.",
      "crp": "54321",
      "foto": "https://example.com/foto2.jpg"
    },
    {
      "id": 3,
      "nome": "Dr. Pedro Oliveira",
      "descricao": "Psiquiatra especializado em transtornos de ansiedade.",
      "crp": "98765",
      "foto": "https://example.com/foto3.jpg"
    },
    {
      "id": 4,
      "nome": "Dra. Ana Rodrigues",
      "descricao": "Psicóloga infantil com foco em terapia de jogo.",
      "crp": "24680",
      "foto": "https://example.com/foto4.jpg"
    },
    {
      "id": 5,
      "nome": "Dr. Lucas Ferreira",
      "descricao": "Psicólogo clínico com experiência em terapia de casal.",
      "crp": "13579",
      "foto": "https://example.com/foto5.jpg"
    }
  ]);
});



// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
