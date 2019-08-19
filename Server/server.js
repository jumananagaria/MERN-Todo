const express = require("express");
const mongoose = require("mongoose");
var cors= require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const API_PORT = 3001;

const dbUri= "mongodb+srv://gigglywiggly:qwerty123@cluster0-7qkwh.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(dbUri,{ useNewUrlParser: true })
.then(console.log("DB connected!"))
.catch(err=>console.log("error in connecting DB"));

const DSchema = mongoose.Schema;

const Data = new DSchema(
  {
    title: String,
    complete: {
        type:Boolean,
        default:false
    }
  }
);

const Todo=mongoose.model("todos", Data);

app.get("/todos",(req,res)=>{
Todo.find().then(todo=>res.json(todo))
});

app.post("/todos",(req,res)=>{
    const newTodo= new Todo({
        title:req.body.title
    })
    newTodo.save().then(todo=>res.json(todo))
})

app.delete("/todos/:id",(req,res)=>{
    Todo.findByIdAndDelete(req.params.id)
    .then(()=>res.json({remove:true}))
})

app.listen(API_PORT, () => console.log(`LISTENING ON UHH PORT ${API_PORT}`));