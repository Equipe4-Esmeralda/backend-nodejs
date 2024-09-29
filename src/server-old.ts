import { Request, Response } from 'express';
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(express.json()); // For parsing JSON bodies

const port = 3000;

app.listen(port, () => console.log("Server is running."))


// GET POST PUT DELETE
app.get("/customers", async (req: Request, res: Response) => {
  const customers = await prisma.customers.findMany();
  return res.json(customers);
});


app.get("/customers/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const costumer = await prisma.customers.findUnique({
      where: {id}
  });
  if (costumer == null) {
      return res.status(404).json();
  }
  return res.json(costumer);
});


app.post("/customers", async (req: Request, res: Response) => {
const { name, email, document } = req.body;
const customer = await prisma.customers.create({
  data: {
      name,
      email,
      document
  }
});
return res.status(201).json(customer);
});


app.delete("/customers/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const customer = await prisma.customers.findUnique({
      where: {id}
  });

  if (customer == null) {
      return res.status(404).json();
  }
  await prisma.customers.delete({
      where: {id}
  });
  return res.status(204).json();
});


app.put("/customers/:id", async (req: Request, res: Response) =>{
  const id = req.params.id; 
  const {name, email, document} = req.body;
  const customer = await prisma.customers.findUnique({
      where: {id}
  });

  if (customer == null) {
      return res.status(404).json({msg: "Not found."});
  }
  const customerUpdated = await prisma.customers.update({
      where: {id},
      data: {
          name,
          email,
          document
      }
  });
  return res.json(customerUpdated);
});


// CRUD Routes

// Create (POST/ users)

// Read (GET/ users)

// Update (PUT /users/:id)

// Delete (DELETE /users/:id)

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://admin:JWpSgjftiqcD5OdD@cluster0.006br.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
