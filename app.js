import express from "express";
import path, { dirname } from 'path';
import { fileURLToPath } from "url";

// Define __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
// Set up EJS for templating
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
];

// Render the index.ejs file with messages
app.get('/', (req, res) => {
    res.render('index', { messages });
});

// Test route for '/new'
app.get('/new', (req, res) => {
    res.render('new')
});

app.post('/new', (req, res) => {
    let message = req.body.message
    let user = req.body.name

    messages.push({ text: message, user: user, added: new Date() });
    console.log(messages)
    res.redirect('/')
})


// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

//const links = [
//    { href: "/", text: "Home" },
//    { href: "about", text: "About" }
//  ];
//  
//  const users = ["Rose", "Cake", "Biff"];
//  
//  // Routes
//  app.get("/", (req, res) => {
//    res.render("index", { links: links, users: users });
//  });
  


//index.ejs:
//<html>
//  <head>
//    <title>Homepage</title>
//    <link rel="stylesheet" href="/styles.css">
//  </head>
//  <body>
//    <%- include('navbar', { links: links }) %>
//
//    <ul>
//      <% users.forEach((user) => { %>
//        <%- include('users/user', { user: user }); %>
//      <% }); %>
//    </ul>
//  </body>
//</html>