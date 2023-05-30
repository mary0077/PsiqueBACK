const express = require('express');
const router = express.Router();

router.get('/entrar', (req, res) => {
  res.json({ message: 'rota de paciente entrar' });
});
router.post('/signup', (req, res) => {
  res.json({ message: 'rota de cadastro' });
});

router.post('/forgot-password', (req, res) => {
    res.json({ message: 'rota de esqueceu a senha' });
  });

  router.post('/reset-password ', (req, res) => {
    res.json({ message: 'rota redifinir senha ' });
  });


  
module.exports = router;

// pacienteModel.js

// Importa o JSON do paciente
const pacienteData = require('./paciente.json');

// Função para obter os dados do paciente
function getPaciente() {
  return pacienteData;
}

// Exporta a função getPaciente
module.exports = { getPaciente };

// pacienteController.js

const pacienteModel = require('./pacienteModel');

// Rota para obter os dados do paciente
app.get('/pacientes/:id', (req, res) => {
  const pacienteId = req.params.id;
  const paciente = pacienteModel.getPaciente();

  // Verifica se o paciente existe e retorna os dados
  if (paciente && paciente.id === pacienteId) {
    res.json(paciente);
  } else {
    res.status(404).json({ message: 'Paciente não encontrado' });
  }
});

