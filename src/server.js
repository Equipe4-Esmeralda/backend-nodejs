const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const port = 3000;

app.listen(port, () => console.log("Server is running."))


// app.use(express.json()); // For parsing JSON bodies

// CRUD Routes

// Create (POST/ users)

// Read (GET/ users)

// Update (PUT /users/:id)

// Delete (DELETE /users/:id)


