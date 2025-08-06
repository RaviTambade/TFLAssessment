// API routes for Controller callback functions
//a Separate responsibility  for navigation

var taskController=require("./taskcontroller");
var flowerController=require("./flowercontroller");

module.exports=function(app){
//mapping code for different HTTP requests 

//Tasks HTTP request Mapping   

app.route("/tasks")
    .get(taskController.getAll)
    .post(taskController.insert);

app.route('/tasks/:id')
    .get(taskController.getBy)
    .put(taskController.update)
    .delete(taskController.remove);

//Flowers HTTP request Mapping    
app.route("/flowers")
    .get(flowerController.getAll)
    .post(flowerController.insert);

app.route('/flowers/:id')
    .get(flowerController.getBy)
    .put(flowerController.update)
    .delete(flowerController.remove);
};

//SOC : 
// thiS WAY of writing code is nothing but following some framework, pattern
// MVC ( Model View Controller)