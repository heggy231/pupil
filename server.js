const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const { Mentor } = require("./models");
const session = require("express-session");

const app = express();

// ----------------------------------------------------------------------------
//                                Middleware
// ----------------------------------------------------------------------------
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sess = {
  secret: "keyboard mouse",
  cookie: { maxAge: 600000 },
  id: null,
};
app.use(session(sess));

const PORT = 8080;

app.get("/heartbeat", (req, res) => {
  res.send("Hello!! I am heartbeat Kingsley channel!");
});

// Posting data from the form to the database.
app.post("/api/mentors", async (req, res) => {
  console.log("got it done")
  const { firstName, lastName, email, type, skills, about } = req.body;
  const newMentor = await Mentor.create({
    firstName,
    lastName,
    email,
    type,
    skills,
    about,
  });
  res.json({
    id: newMentor.id,
  });
});

// This GET request gets all mentors from the database.
app.get("/api/mentors", async (req, res) => {
  const mentors = await Mentor.findAll();
  res.json(mentors);
});


app.get("/api/skilltypes/:type", async (req, res) => {
  const mentorType = req.params.type
  const getMentorType = await Mentor.findAll({
    where: {
      type: mentorType
    }
  });
  res.json(getMentorType);
});

app.get("/api/profiles/:id", async (req, res) => {
  const mentorId = req.params.id
  const getMentorId = await Mentor.findAll({
    where: {
      id: mentorId
    }
  });
  res.json(getMentorId);
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});