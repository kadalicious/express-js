import express from "express";
import request from "supertest";

const app = express();


// route
app.get('/',(req, res) => {
    res.send('welcome dimas haha');
});

app.get("/about", (req,res) => {
   res.send("ini adalah halaman about");
});

app.get("/profil", (req, res) => {
   res.send("ini halaman profil");
});








app.listen(3000, () => console.log('server running at http://localhost:3000'));