const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 8080;

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (e.g., CSS, FontAwesome)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page (render the login form)
app.get('/', (req, res) => {
  res.render('index'); // Assuming your login form is in 'views/index.ejs'
});

// Endpoint to handle form submissions (on form submit, render response)
// Endpoint to handle form submissions (on form submit, render response)
app.post('/submit', (req, res) => {
    const { fullname, phone, age, username, email, password } = req.body;
  
    // Check for empty fields (basic client-side validation)
    if (!fullname || !phone || !age || !username || !email || !password) {
      return res.send("All fields are required!");
    }
  
    // You can add further validation and logic here, e.g., user authentication
  
    // Render response page with form data including password
    res.render('response', { fullname, phone, age, username, email, password });
  });
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
