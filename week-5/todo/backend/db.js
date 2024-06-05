const mongoose = require("mongoose");

// .env
mongoose.connect("mongodb+srv://pushpamudalagi123:moXpzBTIqD@cluster0.scnf1nj.mongodb.net/todo")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}
