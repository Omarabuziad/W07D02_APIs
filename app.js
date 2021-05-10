const express = require("express");
const app = express();
const port = 3500;

// a middleware that enables us to read the received JSON data
app.use(express.json());


const todos = [
 { todo: "wake up", isCompleted: false },
 { todo: "Eat Breakfast", isCompleted: false }
];

app.get("/todos" , (req , res) => {
    res.status(200);
    
    res.json(todos);

});


app.post("/create/todo", (req, res) => {
 
    const newTodo = { todo: req.body.todo , isCompleted: req.body.isCompleted };
  
   
    todos.push(newTodo);
 
  
   
    res.status(201);
    
    res.json(newTodo);
  
});


app.put("/update/todo/:name", (req, res) => {
    const todo = req.params.name
    let i 
  
    const found = todos.find((element , index ) => {
        i = index

      return element.todo === todo;
    });
  
    if (found) {
      res.status(200);
      const updTodo = { todo: req.body.todo , isCompleted: req.body.isCompleted };

      todos[i] = updTodo
  

    
      res.json(updTodo);

    } else {
      res.status(404);
      res.json("todo not found");
    }


});


app.delete("/delete/todo/:name", (req, res) => {
    const todo = req.params.name
    let i 
  
    const found = todos.find((element , index ) => {
        i = index

      return element.todo === todo;
    });
  
    if (found) {
      res.status(200);
      todos.splice(i,1)
  
      res.json(found);

    } else {
      res.status(404);
      res.json("todo not found");
    }


});








































app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
  