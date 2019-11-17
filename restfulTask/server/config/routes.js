const tasks = require('../controllers/tasks.js');

module.exports = function(app){    
    app.get("/", tasks.index);
    app.get("/tasks/:_id", tasks.showTask);
    app.post("/tasks", tasks.createTask);
    app.put("/update/:_id", tasks.updateTask);
    app.delete("/remove/:_id", tasks.deleteTask);
}

