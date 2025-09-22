const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Random number (1-100)
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Check guess
app.post("/guess", (req, res) => {
  const { number } = req.body;
  if (number == secretNumber) {
    return res.json({ message: "🎉 Correct! You guessed it!" });
  } else if (number > secretNumber) {
    return res.json({ message: "🔽 Too High!" });
  } else {
    return res.json({ message: "🔼 Too Low!" });
  }
});

// Reset game
app.get("/reset", (req, res) => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  res.json({ message: "New game started!" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
