const express = require('express');
const app = express()
const port = 5000;
const mongoose = require("mongoose");
const passport = require("passport");
let cors = require('cors');



app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



let tasks_connection = mongoose.createConnection('mongodb://localhost:27017/tasks');




let tasks = tasks_connection.model('Model', new mongoose.Schema({
  "Title": {type: "String"},
  "Status": {type: "String"},
  "Representative": {type: "String"},
  "Description": {type: "String"},
  "Created": {type: "String"},
  "Tech_Stack": [{type: 'String'}],
  "id": {type: "String"},
  "code": {type: "String"},
}));


app.get('/getTasks', async (req, res) => {
  let data = await tasks.find();
  res.send(data);
});

app.post('/createTask', (req, res) => {
  let randomId = Math.random() * 10000;
  console.log(req.body);
  tasks.create({
    Title: req.body.title,
    Representative: req.body.representative,
    Description: req.body.description,
    Created: new Date(),
    id: randomId,
    code: "",
    Status: "new"
  });


  res.sendStatus(200);
})

app.post("/acceptTask", async (req, res) => {
let [taskId, code] = req.body;

let task = await tasks.find({id: taskId});

task.code = code;
task.status = "completed";
task.save();

res.sendStatus(200);

});



app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});


