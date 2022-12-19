import express from "express";
import request from "request";

const app = express();

app.get("/", (req, res) =>{
    res.send("hello eko");
});

app.test("test expressjs : ", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("hello world");
});
