require('dotenv').config();
const express = require('express');
const path = require('path');
const Sequelize = require ("sequelize");
const { Mentors } = require('./models/mentors')

const server = express();

const { PORT } = process.env;

// Serving up the static build file for React
server.use(express.static(path.resolve(__dirname + '/react-ui/build')));

server.get('/heartbeat', (req, res) => {
  res.send('Hello!! I am heartbeat channel!');
});

server.get("/api/mentors", async (req, res) => {
  const mentor = await mentors.findAll();
  res.json(mentor);
});


// app.post("/api/mentors", async (req, res) => {
//   const { firstName, lastName, email, type, skills, about } = req.body;
//   const newMentor = await Mentor.create({
//     firstName,
//     lastName,
//     email,
//     type,
//     skills,
//     about,
//   });
//   res.json({
//     id: newMentor.id,
//   });
// });

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});