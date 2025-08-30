const express = require('express');
const router = express.Router();

// Mock data
let orders = [];

// Créer une commande
router.post('/', (req, res) => {
    const order = req.body;
    orders.push(order);
    res.status(201).json(order);
});

// Lire toutes les commandes
router.get('/', (req, res) => {
    res.json(orders);
});

// Gérer d'autres méthodes si nécessaire (update, delete)

module.exports = router;