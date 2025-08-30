const express = require('express');
const app = require('./app');
const reservationsRouter = require('./routes/reservations');
const ordersRouter = require('./routes/orders');

app.use('/api/reservations', reservationsRouter);
app.use('/api/orders', ordersRouter);