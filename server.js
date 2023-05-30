const express = require('express');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importação das rotas e inicializaçao com o metodo app.use()
const pacienteRoutes = require('./routes/pacienteRoutes');
const profissionalRoutes = require('./routes/profissionalRoutes');
const consultaRoutes = require('./routes/consultaRoutes');
const homeRoutes = require('./routes/homeRoutes');
const AdmRoutes = require('./routes/AdmRoutes');
app.use('/', homeRoutes);
app.use('/pacientes', pacienteRoutes);
app.use('/profissionais', profissionalRoutes);
app.use('/consultas', consultaRoutes);
app.use('/administracoes', AdmRoutes);

app.listen(PORT, () => console.log(`server running in localhost:${PORT}`));

