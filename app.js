const express = require("express");
const app = express();
const port = 3500;

// a middleware that enables us to read the received JSON data
app.use(express.json());


const todos = [
 { todo: " wake up", isCompleted: false },
 { todo: "Eat Breakfast", isCompleted: false }
];

app.get("/todos" , (req , res) => {
    res.status(200);

    /*todos.forEach( function(elem , i){
     res.json(elem.todo);
    })*/

    const todo_list = []


    for(let i = 0 ; i<todos.length ; i++ ){
        todo_list.push(todos[i].todo);
    }
    
    res.json(todo_list);

});


app.post("/create/todo", (req, res) => {
 
    const newTodo = { todo: req.body.todo , isCompleted: req.body.isCompleted };
  
   
    todos.push(newTodo);
 
  
   
    res.status(201);
    
    res.json(newTodo);
  
});
































app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
  