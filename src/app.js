const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Bienvenue dans l'API de gestion des réservations et des commandes');
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});