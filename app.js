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


app.put("/complete/todo/:name", (req, res) => {
    const todo = req.params.name
    let o 
    const found = todos.find((element , index ) => {
        o = index

      return element.todo === todo;
    });
  
    if (found) {
      res.status(200);

      todos[o].isCompleted = true ;

      res.json(todos[o])


  
    } else {
      res.status(404);
      res.json("todo not found");
    }


});





app.get("/completed/todos", (req, res) => {
  const compTodo = []
  todos.forEach(function(elem , i ){
    if(elem.isCompleted === true) {
      compTodo.push(elem)
    }
  })

  if(compTodo[0]){
    res.status(200);
    res.json(compTodo) } else {
      res.json("there is no completed todo")
    }



});





































app.listen(3500, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
  