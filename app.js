import express from "express";
import path, { dirname } from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT

const app = express();

app.set("views", path.join(__dirname, "public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})