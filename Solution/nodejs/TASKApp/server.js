
//a Separate responsibility  for  hosting server and setting middleware

const express = require('express');
var path=require('path');
var app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Data Store

var customers=[
  {"id":12,"firstname":"Rajiv", "lastname":"Patil", "email":"rajiv.patil@gmail.com","contactnumber":"9883478549"},
  {"id":13,"firstname":"Sanjiv", "lastname":"Nene", "email":"sanjiv.n@gmail.com","contactnumber":"988349849"},
  {"id":14,"firstname":"Rahul", "lastname":"Verma", "email":"rahul.v@gmail.com","contactnumber":"9883478549"},
  {"id":16,"firstname":"Narendra", "lastname":"Jadhav", "email":"narendra.j@gmail.com","contactnumber":"9873478549"},
  {"id":17,"firstname":"Ravindra", "lastname":"Dixit", "email":"ravindra.d@gmail.com","contactnumber":"9883478549"},
  {"id":18,"firstname":"Devendra", "lastname":"Kumar", "email":"devendra.k@gmail.com","contactnumber":"9883878549"},
];

var flowers=[{ "id":1,"name":"Marigold", "description":"Wedding flower","unitprice":12, "quantity":5000},
   { "id":2,"name":"Jasmine", "description":"valentine flower","unitprice":50, "quantity":400},
   { "id":3,"name":"Lily", "description":"worship flower","unitprice":10, "quantity":9800},
   { "id":4,"name":"Rose", "description":"delicate flower","unitprice":20, "quantity":1400}
]

// API Handlers
// API Controllers

app.get("/",function(req, res){
                                res.sendFile("index.html");
                              });

  app.get('/api/flowers', function(req, res){
    res.send(flowers);
    console.log("server side GET is invoked.")
});

app.post("/api/flowers",function(req, res){  
    var newFlower=JSON.stringify(req.body);
    flowers.push(req.body);  
    console.log(newFlower);
});

// 
app.post("/api/account",function(req, res){  
    var user=JSON.stringify(req.body);
    console.log(user);
});


app.get("/api/login",(req,res)=>{
    //server side users credentials are verified
    var claim=req.body;
    if(claim.username =="ravi" && claim.password =="seed"){
        console.log("valid user");
    }
    else
    {
        console.log("invalid user");
    }
    console.log(claim);
    res.send("success");

})


app.post("/api/login",(req,res)=>{
    //server side users credentials are verified
    var claim=req.body;
    if(claim.username =="ravi" && claim.password =="seed"){

        console.log("valid user");
    }
    else
    {
        console.log("invalid user");
    }
    console.log(claim);
})

app.post("/api/register",(req,res)=>{
    //server side  will add new customer to customers collection
    var newCustomer=req.body;
    customers.push(newCustomer)

    console.log(customers);
})

app.post("/api/contact",(req,res)=>{
    //server side  will add new customer to customers collection
    var requester=req.body;

    console.log(requester);
})


//update logic for existing flower 

app.put("/api/flowers/:id", function(req, res){
    let id = req.params.id;
    for (var i = 0; i < flowers.length; i++)
    {
        if (flowers[i].id == id)
        flowers[i] = req.body;
    }
    console.log(req.body);
    res.send(req.body);
});


//get flower details based on id sent from client

app.get('/api/flowers/:id', function(req, res){
    let id = req.params.id;
    let f = flowers.find(x => x.id == id);
    res.send(f);
});

//delete  flower details based on id sent from client

app.delete("/api/flowers/:id", function(req, res){
    let id = req.params.id;
    flowers = flowers.filter(x => x.id != id);
    res.send(flowers);
});


var routes = require('./router'); //importing route
routes(app); //register the route
var onListen=function(){
  console.log("server is listening on port 3000")
}
app.listen(3000,onListen);