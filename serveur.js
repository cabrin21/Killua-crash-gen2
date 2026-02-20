// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Route principale pour générer un code à 8 chiffres
app.get('/api/code', (req, res) => {
  // Générer 8 chiffres aléatoires
  const code = Math.floor(10000000 + Math.random() * 90000000).toString();
  res.json({ code });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Backend KILLUA en ligne sur http://localhost:${PORT}`);
});
