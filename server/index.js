const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const compliments = ["Gee, you're a smart cookie!",
"Cool shirt!",
"Your Javascript skills are stellar.",
];

app.get("/api/compliment", (req, res) => {
  // const compliments = ["Gee, you're a smart cookie!",
	// 				 "Cool shirt!",
	// 				 "Your Javascript skills are stellar.",
  // ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.post('/api/compliment', (req, res) => {
    const addComp = ["Cool shoes",
                "I like your hat",
              "you have great taste in music"]
    compliments.push(addComp)
    res.status(200).send(randomCompliment)
})

app.delete('/api/compliment', (req, res) => {
  let {id} = req.params
  let index = compliments.findIndex(comp => +comp.id === +id)
  compliments.splice(index, 1)
  res.status(200).send(randomCompliment)
})



app.get("/api/compliment", (req, res) => {
  const fortunes = ['Your hair will grow back',
            'You will find love',
          'a faithful friend is a strong defense',
          'Its a good time to finish a task',
          'A pleasent surprise is waiting for you'];

  let randomInd = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomInd]

  res.status(200).send(randomFortune)
})

app.listen(4000, () => console.log("Server running on 4000"));
