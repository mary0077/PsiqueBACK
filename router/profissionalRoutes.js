const express = require('express');
const router = express.Router();

router.post('/signin', (req, res) => {
  res.json({ message: 'Rota de paciente entrar' });
});
router.get('/getProfissionais', (req, res) => {
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

router.post('/forgot-password', (req, res) => {
    res.json({ message: 'rota de esqueceu a senha' });
  });

  router.post('/reset-password ', (req, res) => {
    res.json({ message: 'rota redifinir senha ' });
  });


module.exports = router;