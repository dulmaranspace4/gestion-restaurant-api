const express = require('express');
const router = express.Router();

// Mock data
let reservations = [];

// Créer une réservation
router.post('/', (req, res) => {
    const reservation = req.body;
    reservations.push(reservation);
    res.status(201).json(reservation);
});

// Lire toutes les réservations
router.get('/', (req, res) => {
    res.json(reservations);
});

// Mettre à jour une réservation
router.put('/:id', (req, res) => {
    const { id } = req.params;
    let index = reservations.findIndex(r => r.id === id);
    if (index === -1) {
        return res.status(404).send('Réservation non trouvée');
    }
    reservations[index] = { ...reservations[index], ...req.body };
    res.json(reservations[index]);
});

// Supprimer une réservation
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    reservations = reservations.filter(r => r.id !== id);
    res.status(204).send();
});

module.exports = router;