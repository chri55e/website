const express = require('express')
const app = express() // initialize app
const port = 3000

// GET callback function returns a response message
app.get('/', (req, res) => {
    res.send('Hello World! Welcome to Node.js')
})


app.get('/visits', (req, res) => {
	counter += 1
      // Text formatting from ‘text formatting’ JavaScript prelab section
	res.send(`There have been ${counter} visits to this session`);
});

app.get('/rock', (req, res) => {
});
app.get('/paper', (req, res) => {
});
app.get('/scissors', (req, res) => {
});

//rock route
app.get('/rock', (req, res) => {
    const computerChoice = Math.floor(Math.random() * 3) + 1
    const userChoice = 1 // rock = 1
  
    let result = ''
    if (computerChoice === userChoice) {
      result = 'Tie!'
    } else if (
      (computerChoice === 2 && userChoice === 1) ||
      (computerChoice === 3 && userChoice === 2) ||
      (computerChoice === 1 && userChoice === 3)
    ) {
      result = 'Computer wins!'
    } else {
      result = 'You win!'
    }
  
    res.send(`Computer chose ${computerChoice}. ${result}`)
  })

  // Paper route
app.get('/paper', (req, res) => {
    const computerChoice = Math.floor(Math.random() * 3) + 1
    const userChoice = 2 // paper = 2
  
    let result = ''
    if (computerChoice === userChoice) {
      result = 'Tie!'
    } else if (
      (computerChoice === 1 && userChoice === 2) ||
      (computerChoice === 3 && userChoice === 1) ||
      (computerChoice === 2 && userChoice === 3)
    ) {
      result = 'Computer wins!'
    } else {
      result = 'You win!'
    }
  
    res.send(`Computer chose ${computerChoice}. ${result}`)
  })
  
  // Scissors route
  app.get('/scissors', (req, res) => {
    const computerChoice = Math.floor(Math.random() * 3) + 1
    const userChoice = 3 // scissors = 3
  
    let result = ''
    if (computerChoice === userChoice) {
      result = 'Tie!'
    } else if (
      (computerChoice === 2 && userChoice === 3) ||
      (computerChoice === 1 && userChoice === 2) ||
      (computerChoice === 3 && userChoice === 1)
    ) {
      result = 'Computer wins!'
    } else {
      result = 'You win!'
    }
  
    res.send(`Computer chose ${computerChoice}. ${result}`)
  })

  
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})