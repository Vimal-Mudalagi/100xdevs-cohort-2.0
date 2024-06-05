const express = require("express");
const { createTODO } = require("./types");
const { todo } = require("./db");
const cors = require('cors')
const app = express(); //initialises empty express app

app.use(express.json()); //make sure post end points work. will be able to parse the body if its a json body
app.use(cors());

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsePayload = createTODO.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs!!"
        })
        return;
    }
    //put it in mpngho db
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })
    res.json({
        msg: "Todo craeted"
    })
})

app.get("/todos", async function (req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsePayload = createTODO.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs!!"
        })
        return;
    }
    //put it in mpngho db
    await todo.update({
        _id: res.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "todo marked as completed"
    })
})

app.listen(3000);