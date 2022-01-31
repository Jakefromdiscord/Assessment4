const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.


app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});



app.get("/api/fortune", (req, res) => {
  const fortunes = ['Your hair will grow back',
            'You will find love',
          'a faithful friend is a strong defense',
          'Its a good time to finish a task',
          'A pleasent surprise is waiting for you'];

  let randomInd = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomInd];

  res.status(200).send(randomFortune);
});

const compArr = []
let id = 1


app.post('/api/compliments', (req, res) => {
  const {comp} = req.body;

  let newComp = {
    id,
    comp
  }

  compArr.push(newComp)
  id++

  res.status(200).send(compArr)

  console.log(req.body)
})

app.delete('/api/compliments/:compId', (req, res) => {
  const compId = +req.params.compId

  const targetInd = compArr.findIndex(comps =>{
    return comps.id === compId
  })

  const removed = compArr.splice(targetInd, 1)

  console.log(targetInd)

  res.status(200).send(removed[0, compArr])
})




app.listen(4000, () => console.log("Server running on 4000"));
